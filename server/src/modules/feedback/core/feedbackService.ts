import { Inject, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import type { IFeedbackRepository } from "./feedbackRepository";
import { CreateFeedbackAttrs, Feedback, UpdateFeedbackAttrs } from "./feedbackEntity";


@Injectable()
export class FeedbackService {

    constructor (
        @Inject("IFeedbackRepository") private feedbackRepo: IFeedbackRepository
    ) {}

    async create(data: CreateFeedbackAttrs) {
        const feedback = Feedback.create(data)
        const savedFeedback = await this.feedbackRepo.save(feedback)

        if (!savedFeedback) {
            throw new InternalServerErrorException("Feedback was not saved")
        }

        return savedFeedback
    }

    getAll() {
        return this.feedbackRepo.getAll()
    }

    async getOne(id: number) {
        const feedback = await this.feedbackRepo.getOne(id)
        if (!feedback) {
            throw new NotFoundException("Feedback not found")
        }
        return feedback
    }

    async update (id: number, dto: UpdateFeedbackAttrs) {
        const feedback = await this.feedbackRepo.getOne(id)
        if (!feedback) {
            throw new NotFoundException("Feedback not found")
        }
        feedback.update(dto)

        const newFeedback =  await this.feedbackRepo.save(feedback)

        if (!newFeedback) {
            throw new NotFoundException("Feedback not found")
        }

        return newFeedback
    }

    async delete (id: number) {
        const feedback = await this.feedbackRepo.delete(id)
        if (!feedback) {
            throw new NotFoundException("Feedback not found")
        }
        return feedback
    }
}
