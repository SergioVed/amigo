import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CeoModel } from "./infrastructure/ceoModel";
import { CeoService } from "./core/ceoService";
import { CeoRepositoryImpl } from "./infrastructure/ceoRepositoryImpl";
import { CeoController } from "./interface/ceoController";


@Module({
    imports: [SequelizeModule.forFeature([CeoModel])],
    providers: [CeoService, {
        provide: "ICeoRepository",
        useClass: CeoRepositoryImpl
    }],
    controllers: [CeoController],
    exports: ["ICeoRepository"]
})
export class CeoModule {}