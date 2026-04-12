import { PartialType } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, IsUrl } from "class-validator";
import { CreateProfessorAttrs } from "../core/professorEntity";

export class CreateProfessorDto implements CreateProfessorAttrs {

    @IsUrl()
    @IsNotEmpty()
    avatarUrl!: string;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsString()
    subDescription!: string;

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
