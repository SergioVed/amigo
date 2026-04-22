import $api, { API_URL } from "../../../http"
import { Price } from "../store/types"
import { CreatePriceForm } from "../types"

export class PriceApi {

    public static getAllPrices = () => {
        return $api.get(`${API_URL}/price`)
    }

    public static addPrice = (data: CreatePriceForm) => {
        return $api.post(`${API_URL}/price`, data)
    }
}