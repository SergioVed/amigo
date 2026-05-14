import $api, { API_URL } from "../../../http";
import { UpdateCeoForm } from "../types";


export class CeoApi {

    public static fetchCeo () {
        return $api.get(`${API_URL}/ceo/1`)
    }

    public static updateCeo (data: UpdateCeoForm) {
        return $api.put(`${API_URL}/ceo/1`, data)
    }
}