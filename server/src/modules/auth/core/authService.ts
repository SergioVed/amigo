import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CeoEntity } from "src/modules/ceo/core/ceoEntity";
import { LoginInput, RefreshPayload, VerifyInput } from "./types";
import type { ICeoRepository } from "src/modules/ceo/core/ceoRepository";
import bcrypt from "bcrypt"
import { TokenHelper } from "../helpers/tokenHelper";
import { randomInt } from "crypto";
import { CodeService } from "src/modules/code/core/codeService";
import type { ICodeRepository } from "src/modules/code/core/codeReposiotry";


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
        const payload: RefreshPayload = await this.jwt.verifyAsync(refreshToken, {
            secret: process.env.REFRESH_SECRET
        })


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
        await this.validateCredentials(data)
        
        const code = randomInt(100000, 1000000).toString()
        await this.codeService.sendActivationLink(data.email, code)
    }

    public async verify(data: VerifyInput) {
        const ceo = await this.ceoRepo.getByEmail(data.email)
        if (!ceo) {
            throw new BadRequestException("No ceo was found with email " + data.email)
        }

        const code = await this.codeService.validateCode(data)

        code.update({usedAt: new Date()})
        await this.codeRepo.save(code)

        const tokens = await this.generateAndSaveTokens(ceo)
        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        }
    }


    private async generateAndSaveTokens (ceo: CeoEntity) {
        const tokens = await this.tokenHelper.generateTokens(ceo)
        ceo.setRefreshJti(tokens.jti)
        await this.ceoRepo.save(ceo)

        return tokens
    }

    private async validateCredentials (data: LoginInput) {
        const { email, password } = data

        const ceo = await this.ceoRepo.getByEmail(email)
        if (!ceo) {
            throw new NotFoundException(`Ceo with email: ${email} not found`)
        }

        const passwordEquals = await bcrypt.compare(password, ceo.getPassword())
        if (!passwordEquals) {
            throw new UnauthorizedException("Password is incorrect")
        }

        return ceo
    }


}
