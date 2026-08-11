import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CeoModel } from "./infrastructure/ceoModel";
import { CeoService } from "./core/ceoService";
import { CeoRepositoryImpl } from "./infrastructure/ceoRepositoryImpl";
import { CeoController } from "./interface/ceoController";
import { AuthGuard } from "src/guards/authGuard";
import { JwtModule } from "@nestjs/jwt";
import { ImageService } from "../image/imageService";


@Module({
    imports: [SequelizeModule.forFeature([CeoModel]), JwtModule],
    providers: [CeoService, AuthGuard, ImageService, {
        provide: "ICeoRepository",
        useClass: CeoRepositoryImpl
    }],
    controllers: [CeoController],
    exports: ["ICeoRepository"]
})
export class CeoModule {}
