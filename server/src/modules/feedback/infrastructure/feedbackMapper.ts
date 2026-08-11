import { Feedback } from "../core/feedbackEntity";
import { FeedbackModel, FeedbackModelCreationAttrs } from "./feedbackModel";

export class FeedbackMapper {

    public static toDomain(data: FeedbackModel): Feedback {
        return new Feedback(
            data.id,
            data.name,
            data.description,
            data.avatar_url
        )
    }

    public static toPersistence(feedback: Feedback): FeedbackModelCreationAttrs {
        return {
            name: feedback.getName(),
            description: feedback.getDescription(),
            avatar_url: feedback.getUrl()
        }
    }
}
