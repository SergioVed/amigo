import { CodeEntity } from "./codeEntity";


export interface ICodeRepository {
    consume(code: CodeEntity): Promise<boolean>
    save(code: CodeEntity): Promise<CodeEntity | null>
    getOne(id: number): Promise<CodeEntity | null>
    getByEmail(email: string): Promise<CodeEntity | null>
}