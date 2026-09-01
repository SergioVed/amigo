import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CeoEntity } from "src/modules/ceo/core/ceoEntity";
import { LoginInput, RefreshPayload, VerifyInput } from "./types";
import type { ICeoRepository } from "src/modules/ceo/core/ceoRepository";
import bcrypt from "bcrypt"
import { TokenHelper } from "../helpers/tokenHelper";
import { randomInt, timingSafeEqual } from "crypto";
import { CodeService } from "src/modules/code/core/codeService";
import type { ICodeRepository } from "src/modules/code/core/codeReposiotry";
import { Response } from "express";


@Injectable()
export class AuthService {

    constructor(
        private jwt: JwtService,
        private tokenHelper: TokenHelper,
        private codeService: CodeService,
        @Inject("ICeoRepository") private ceoRepo: ICeoRepository,
        @Inject("ICodeRepository") private codeRepo: ICodeRepository
    ) { }

    public async refresh(refreshToken: string) {

        let payload: RefreshPayload;
        try {

            payload = await this.jwt.verifyAsync(refreshToken, {
                secret: process.env.REFRESH_SECRET
            })
        } catch {
            throw new UnauthorizedException("Invalid refresh token")
        }


        const ceo = await this.ceoRepo.getByEmail(payload._email)
        if (!ceo) {
            throw new NotFoundException("Ceo not found")
        }

        const currentHash = ceo.getRefreshJti()
        if (!currentHash) {
            throw new BadRequestException("Refresh token not found")
        }

        const matches = ceo.getRefreshJti() === payload._jti
        if (!matches) {
            throw new UnauthorizedException("Invalid refresh token")
        }

        const tokens = this.generateAndSaveTokens(ceo)
        return tokens
    }

    public async login(data: LoginInput) {
        const ceo = await this.validateCredentials(data)

        if (process.env.ADMIN_SKIP_VERIFICATION === "true") {
            const tokens = await this.generateAndSaveTokens(ceo)
            return {
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            }
        }

        const code = randomInt(100000, 1000000).toString()
        await this.codeService.sendCode(data.email, code)

        return {
            email: data.email
        }


    }

    public async verify(data: VerifyInput) {
        const ceo = await this.getCeoForLogin(data.email)
        if (!ceo) {
            throw new NotFoundException("No ceo was found with email " + data.email)
        }

        const code = await this.codeService.validateCode(data)

        code.update({ usedAt: new Date() })
        await this.codeRepo.save(code)

        const tokens = await this.generateAndSaveTokens(ceo)
        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        }
    }


    private async generateAndSaveTokens(ceo: CeoEntity) {
        const tokens = await this.tokenHelper.generateTokens(ceo)
        ceo.setRefreshJti(tokens.jti)
        await this.ceoRepo.save(ceo)

        return tokens
    }

    private async validateCredentials(data: LoginInput) {
        const { email, password } = data

        const ceo = await this.getCeoForLogin(email)
        if (!ceo) {
            throw new NotFoundException(`Ceo with email: ${email} not found`)
        }

        const configuredPassword = process.env.ADMIN_PASSWORD
        const passwordEquals = configuredPassword
            ? this.safeStringEquals(password, configuredPassword)
            : await bcrypt.compare(password, ceo.getPassword())

        if (!passwordEquals) {
            throw new UnauthorizedException("Password is incorrect")
        }

        return ceo
    }

    private async getCeoForLogin(email: string) {
        const configuredEmail = process.env.ADMIN_EMAIL
        const configuredPassword = process.env.ADMIN_PASSWORD

        if (Boolean(configuredEmail) !== Boolean(configuredPassword)) {
            throw new BadRequestException("ADMIN_EMAIL and ADMIN_PASSWORD must be configured together")
        }

        if (configuredEmail) {
            return this.safeStringEquals(email.toLowerCase(), configuredEmail.toLowerCase())
                ? this.ceoRepo.getOne(1)
                : null
        }

        return this.ceoRepo.getByEmail(email)
    }

    private safeStringEquals(left: string, right: string) {
        const leftBuffer = Buffer.from(left)
        const rightBuffer = Buffer.from(right)

        return leftBuffer.length === rightBuffer.length
            && timingSafeEqual(leftBuffer, rightBuffer)
    }

    public async logout(refreshToken: string) {
        if (!refreshToken) {
            return
        }

        let payload: RefreshPayload

        try {
            payload = await this.jwt.verifyAsync(refreshToken, {
                secret: process.env.REFRESH_SECRET
            })
        } catch {
            return;
        }

        const ceo = await this.ceoRepo.getByEmail(payload._email)

        if (!ceo || ceo.getRefreshJti() !== payload._jti || !ceo.getRefreshJti()) {
            return
        }

        ceo.clearRefreshJti()
        await this.ceoRepo.save(ceo)
    }

}
