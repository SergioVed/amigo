import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CeoEntity } from "src/modules/ceo/core/ceoEntity";
import { LoginInput, RefreshPayload } from "./types";
import type { ICeoRepository } from "src/modules/ceo/core/ceoRepository";
import bcrypt from "bcrypt"
import { TokenHelper } from "../helpers/tokenHelper";

@Injectable()
export class AuthService {

    constructor(
        private jwt: JwtService,
        private tokenHelper: TokenHelper,
        @Inject("ICeoRepository") private ceoRepo: ICeoRepository
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
        const ceo = await this.validateCredentials(data)

        const tokens = await this.generateAndSaveTokens(ceo)
        return tokens
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
