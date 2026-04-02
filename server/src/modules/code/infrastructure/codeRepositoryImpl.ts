import { Injectable } from "@nestjs/common";
import { ICodeRepository } from "../core/codeReposiotry";
import { CodeEntity } from "../core/codeEntity";
import { InjectModel } from "@nestjs/sequelize";
import { CodeModel } from "./codeModel";
import { CodeMapper } from "./codeMapper";


@Injectable()
export class CodeRepositoryImpl implements ICodeRepository {

    constructor(
        @InjectModel(CodeModel) private codeModel: typeof CodeModel
    ) { }


    async getByEmail(email: string): Promise<CodeEntity | null> {
        const code = await this.codeModel.findOne({
            where: {
                email: email
            }
        })

        if (!code) {
            return null;
        }

        return CodeMapper.toDomain(code)
    }

    async save(code: CodeEntity): Promise<CodeEntity | null> {
        const id = code.getId()
        const data = CodeMapper.toPersistence(code)

        if (id === null) {
            const code = await this.codeModel.create(data)
            return CodeMapper.toDomain(code)
        }

        const existing = await this.codeModel.findByPk(id)
        if (!existing) {
            return null
        }
        await existing.update(data)

        return CodeMapper.toDomain(existing)
    }

    async getOne(id: number): Promise<CodeEntity | null> {
        const code = await this.codeModel.findByPk(id)

        if (!code) {
            return null
        }

        return CodeMapper.toDomain(code)
    }
}