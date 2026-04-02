import { CodeEntity } from "../core/codeEntity";
import { CodeModel, CodeModelCreationAttrs } from "./codeModel";

export class CodeMapper {

    public static toDomain (code: CodeModel) {
        return new CodeEntity(
            code.id,
            code.codeHash,
            code.email,
            code.expiresAt,
            code.usedAt
        )
    }

    public static toPersistence (codeEntity: CodeEntity): CodeModelCreationAttrs {
        return {
            codeHash: codeEntity.getCodeHash(),
            email: codeEntity.getEmail(),
            expiresAt: codeEntity.getExpiresAt(),
            usedAt: codeEntity.getUsedAt()
        }
    }
}
