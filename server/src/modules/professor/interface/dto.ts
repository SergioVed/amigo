import { PartialType } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsString } from "class-validator";
import { CreateProfessorAttrs } from "../core/professorEntity";

export class CreateProfessorDto implements CreateProfessorAttrs {
    @IsString()
    avatarUrl: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    subDescription: string;

    @IsString()
    videoUrl: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    superPower: string[];

    @IsString()
    favouriteWord: string;

    @IsString()
    forStudent: string;
}

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {}
