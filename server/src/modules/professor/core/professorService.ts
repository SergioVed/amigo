import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { IProfessorRepository } from "./professorRepository";
import { CreateProfessorAttrs, Professor } from "./professorEntity";


@Injectable()
export class ProfessorService {

    constructor (
        @Inject("IProfessorRepository") private professorRepository: IProfessorRepository
    ) {}

    public create (data: CreateProfessorAttrs) {
        const professor = Professor.create(data)
        return this.professorRepository.save(professor)
    }

    public getAll () {
        return this.professorRepository.getAll()
    }

    public delete (id: number) {
        const professor = this.professorRepository.delete(id)
        return professor
    }

    public getOne (id: number) {
        const professor = this.professorRepository.getOne(id)

        if (!professor) {
            throw new BadRequestException("No professor was found")
        }

        return professor
    }

    public async update (id: number, data: Partial<CreateProfessorAttrs>) {
        const professor = await this.professorRepository.getOne(id)

        if (!professor) {
            throw new BadRequestException("No professor was found")
        }

        professor.update(data)

        return this.professorRepository.save(professor)
    }

}
