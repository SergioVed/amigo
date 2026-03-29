import { ConflictException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { ICeoRepository } from "./ceoRepository";
import { CeoCreationAttrs, CeoEntity, CeoUpdateAttrs } from "./ceoEntity";
import bcrypt from "bcrypt"

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
        const existing = await this.ceoRepo.getOne(1)
        if (existing) {
            throw new ConflictException("Ceo profile already exists")
        }

        const newPassword = await bcrypt.hash(data.password, 12)
        const newCeo = CeoEntity.create({...data, password: newPassword})
        
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