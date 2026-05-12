import $api, { API_URL } from "../../../http";


export class CeoApi {

    public static fetchCeo () {
        return $api.get(`${API_URL}/ceo/1`)
    }
}