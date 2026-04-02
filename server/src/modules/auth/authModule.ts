import { Module } from "@nestjs/common";
import { AuthController } from "./interface/authController";
import { AuthService } from "./core/authService";
import { JwtModule } from "@nestjs/jwt";
import { CeoModule } from "../ceo/ceoModule";
import { TokenHelper } from "./helpers/tokenHelper";
import { CodeModule } from "../code/codeModule";


@Module({
    imports: [JwtModule, CeoModule, CodeModule],
    controllers: [AuthController],
    providers: [AuthService, TokenHelper]
})
export class AuthModule {}