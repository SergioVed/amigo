import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { ICeoRepository } from "./ceoRepository";
import { CeoCreationAttrs, CeoEntity, CeoUpdateAttrs } from "./ceoEntity";

@Injectable()
export class CeoService {

    constructor (
        @Inject("ICeoRepository") private ceoRepo: ICeoRepository
    ) {}


    public async getOne (id: number) {
        const ceo = await this.ceoRepo.getOne(id)
        if (!ceo) {
            throw new NotFoundException("Ceo not found")
        }
        return ceo
    }

    public async create (data: CeoCreationAttrs) {
        const newCeo = CeoEntity.create(data)
        return await this.ceoRepo.save(newCeo)
    }

    public async update (id: number, data: CeoUpdateAttrs) {
        const ceo = await this.ceoRepo.getOne(id)
        if (!ceo) {
            throw new NotFoundException("Ceo not found")
        }
        ceo.update(data)
        return await this.ceoRepo.save(ceo)
    }
}