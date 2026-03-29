import { InjectModel } from "@nestjs/sequelize";
import { CeoEntity } from "../core/ceoEntity";
import { ICeoRepository } from "../core/ceoRepository";
import { CeoModel } from "./ceoModel";
import { CeoMapper } from "./ceoMapper";
import { Transaction } from "sequelize";


export class CeoRepositoryImpl implements ICeoRepository {

    constructor (
        @InjectModel(CeoModel) private ceoModel: typeof CeoModel
    ) {}


    async getOne(id: number): Promise<CeoEntity | null> {
        const ceo = await this.ceoModel.findByPk(id)
        if (!ceo) {
            return null
        }
        return CeoMapper.toDomain(ceo)
    }

    async getByEmail(email: string): Promise<CeoEntity | null> {
        const ceo = await this.ceoModel.findOne({
            where: {
                email: email
            }
        })
        
        if (!ceo) {
            return null;
        }

        return CeoMapper.toDomain(ceo);
    }


    async save(ceoEntity: CeoEntity): Promise<CeoEntity | null> {
        const id = ceoEntity.getId()
        const data = CeoMapper.toPersistence(ceoEntity)

        if (id === null) {
            const ceo = await this.ceoModel.create(data)
            return CeoMapper.toDomain(ceo)
        }

        const existing = await this.ceoModel.findByPk(id)
        if (!existing) {
            return null
        }
        await existing.update(data)

        return CeoMapper.toDomain(existing)

    }

}
