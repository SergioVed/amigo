import { InjectModel } from "@nestjs/sequelize";
import { Price } from "../core/priceEntity";
import { IPriceRepository } from "../core/priceRepository";
import { PriceMapper } from "./priceMapper";
import { PriceModel } from "./priceModel";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PriceRepositoryImpl implements IPriceRepository {

    constructor (
        @InjectModel(PriceModel) private priceModel: typeof PriceModel
    ) {}


    async getAll(): Promise<Price[]> {
        const prices = await this.priceModel.findAll()
        return prices.map((price) => PriceMapper.toDomain(price))
    }


    async getOne(id: number): Promise<Price | null> {
        const price = await this.priceModel.findByPk(id)

        if (!price) {
            return null
        }

        return PriceMapper.toDomain(price)
    }


    async save(price: Price): Promise<Price | null> {
        const id = price.getId()
        const data = PriceMapper.toPersistence(price)

        if (id === null) {
            const price = await this.priceModel.create(data)
            return PriceMapper.toDomain(price)
        }

        const existing = await this.priceModel.findByPk(id)

        if (!existing) {
            return null
        }

        await existing.update(data)

        return PriceMapper.toDomain(existing)
    }


    async delete(id: number): Promise<Price | null> {
        const priceToDelete = await this.priceModel.findByPk(id)
        if (!priceToDelete) {
            return null
        }
        
        const deletedRows = await this.priceModel.destroy({where: {id}})
        if (deletedRows === 0) {
            return null
        }
        
        return PriceMapper.toDomain(priceToDelete)
    }

}