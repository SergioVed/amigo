import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { FeedbackService } from "../core/feedbackService";
import { CreateFeedbackDto, UpdateFeedbackDto } from "./dto";

@Controller("feedback")
export class FeedbackController {

    constructor(
        private feedbackService: FeedbackService
    ) {}

    @Post()
    create(@Body() dto: CreateFeedbackDto) {
        return this.feedbackService.create(dto)
    }

    @Get()
    getAll() {
        return this.feedbackService.getAll()
    }

    @Get("/:id")
    getOne(@Param("id", ParseIntPipe) id: number) {
        return this.feedbackService.getOne(id)
    }

    @Patch("/:id")
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateFeedbackDto) {
        return this.feedbackService.update(id, dto)
    }

    @Delete("/:id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.feedbackService.delete(id)
    }
}