import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FeedbackService } from "../core/feedbackService";
import { CreateFeedbackDto, UpdateFeedbackDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";
import { FeedbackResponseMapper } from "./feedbackResponseMapper";
import { FileInterceptor } from "@nestjs/platform-express";
import type { Express } from "express";
import { ImageService } from "src/modules/image/imageService";

@Controller("feedback")
export class FeedbackController {

    constructor(
        private feedbackService: FeedbackService,
        private imageService: ImageService
    ) {}

    @UseGuards(AuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor("file"))
    async create(
        @Body() dto: CreateFeedbackDto, 
        @UploadedFile() file: Express.Multer.File
    ) {
        const secure_url = await this.imageService.saveImage(file)

        const result = await this.feedbackService.create({...dto, avatarUrl: secure_url})
        return FeedbackResponseMapper.toResponse(result)
    }

    @Get()
    async getAll() {
        const result = await this.feedbackService.getAll()
        return result.map((item) => (
            FeedbackResponseMapper.toResponse(item)
        ))
    }

    @Get("/:id")
    getOne(@Param("id", ParseIntPipe) id: number) {
        return this.feedbackService.getOne(id)
    }

    @UseGuards(AuthGuard)
    @Patch("/:id")
    async update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateFeedbackDto) {
        const result = await this.feedbackService.update(id, dto)
        return FeedbackResponseMapper.toResponse(result)
    }

    @UseGuards(AuthGuard)
    @Delete("/:id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.feedbackService.delete(id)
    }
}