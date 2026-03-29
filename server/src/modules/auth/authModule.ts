import { Module } from "@nestjs/common";
import { AuthController } from "./interface/authController";
import { AuthService } from "./core/authService";
import { JwtModule } from "@nestjs/jwt";
import { CeoModule } from "../ceo/ceoModule";


@Module({
    imports: [JwtModule, CeoModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}