import { CreateFeedbackAttrs, Feedback } from "./feedbackEntity";


export interface IFeedbackRepository {
    getAll(): Promise<Feedback[]>,
    getOne(id: number): Promise<Feedback | null>,
    save(feedback: Feedback): Promise<Feedback | null>,
    delete(id: number): Promise<Feedback | null>,
}