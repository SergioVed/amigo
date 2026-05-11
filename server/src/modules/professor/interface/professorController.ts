import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProfessorService } from "../core/professorService";
import { CreateProfessorDto, UpdateProfessorDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";
import { ProfessorResponseMapper } from "./professorResponseMapper";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImageService } from "src/modules/image/imageService";


@Controller("professor")
export class ProfessorController {

    constructor (
        private professorService: ProfessorService,
        private imageService: ImageService
    ) {}

    @Get()
    async getAll () {
        const professors = await this.professorService.getAll()
        return professors.map(professor => {
            return ProfessorResponseMapper.toResponse(professor)
        })
    }

    // @UseGuards(AuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor("file"))
    async create (
        @Body() dto: CreateProfessorDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        const secure_url = await this.imageService.saveImage(file)

        const professor = await this.professorService.create({...dto, avatarUrl: secure_url})
        return ProfessorResponseMapper.toResponse(professor)
    }

    @UseGuards(AuthGuard)
    @Put("/:id")
    async update (@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateProfessorDto) {
        const professor = await this.professorService.update(id, dto)
        return ProfessorResponseMapper.toResponse(professor)
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
