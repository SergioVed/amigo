import { PartialType } from "@nestjs/swagger";
import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";
import { Transform, Type } from "class-transformer";
import type { Language } from "../core/professorEntity.js";

export class CreateProfessorDto {

    @IsString()
    @IsNotEmpty()
    name!: string;

    @Transform(({ value }) => value === true || value === "true")
    @IsBoolean()
    hasPriority!: boolean;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @Type(() => Number)
    @IsNumber()
    experience!: number;

    @IsUrl()
    @IsString()
    videoUrl!: string;

    @Transform(({ value }) => typeof value === "string" ? value.trim() : value)
    @IsString()
    @IsNotEmpty()
    superPower!: string;

    @IsString()
    @IsNotEmpty()
    favouriteWord!: string;

    @IsString()
    @IsNotEmpty()
    forStudent!: string;

    @IsIn(["SPANISH", "ENGLISH"])
    @IsNotEmpty()
    language!: Language
}

export class UpdateProfessorDto extends PartialType(CreateProfessorDto, { skipNullProperties: false }) {}
