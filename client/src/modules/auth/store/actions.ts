import { Dispatch } from "redux"
import { LoginAction, LoginActionTypes } from "./types"
import { AuthApi } from "../api"
import axios, { AxiosError } from "axios"


export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: LoginActionTypes.LOGIN })
            const response = await AuthApi.login(email, password);

            dispatch({ type: LoginActionTypes.LOGIN_SUCCESS, payload: response.data })
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {

                const error = e.response?.data.message || message

                if (Array.isArray(error)) {
                    message = error.map(item => `- ${item}`).join("\n")
                } else {
                    message = error
                }
            }

            dispatch({ type: LoginActionTypes.LOGIN_ERROR, payload: message })
        }
    }
}

export const verifyCode = (email: string, code: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: LoginActionTypes.CODE_VERIFY })
            const response = await AuthApi.verify(email, code)

            localStorage.setItem('token', response.data.accessToken)

            console.log(response)
            dispatch({ type: LoginActionTypes.CODE_VERIFY_SUCCESS, payload: response.data })
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message || message
            }

            dispatch({ type: LoginActionTypes.CODE_VERIFY_ERROR, payload: "Error while verifying code " })
        }
    }
}