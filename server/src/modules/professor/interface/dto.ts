import { PartialType } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";
import { Transform, Type } from "class-transformer";
import { CreateProfessorAttrs } from "../core/professorEntity.js";

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

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    superPower!: string[];

    @IsString()
    @IsNotEmpty()
    favouriteWord!: string;

    @IsString()
    @IsNotEmpty()
    forStudent!: string;
}

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {}
