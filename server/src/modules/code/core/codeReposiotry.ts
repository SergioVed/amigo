import { CodeEntity } from "./codeEntity";


export interface ICodeRepository {
    save(code: CodeEntity): Promise<CodeEntity | null>
    getOne(id: number): Promise<CodeEntity | null>
    getByEmail(email: string): Promise<CodeEntity | null>
}