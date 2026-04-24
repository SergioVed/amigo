import { Dispatch } from "redux"
import { Price, PriceAction, PriceActionTypes } from "./types"
import { PriceApi } from "../api"
import axios from "axios"
import { privateEncrypt } from "crypto"
import { PriceForm } from "../types"


export const fetchPricesAction = () => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({ type: PriceActionTypes.FETCH_PRICES })
            const response = await PriceApi.getAllPrices()
            dispatch({ type: PriceActionTypes.FETCH_PRICES_SUCCESS, payload: response.data })
        } catch (e) {

            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data || message
            }

            dispatch({ type: PriceActionTypes.FETCH_PRICES_ERROR, payload: message })

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
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message.join(", \n") || message
            }

            dispatch({type: PriceActionTypes.ADD_PRICE_ERROR, payload: message})
        }
    }
}

export const updatePriceAction = (data: PriceForm, id: number) => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({type: PriceActionTypes.UPDATE_PRICE})
            const response = await PriceApi.updatePrice(data, id)
            dispatch({type: PriceActionTypes.UPDATE_PRICE_SUCCESS, payload: response.data})
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message || message
            }

            dispatch({type: PriceActionTypes.UPDATE_PRICE_ERROR, payload: message})
        }
    }
}

export const deletePriceAction = (id: number) => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({type: PriceActionTypes.DELETE_PRICE})
            const response = await PriceApi.deletePrice(id)
            dispatch({type: PriceActionTypes.DELETE_PRICE_SUCCESS, payload: response.data})
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message || message
            }

            dispatch({type: PriceActionTypes.DELETE_PRICE_ERROR, payload: message})
        }
    }
} 