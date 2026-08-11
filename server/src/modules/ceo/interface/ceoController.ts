import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CeoService } from "../core/ceoService";
import { CreateCeoDto, UpdateCeoDto } from "./dto";
import { CeoResponseMapper } from "./ceoResponseMapper";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImageService } from "src/modules/image/imageService";
import type { Express } from "express";


@Controller("ceo")
export class CeoController {

    constructor (
        private ceoService: CeoService,
        private imageService: ImageService
    ) {}

    @Get("/:id")
    async getOne(@Param("id", ParseIntPipe) id: number) {
        const ceo = await this.ceoService.getOne(id)

        return CeoResponseMapper.toResponse(ceo)
    }

    // Add auth guard on production
    @Post()
    create(@Body() dto: CreateCeoDto) {
        return this.ceoService.create(dto)
    }

    // @UseGuards(AuthGuard)
    @Put("/:id")
    @UseInterceptors(FileInterceptor("file"))
    async update(
        @Param("id", ParseIntPipe) id: number,
        @Body() dto: UpdateCeoDto,
        @UploadedFile() file?: Express.Multer.File
    ) {
        const image = file ? await this.imageService.saveImage(file) : undefined
        const updatedCeo = await this.ceoService.update(id, {...dto, ...(image && {image})})
        
        return CeoResponseMapper.toResponse(updatedCeo)
    }
}
