import { BadRequestException, Inject, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import bcrypt from "bcrypt";
import type { ICodeRepository } from "./codeReposiotry";
import { CodeEntity } from "./codeEntity";
import { VerifyInput } from "./types";


@Injectable()
export class CodeService {
    constructor(
        @Inject("ICodeRepository") private codeRepo: ICodeRepository
    ) {}

    async validateCode(data: VerifyInput): Promise<CodeEntity> {
        const code = await this.codeRepo.getByEmail(data.email)

        if (!code) {
            throw new NotFoundException("Code was not found")
        }
        if (code.getUsedAt() != null) {
            throw new UnauthorizedException("Code has already been used. Sign in again to request a new code.")
        }
        if (code.getExpiresAt() <= new Date()) {
            throw new UnauthorizedException("Code has expired. Sign in again to request a new code.")
        }

        const matches = await bcrypt.compare(data.code, code.getCodeHash())
        if (!matches) {
            throw new BadRequestException("Code is incorrect")
        }

        if (!(await this.codeRepo.consume(code))) {
            throw new UnauthorizedException("Code has already been used or replaced. Sign in again.")
        }
        return code
    }

    async sendCode(to: string, code: string) {
        const apiKey = process.env.BREVO_API_KEY
        const senderEmail = process.env.BREVO_SENDER_EMAIL
        const senderName = process.env.BREVO_SENDER_NAME ?? "AMIGO"

        if (!apiKey || !senderEmail) {
            throw new InternalServerErrorException("Email delivery is not configured")
        }

        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 10_000)

        try {
            const response = await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": apiKey,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    sender: {name: senderName, email: senderEmail},
                    to: [{email: to}],
                    subject: "Your AMIGO login verification code",
                    textContent: `Your verification code is ${code}. It expires in 10 minutes.`,
                    htmlContent: `<p>Your AMIGO login verification code is <strong>${code}</strong>.</p><p>It expires in 10 minutes.</p>`,
                }),
                signal: controller.signal,
            })

            const result = await response.json() as {messageId?: string, message?: string}
            if (!response.ok || !result.messageId) {
                throw new Error(result.message ?? `Brevo returned HTTP ${response.status}`)
            }
        } catch (error) {
            console.error("Could not send verification email through Brevo")
            throw new InternalServerErrorException("Failed to send verification code")
        } finally {
            clearTimeout(timeout)
        }

        const codeHash = await bcrypt.hash(code, 10)
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

        const existing = await this.codeRepo.getByEmail(to)
        if (existing) {
            existing.update({
                codeHash,
                expiresAt,
                usedAt: null
            })
            await this.codeRepo.save(existing)
        } else {
            const newCode = CodeEntity.create({
                codeHash,
                email: to,
                expiresAt
            })
            await this.codeRepo.save(newCode)
        }
    }
}
