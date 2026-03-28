import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Professor, CreateProfessorAttrs } from "../core/professorEntity";
import { IProfessorRepository } from "../core/professorRepository";
import { ProfessorModel } from "./professorModel";
import { ProfessorMapper } from "./professorMapper";


@Injectable()
export class ProfessorRepositoryImpl implements IProfessorRepository {

    constructor(
        @InjectModel(ProfessorModel) private professorModel: typeof ProfessorModel
    ) { }

    async getAll(): Promise<Professor[]> {
        const professors = await this.professorModel.findAll()
        return professors.map(professor => ProfessorMapper.toDomain(professor))
    }


    async getOne(id: number): Promise<Professor | null> {
        const professor = await this.professorModel.findByPk(id)
        if (!professor) {
            return null
        }
        return ProfessorMapper.toDomain(professor);
    }


    async save(professor: Professor): Promise<Professor | null> {
        const data = ProfessorMapper.toPersistence(professor)
        const id = professor.getId()

        if (id === null) {
            const professor = await this.professorModel.create(data)
            return ProfessorMapper.toDomain(professor)
        }
        const existing = await this.professorModel.findByPk(id)

        if (!existing) {
            return null
        }

        existing.update(data)

        return ProfessorMapper.toDomain(existing)
    }


    async delete(id: number): Promise<Professor | null> {
        const professorToDelete = await this.professorModel.findByPk(id)
        const deletedRows = await this.professorModel.destroy({ where: { id: id } })
        if (deletedRows == 0 || professorToDelete == null) {
            return null
        }
        return ProfessorMapper.toDomain(professorToDelete)
    }

}
