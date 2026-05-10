import $api, { API_URL } from "../../../http";
import { FeedbackForm } from "../types";

export type UpdateFeedbackPayload = Partial<FeedbackForm>


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

    public static updateFeedback (data: UpdateFeedbackPayload, file: File | null, id: number) {
        const formData = new FormData()

        if (data.name !== undefined) {
            formData.append("name", data.name)
        }

        if (data.title !== undefined) {
            formData.append("title", data.title)
        }

        if (data.description !== undefined) {
            formData.append("description", data.description)
        }

        if (file) {
            formData.append("file", file)
        }

        console.log(formData)

        return $api.put(`${API_URL}/feedback/${id}`, formData)
    }
}
