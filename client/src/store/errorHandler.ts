import axios from "axios"
import { Dispatch } from "redux"


const getErrorMessage = (error: unknown): string => {
    let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

    if (axios.isAxiosError(error)) {
        message = error.response?.data?.message.join(", \n") || message
    }

    return message
}

export const errorHandler = (
        error: unknown, 
        type: string,
        dispatch: Dispatch
    ) => {
        dispatch({type: type, payload: getErrorMessage(error)})
    }