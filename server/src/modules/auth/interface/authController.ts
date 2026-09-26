import { Throttle, ThrottlerGuard } from "@nestjs/throttler";
import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import type { Request, Response } from "express";
import { LoginDto, VerifyDto } from "./dto";
import { AuthService } from "../core/authService";
import { TokenHelper } from "../helpers/tokenHelper";


@Controller("auth")
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @UseGuards(ThrottlerGuard)
    @Throttle({ default: { limit: 3, ttl: 60_000 } })
    @Post("/login")
    async login(
        @Body() dto: LoginDto,
        @Res({passthrough: true}) res: Response
    ) {
        const result = await this.authService.login(dto)

        if ("accessToken" in result && "refreshToken" in result) {
            TokenHelper.sendTokens(res, result)
            return {accessToken: result.accessToken}
        }

        return result
    }

    @Post("/refresh")
    async refresh(@Req() req: Request, @Res({passthrough: true}) res: Response) {
        
        const tokens = await this.authService.refresh(req.cookies.refreshToken)
        TokenHelper.sendTokens(res, tokens)

        return {
            accessToken: tokens.accessToken
        }
    }

    @UseGuards(ThrottlerGuard)
    @Throttle({ default: { limit: 5, ttl: 60_000 } })
    @Post("/login-verify")
    async verify(@Body() dto: VerifyDto, @Res({ passthrough: true }) res: Response) {
        
        const tokens = await this.authService.verify(dto)
        TokenHelper.sendTokens(res, tokens)

        return {
            accessToken: tokens.accessToken
        }
    }

    @Post("logout")
    async logout (@Req() req: Request, @Res({passthrough: true}) res: Response) {
        await this.authService.logout(req.cookies.refreshToken)
        TokenHelper.clearTokens(res)

        return {
            success: true
        }
    }
}
