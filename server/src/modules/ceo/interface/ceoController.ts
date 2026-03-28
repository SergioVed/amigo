import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CeoService } from "../core/ceoService";
import { CreateCeoDto, UpdateCeoDto } from "./dto";


@Controller("ceo")
export class CeoController {

    constructor (
        private ceoService: CeoService
    ) {}


    @Get("/:id")
    getOne(@Param("id", ParseIntPipe) id: number) {
        return this.ceoService.getOne(id)
    }

    @Post()
    create(@Body() dto: CreateCeoDto) {
        return this.ceoService.create(dto)
    }

    @Patch("/:id")
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateCeoDto) {
        return this.ceoService.update(id, dto)
    }
}