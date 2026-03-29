import { OmitType, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsOptional, IsString, IsUrl, Length } from "class-validator";

export class CreateCeoDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(7, 15)
    password: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    telegram: string;

    @IsString()
    @IsNotEmpty()
    instagram: string;

    @IsUrl()
    @IsNotEmpty()
    image: string;

}


export class UpdateCeoDto extends PartialType(
    OmitType(CreateCeoDto, ["password"] as const)
) { }