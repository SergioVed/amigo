import { Dispatch } from "redux"
import { PriceAction, PriceActionTypes } from "./types"
import { getAllPrices } from "../api"
import axios from "axios"


export const fetchPrices = () => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({type: PriceActionTypes.FETCH_PRICES})
            const response = await getAllPrices()
            dispatch({type: PriceActionTypes.FETCH_PRICES_SUCCESS, payload: response.data})
        } catch (e) {

            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"
            
            if (axios.isAxiosError(e)) {
                message = e.response?.data || message
            }

            dispatch({type: PriceActionTypes.FETCH_PRICES_ERROR, payload: message})

        }
    }
}