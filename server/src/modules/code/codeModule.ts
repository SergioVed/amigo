import { Module } from "@nestjs/common";
import { CodeService } from "./core/codeService";
import { SequelizeModule } from "@nestjs/sequelize";
import { CodeModel } from "./infrastructure/codeModel";
import { CodeRepositoryImpl } from "./infrastructure/codeRepositoryImpl";


@Module({
    imports: [SequelizeModule.forFeature([CodeModel])],
    providers: [CodeService, {
        provide: "ICodeRepository",
        useClass: CodeRepositoryImpl
    }],
    exports: [CodeService, "ICodeRepository"]
})

export class CodeModule {}