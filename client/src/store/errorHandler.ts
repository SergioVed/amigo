import axios from "axios"
import { Dispatch } from "redux"


const getErrorMessage = (error: unknown): string => {
    let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

    if (axios.isAxiosError(error)) {
        let errorMessage = error.response?.data?.message

        if (Array.isArray(errorMessage)) {
            message = errorMessage.join(", \n")
        } else {
            message = errorMessage ?? message
        }
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