import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto";
import { AuthService } from "../core/authService";


@Controller("auth")
export class AuthController {

    constructor(
        private authService: AuthService
    ){}

    @Post("/login")
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto)
    }

    @Post("/refresh")
    refresh() {

    }
}