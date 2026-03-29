import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { FeedbackService } from "../core/feedbackService";
import { CreateFeedbackDto, UpdateFeedbackDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";

@Controller("feedback")
export class FeedbackController {

    constructor(
        private feedbackService: FeedbackService
    ) {}

    @UseGuards(AuthGuard)
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