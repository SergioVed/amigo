import $api, { API_URL } from "../../../http";


export class FeedbackApi {

    public static fetchFeedbacks () {
        return $api.get(`${API_URL}/feedback`)
    }
}