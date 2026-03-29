import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private jwt: JwtService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const authorization = request.headers.authorization

        const token = this.extractBearerToken(authorization)

        try {
            const user = await this.jwt.verifyAsync(token, {
                secret: process.env.ACCESS_SECRET
            })
            request.user = user
            return true
        } catch {
            throw new UnauthorizedException("Token is expoired or invalid")
        }

    }

    private extractBearerToken (authorization?: string) {
        if (!authorization) {
            throw new UnauthorizedException("Authorization header is missing")
        }

        const [bearer, token] = authorization.split(" ")
        if (bearer !== "Bearer" || !token) {
            throw new UnauthorizedException("Invalid authorization format")
        }

        return token
    }

}