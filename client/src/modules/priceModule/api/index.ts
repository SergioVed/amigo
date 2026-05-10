import $api, { API_URL } from "../../../http"
import { Price } from "../store/types"
import { PriceForm } from "../types"

export class PriceApi {

    public static getAllPrices = () => {
        return $api.get(`${API_URL}/price`)
    }

    public static addPrice = (data: PriceForm) => {
        return $api.post(`${API_URL}/price`, data)
    }

    public static updatePrice = (data: Partial<PriceForm>, id: number) => {
        return $api.put(`${API_URL}/price/${id}`, data)
    }

    public static deletePrice = (id: number) => {
        return $api.delete(`${API_URL}/price/${id}`)
    }
}