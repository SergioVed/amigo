import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { PriceService } from "../core/priceService";
import { CreatePriceDto, UpdatePriceDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";
import { PriceResponseMapper } from "./priceResponseMapper";
import { Price } from "../core/priceEntity";


@Controller("price")
export class PriceController {

    constructor (
        private priceService: PriceService
    ) {}

    @Get()
    async getAll() {
        const prices = await this.priceService.getAll()
        return prices.map(price => {
            return PriceResponseMapper.toResponse(price)
        })
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() dto: CreatePriceDto) {
        const price = await this.priceService.create(dto)
        return PriceResponseMapper.toResponse(price)
    }

    @Get("/:id")
    getOne(@Param("id", ParseIntPipe) id: number) {
        return this.priceService.getOne(id)
    }

    @UseGuards(AuthGuard)
    @Delete("/:id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        const price = await this.priceService.delete(id)
        return PriceResponseMapper.toResponse(price)
    }

    @UseGuards(AuthGuard)
    @Put("/:id")
    async update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdatePriceDto) {
        const updatedPrice = await this.priceService.update(id, dto)
        return PriceResponseMapper.toResponse(updatedPrice)
    }
}