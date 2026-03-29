import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CeoEntity } from "src/modules/ceo/core/ceoEntity";
import { LoginInput } from "./types";
import type { ICeoRepository } from "src/modules/ceo/core/ceoRepository";
import bcrypt from "bcrypt"


@Injectable()
export class AuthService {

    constructor (
        private jwt: JwtService,
        @Inject("ICeoRepository") private ceoRepo: ICeoRepository
    ) {}

    async login (data: LoginInput) {
        const {email, password} = data

        const ceo = await this.ceoRepo.getByEmail(email)
        if (!ceo) {
            throw new NotFoundException(`Ceo with email: ${email} not found`)
        }

        const passwordEquals = await bcrypt.compare(password, ceo.getPassword())
        if (!passwordEquals) {
            throw new UnauthorizedException("Password is incorrect")
        }

        return this.generateTokens(ceo)
    }

    private async generateTokens (ceo: CeoEntity) {
        const payload = {
            email: ceo.getEmail()
        }

        const accessToken = await this.jwt.signAsync(payload, {
            secret: process.env.ACCESS_SECRET,
            expiresIn: "30m"
        })

        const refreshToken = await this.jwt.signAsync(payload, {
            secret: process.env.REFRESH_SECRET,
            expiresIn: "15d"
        })

        return {
            accessToken,
            refreshToken
        }

    }
}