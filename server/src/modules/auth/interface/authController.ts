import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import { LoginDto, VerifyDto } from "./dto";
import { AuthService } from "../core/authService";
import { TokenHelper } from "../helpers/tokenHelper";


@Controller("auth")
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post("/login")
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto)
    }

    @Post("/refresh")
    async refresh(@Req() req: Request, @Res({passthrough: true}) res: Response) {
        
        const tokens = await this.authService.refresh(req.cookies.refreshToken)
        TokenHelper.sendTokens(res, tokens)

        return {
            accessToken: tokens.accessToken
        }
    }

    @Post("/login-verify")
    async verify(@Body() dto: VerifyDto, @Res({ passthrough: true }) res: Response) {
        
        const tokens = await this.authService.verify(dto)
        TokenHelper.sendTokens(res, tokens)

        return {
            accessToken: tokens.accessToken
        }
    }
}
