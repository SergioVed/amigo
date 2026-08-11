import $api, { API_URL } from "../../../http";
import { UpdateCeoForm } from "../types";


export class CeoApi {

    public static fetchCeo () {
        return $api.get(`${API_URL}/ceo/1`)
    }

    public static updateCeo (data: UpdateCeoForm, file: File | null) {
        const formData = new FormData()

        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined) {
                formData.append(key, value)
            }
        })

        if (file) {
            formData.append("file", file)
        }

        return $api.put(`${API_URL}/ceo/1`, formData)
    }
}
