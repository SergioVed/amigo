import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { IPriceRepository } from "./priceRepository";
import { CreatePriceAttrs, Price, UpdatePriceAttrs } from "./priceEntity";
import { NotFoundError } from "rxjs";

@Injectable()
export class PriceService {

    constructor (
        @Inject("IPriceRepository") private priceRepo: IPriceRepository
    ) {}

    public async create (data: CreatePriceAttrs) {
        const price = Price.create(data)
        const savedPrice = await this.priceRepo.save(price)

        if (!savedPrice) {
            throw new BadRequestException("Price was not created")
        }
        
        return savedPrice
    }

    public getAll () {
        return this.priceRepo.getAll()
    }

    public async getOne (id: number) {
        const price = await this.priceRepo.getOne(id)
        if (!price) {
            throw new NotFoundException("Price was not found")
        }
        return price
    }

    public async delete (id: number) {
        const price = await this.priceRepo.delete(id)
        if (!price) {
            throw new NotFoundException("Price was not found")
        }
        return price
    }

    public async update (id: number, data: UpdatePriceAttrs) {
        const price = await this.priceRepo.getOne(id)
        if (!price) {
            throw new NotFoundException("Price was not found")
        }

        price.update(data)
        const updatedPrice = await this.priceRepo.save(price)
        if (!updatedPrice) {
            throw new BadRequestException("Price was not updated")
        }

        return updatedPrice
    }
}