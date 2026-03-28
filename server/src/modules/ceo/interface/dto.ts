import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUrl, Length } from "class-validator";

export class CreateCeoDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    telegram: string;

    @IsString()
    instagram: string;

    @IsUrl()
    image: string;
}


export class UpdateCeoDto extends PartialType(CreateCeoDto) {}