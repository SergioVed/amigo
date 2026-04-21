import $api, { API_URL } from "../../../http"

export const getAllPrices = () => {
    return $api.get(`${API_URL}/price`)
}