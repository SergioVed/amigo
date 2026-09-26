import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class LoginDto {
    @Transform(({ value }) => typeof value === "string" ? value.trim().toLowerCase() : value)
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string
}

export class VerifyDto {
    @Transform(({ value }) => typeof value === "string" ? value.trim().toLowerCase() : value)
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{6}$/, { message: "Enter the 6-digit verification code" })
    code!: string
}
