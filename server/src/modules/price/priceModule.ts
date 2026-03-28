import { Module } from "@nestjs/common";
import { PriceService } from "./core/priceService";
import { PriceRepositoryImpl } from "./infrastructure/priceRepositoryImpl";
import { PriceController } from "./interface/priceController";
import { SequelizeModule } from "@nestjs/sequelize";
import { PriceModel } from "./infrastructure/priceModel";


@Module({
    imports: [SequelizeModule.forFeature([PriceModel])],
    providers: [PriceService, {
        provide: "IPriceRepository",
        useClass: PriceRepositoryImpl
    }],
    controllers: [PriceController]
})
export class PriceModule {}