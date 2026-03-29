import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ProfessorService } from "../core/professorService";
import { CreateProfessorDto, UpdateProfessorDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";


@Controller("professor")
export class ProfessorController {

    constructor (
        private professorService: ProfessorService
    ) {}

    @Get()
    async getAll () {
        const professors = await this.professorService.getAll()
        return professors
    }

    @UseGuards(AuthGuard)
    @Post()
    async create (@Body() dto: CreateProfessorDto) {
        const professor = await this.professorService.create(dto)
        return professor
    }

    @UseGuards(AuthGuard)
    @Put("/:id")
    async update (@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateProfessorDto) {
        const professor = await this.professorService.update(id, dto)
        return professor
    }

    @UseGuards(AuthGuard)
    @Get("/:id")
    async getOne (@Param("id", ParseIntPipe) id: number) {
        const professor = await this.professorService.getOne(id)
        return professor
    }

    @UseGuards(AuthGuard)
    @Delete("/:id")
    async delete (@Param("id", ParseIntPipe) id: number) {
        const professor = await this.professorService.delete(id)
        return professor
    }

}
