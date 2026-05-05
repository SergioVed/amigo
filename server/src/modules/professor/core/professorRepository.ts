import { CreateProfessorAttrs, Professor } from "./professorEntity.js";


export interface IProfessorRepository {
    getAll(): Promise<Professor[]>
    getOne(id: number): Promise<Professor | null>
    save(professor: Professor): Promise<Professor | null>
    delete(id: number): Promise<Professor | null>
}
