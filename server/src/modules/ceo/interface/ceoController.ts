import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { CeoService } from "../core/ceoService";
import { CreateCeoDto, UpdateCeoDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";
import { CeoResponseMapper } from "./ceoResponseMapper";


@Controller("ceo")
export class CeoController {

    constructor (
        private ceoService: CeoService
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

    @UseGuards(AuthGuard)
    @Put("/:id")
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateCeoDto) {
        return this.ceoService.update(id, dto)
    }
}