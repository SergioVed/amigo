import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProfessorModel } from "./modules/professor/infrastructure/professorModel";
import { ProfessorModule } from "./modules/professor/professorModule";
import { PriceModule } from "./modules/price/priceModule";
import { CeoModule } from "./modules/ceo/ceoModule";
import { AuthModule } from "./modules/auth/authModule";
import { FeedbackModule } from "./modules/feedback/feedbackModule";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}.local`
        }),
        ProfessorModule,
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [ProfessorModel],
            autoLoadModels: true
        }),
        ProfessorModule,
        PriceModule,
        CeoModule,
        AuthModule,
        FeedbackModule,
    ]
})
export class AppModule { }
