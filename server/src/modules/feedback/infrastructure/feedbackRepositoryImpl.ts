import { InjectModel } from "@nestjs/sequelize";
import { Feedback, CreateFeedbackAttrs } from "../core/feedbackEntity";
import { IFeedbackRepository } from "../core/feedbackRepository";
import { FeedbackModel } from "./feedbackModel";
import { FeedbackMapper } from "./feedbackMapper";


export class feedbackRepositoryImpl implements IFeedbackRepository {

    constructor(
        @InjectModel(FeedbackModel) private feedbackModel: typeof FeedbackModel
    ){}


    async getAll(): Promise<Feedback[]> {
        const feedbacks = await this.feedbackModel.findAll()
        return feedbacks.map((feedback) => FeedbackMapper.toDomain(feedback))
    }


    async getOne(id: number): Promise<Feedback | null> {
        const feedback = await this.feedbackModel.findByPk(id)
        if (!feedback) {
            return null;
        }
        return FeedbackMapper.toDomain(feedback);
    }


    async save(feedback: Feedback): Promise<Feedback | null> {
        
        const id = feedback.getId()
        const data = FeedbackMapper.toPersistence(feedback)

        if (id === null) {
            const feedback = await this.feedbackModel.create(data)
            return FeedbackMapper.toDomain(feedback)
        }

        const existing = await this.feedbackModel.findByPk(id)
        if (!existing) {
            return null
        }
        await existing.update(data)

        return FeedbackMapper.toDomain(existing)

    }


    async delete(id: number): Promise<Feedback | null> {
        const feedbackToDelete = await this.feedbackModel.findByPk(id)
        if (!feedbackToDelete) {
            return null
        }

        const deletedRows = await this.feedbackModel.destroy({where: {
            id
        }})
        if (deletedRows === 0) return null

        return FeedbackMapper.toDomain(feedbackToDelete)
    }

}