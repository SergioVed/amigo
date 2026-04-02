import { BadRequestException, Inject, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import bcrypt from "bcrypt";
import nodemailer, { Transporter } from "nodemailer"
import type { ICodeRepository } from "./codeReposiotry";
import { CodeEntity } from "./codeEntity";
import { CodeMapper } from "../infrastructure/codeMapper";
import { VerifyInput } from "./types";


@Injectable()
export class CodeService {

    private transporter: Transporter

    constructor(
        @Inject("ICodeRepository") private codeRepo: ICodeRepository
    ) {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async validateCode(data: VerifyInput): Promise<CodeEntity> {
        const code = await this.codeRepo.getByEmail(data.email)

        if (!code) {
            throw new NotFoundException("Code was not found")
        }
        if (code.getUsedAt() != null) {
            throw new UnauthorizedException("Code was used before used at")
        }
        if (code.getExpiresAt() < new Date()) {
            throw new UnauthorizedException("Code was used before")
        }

        const equlals = await bcrypt.compare(data.code, code.getCodeHash())
        if (!equlals) {
            throw new BadRequestException("Code is incorrect")
        }

        return code
    }

    async sendActivationLink(to: string, code: string) {
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


        const info = await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Your login verification code",
            text: `Your code is ${code}`,
            html: `<p>Your login verification code is <strong>${code}</strong>.</p>`
        })

        if (!info.messageId) {
            throw new InternalServerErrorException("Failed to send verification code")
        }
    }
}
