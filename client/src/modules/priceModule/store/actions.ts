import { Dispatch } from "redux"
import { PriceAction, PriceActionTypes } from "./types"
import { PriceApi } from "../api"
import { PriceForm } from "../types"
import { errorHandler } from "../../../store/errorHandler"


export const fetchPricesAction = () => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({ type: PriceActionTypes.FETCH_PRICES })
            const response = await PriceApi.getAllPrices()
            dispatch({ type: PriceActionTypes.FETCH_PRICES_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, PriceActionTypes.FETCH_PRICES_ERROR, dispatch)
        }
    }
}

export const addPriceAction = (data: PriceForm) => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({ type: PriceActionTypes.ADD_PRICE })
            const response = await PriceApi.addPrice(data)
            dispatch({ type: PriceActionTypes.ADD_PRICE_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, PriceActionTypes.ADD_PRICE_ERROR, dispatch)
        }
    }
}

export const updatePriceAction = (data: Partial<PriceForm>, id: number) => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({ type: PriceActionTypes.UPDATE_PRICE })
            const response = await PriceApi.updatePrice(data, id)
            dispatch({ type: PriceActionTypes.UPDATE_PRICE_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, PriceActionTypes.UPDATE_PRICE_ERROR, dispatch)
        }
    }
}

export const deletePriceAction = (id: number) => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({ type: PriceActionTypes.DELETE_PRICE })
            const response = await PriceApi.deletePrice(id)
            dispatch({ type: PriceActionTypes.DELETE_PRICE_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, PriceActionTypes.DELETE_PRICE_ERROR, dispatch)
        }
    }
} 