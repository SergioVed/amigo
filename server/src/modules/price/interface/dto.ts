import { IsNumber, IsString, IsIn } from "class-validator"
import type { PriceType } from "../core/priceEntity"
import { PartialType } from "@nestjs/swagger"
import { Type } from "class-transformer"


export class CreatePriceDto {
    @Type(() => Number)
    @IsNumber()
    amount: number

    @IsString()
    title: string

    @IsString()
    description: string

    @IsIn(["individual", "pair", "special"])
    type: PriceType
}

export class UpdatePriceDto extends PartialType(CreatePriceDto) {}