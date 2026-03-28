import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PriceService } from "../core/priceService";
import { CreatePriceDto, UpdatePriceDto } from "./dto";


@Controller("price")
export class PriceController {

    constructor (
        private priceService: PriceService
    ) {}

    @Get()
    getAll() {
        return this.priceService.getAll()
    }

    @Post()
    create(@Body() dto: CreatePriceDto) {
        return this.priceService.create(dto)
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
        return this.priceService.getOne(id)
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {
        return this.priceService.delete(id)
    }

    @Put("/:id")
    update(@Param("id") id: number, @Body() dto: UpdatePriceDto) {
        return this.priceService.update(id, dto)
    }
}