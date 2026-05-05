import { Feedback } from "../core/feedbackEntity";


export class FeedbackResponseMapper {

    static toResponse (feedback: Feedback) {
        return {
            id: feedback.getId(),
            name: feedback.getName(),
            title: feedback.getTitle(),
            description: feedback.getDescription(),
            avatarUrl: feedback.getUrl()
        }
    }
}