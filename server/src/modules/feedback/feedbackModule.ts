import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { FeedbackModel } from "./infrastructure/feedbackModel";
import { FeedbackService } from "./core/feedbackService";
import { FeedbackController } from "./interface/feedbackController";
import { feedbackRepositoryImpl } from "./infrastructure/feedbackRepositoryImpl";


@Module({
    imports: [SequelizeModule.forFeature([FeedbackModel])],
    providers: [FeedbackService, {
        provide: "IFeedbackRepository",
        useClass: feedbackRepositoryImpl
    }],
    controllers: [FeedbackController]
})
export class FeedbackModule {}