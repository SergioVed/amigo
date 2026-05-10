import { CeoEntity } from "src/modules/ceo/core/ceoEntity";
import { AccessPayload, RefreshPayload } from "../core/types";
import * as uuid from "uuid"
import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import type { Response } from "express";

@Injectable()
export class TokenHelper {

    constructor(
        private jwt: JwtService
    ) { }


    public async generateTokens(ceo: CeoEntity) {

        const accessPayload: AccessPayload = {
            _email: ceo.getEmail()
        }

        const refreshPayload: RefreshPayload = {
            _email: ceo.getEmail(),
            _jti: uuid.v4()
        }

        const accessToken = await this.jwt.signAsync(accessPayload, {
            secret: process.env.ACCESS_SECRET,
            expiresIn: "30m"
        })

        const refreshToken = await this.jwt.signAsync(refreshPayload, {
            secret: process.env.REFRESH_SECRET,
            expiresIn: "30d"
        })

        return {
            accessToken,
            refreshToken,
            jti: refreshPayload._jti
        }

    } 

    public static sendTokens = (res: Response, tokens) => {
        res.cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 15 * 24 * 60 * 60 * 1000,
        })
    }

    public static clearTokens = (res: Response) => {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })
    }
}