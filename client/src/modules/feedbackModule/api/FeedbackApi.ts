import { data } from "react-router-dom";
import $api, { API_URL } from "../../../http";
import { FeedbackForm } from "../types";
import { Feedback } from "../store/types";


export class FeedbackApi {

    public static fetchFeedbacks () {
        return $api.get(`${API_URL}/feedback`)
    }

    public static addFeedback (data: FeedbackForm, file: File) {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("file", file)

        return $api.post(`${API_URL}/feedback`, formData)
    }

    public static deleteFeedback (id: number) {
        return $api.delete(`${API_URL}/feedback/${id}`)
    }

    public static updateFeedback (data: FeedbackForm, file: File | null, id: number) {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("title", data.title)
        formData.append("description", data.description)

        if (file) {
            formData.append("file", file)
        }

        return $api.patch(`${API_URL}/feedback/${id}`, formData)
    }
}