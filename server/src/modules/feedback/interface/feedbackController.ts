import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FeedbackService } from "../core/feedbackService";
import { CreateFeedbackDto, UpdateFeedbackDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";
import { FeedbackResponseMapper } from "./feedbackResponseMapper";
import { FileInterceptor } from "@nestjs/platform-express";
import type { Express } from "express";
import { ImageService } from "src/modules/image/imageService";
import { Throttle, ThrottlerGuard } from "@nestjs/throttler";

@Controller("feedback")
export class FeedbackController {

    constructor(
        private feedbackService: FeedbackService,
        private imageService: ImageService
    ) {}

    @UseGuards(AuthGuard, ThrottlerGuard)
    @Post()
    @UseInterceptors(FileInterceptor("file"))
    @Throttle({default: {limit: 5, ttl: 60_000}})
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
    @Put("/:id")
    @UseInterceptors(FileInterceptor("file"))
    async update(
        @Param("id", ParseIntPipe) id: number,
        @Body() dto: UpdateFeedbackDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        let avatarUrl: string
        if (!file) {
            const feedback = await this.feedbackService.getOne(id)
            avatarUrl = feedback.getUrl()
        } else {
            avatarUrl = await this.imageService.saveImage(file)
        }

        const result = await this.feedbackService.update(id, {...dto, avatarUrl: avatarUrl})
        return FeedbackResponseMapper.toResponse(result)
    }

    @UseGuards(AuthGuard)
    @Delete("/:id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.feedbackService.delete(id)
    }
}