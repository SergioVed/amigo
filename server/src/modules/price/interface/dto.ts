import { IsNumber, IsString, IsIn, IsNotEmpty } from "class-validator"
import type { PriceCategory, PriceType } from "../core/priceEntity"
import { PartialType } from "@nestjs/swagger"
import { Type } from "class-transformer"


export class CreatePriceDto {
    @Type(() => Number)
    @IsNumber()
    amount!: number

    @IsString()
    @IsNotEmpty()
    title!: string

    @IsString()
    @IsNotEmpty()
    description!: string

    @IsIn(["individual", "pair", "special"])
    type!: PriceType

    @IsIn(["trial", "single", "with_mari", "subscription"])
    category!: PriceCategory
}

export class UpdatePriceDto extends PartialType(CreatePriceDto) {}