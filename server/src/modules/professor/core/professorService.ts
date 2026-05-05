import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { IProfessorRepository } from "./professorRepository";
import { CreateProfessorAttrs, Professor } from "./professorEntity.js";


@Injectable()
export class ProfessorService {

    constructor (
        @Inject("IProfessorRepository") private professorRepository: IProfessorRepository
    ) {}

    public async create (data: CreateProfessorAttrs) {
        const professor = Professor.create(data)
        const savedProfessor = await this.professorRepository.save(professor)

        if (!savedProfessor) {
            throw new BadRequestException("Teacher was not saved")
        }

        return savedProfessor
    }

    public getAll () {
        return this.professorRepository.getAll()
    }

    public delete (id: number) {
        const professor = this.professorRepository.delete(id)
        return professor
    }

    public async getOne (id: number) {
        const professor = await this.professorRepository.getOne(id)

        if (!professor) {
            throw new NotFoundException("No professor was found")
        }

        return professor
    }

    public async update (id: number, data: Partial<CreateProfessorAttrs>) {
        const professor = await this.professorRepository.getOne(id)

        if (!professor) {
            throw new NotFoundException("No professor was found")
        }

        professor.update(data)

        const updatedProfessor = await this.professorRepository.save(professor)

        if (!updatedProfessor) {
            throw new BadRequestException("Professor was not updated")
        }

        return updatedProfessor
    }

}
