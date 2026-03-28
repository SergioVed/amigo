import { Module } from "@nestjs/common";
import { ProfessorService } from "./core/professorService";
import { ProfessorRepositoryImpl } from "./infrastructure/professorRepositoryImpl";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProfessorModel } from "./infrastructure/professorModel";
import { ProfessorController } from "./interface/professorController";

@Module({
    imports: [SequelizeModule.forFeature([ProfessorModel])],
    providers: [ProfessorService, {
        provide: "IProfessorRepository",
        useClass: ProfessorRepositoryImpl
    }],
    controllers: [ProfessorController]
})
export class ProfessorModule {}