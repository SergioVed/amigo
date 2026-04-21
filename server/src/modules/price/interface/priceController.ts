import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { PriceService } from "../core/priceService";
import { CreatePriceDto, UpdatePriceDto } from "./dto";
import { AuthGuard } from "src/guards/authGuard";
import { PriceResponseMapper } from "./priceResponseMapper";


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
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.priceService.delete(id)
    }

    @UseGuards(AuthGuard)
    @Patch("/:id")
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdatePriceDto) {
        return this.priceService.update(id, dto)
    }
}