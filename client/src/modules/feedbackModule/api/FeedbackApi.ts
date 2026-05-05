import { data } from "react-router-dom";
import $api, { API_URL } from "../../../http";
import { FeedbackForm } from "../types";
import { Feedback } from "../store/types";


export class FeedbackApi {

    public static fetchFeedbacks () {
        return $api.get(`${API_URL}/feedback`)
    }

    public static addFeedback (data: FeedbackForm) {
        return $api.post(`${API_URL}/feedback`, data)
    }

    public static deleteFeedback (id: number) {
        return $api.delete(`${API_URL}/feedback/${id}`)
    }
}