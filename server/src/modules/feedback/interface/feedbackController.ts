import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { FeedbackService } from "../core/feedbackService";
import { CreateFeedbackDto, UpdateFeedbackDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";
import { FeedbackResponseMapper } from "./feedbackResponseMapper";

@Controller("feedback")
export class FeedbackController {

    constructor(
        private feedbackService: FeedbackService
    ) {}

    // @UseGuards(AuthGuard)
    @Post()
    create(@Body() dto: CreateFeedbackDto) {
        return this.feedbackService.create(dto)
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
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateFeedbackDto) {
        return this.feedbackService.update(id, dto)
    }

    @UseGuards(AuthGuard)
    @Delete("/:id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.feedbackService.delete(id)
    }
}