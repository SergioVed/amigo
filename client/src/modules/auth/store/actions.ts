import { Dispatch } from "redux"
import { LoginAction, LoginActionTypes } from "./types"
import { AuthApi } from "../api"
import { errorHandler } from "../../../store/errorHandler"


export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: LoginActionTypes.LOGIN })
            const response = await AuthApi.login(email, password);

            dispatch({ type: LoginActionTypes.LOGIN_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, LoginActionTypes.LOGIN_ERROR, dispatch)
        }
    }
}

export const verifyCode = (email: string, code: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: LoginActionTypes.CODE_VERIFY })
            const response = await AuthApi.verify(email, code)

            localStorage.setItem('token', response.data.accessToken)


            dispatch({ type: LoginActionTypes.CODE_VERIFY_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, LoginActionTypes.CODE_VERIFY_ERROR, dispatch)
        }
    }
}

export const checkAuthAction = () => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            const response = await AuthApi.refresh()
            dispatch({type: LoginActionTypes.AUTH_SUCCESS, payload: response.data})

            localStorage.setItem("token", response.data.accessToken)
        } catch (e) {
            dispatch({type: LoginActionTypes.LOGOUT})
            localStorage.removeItem("token")
            try {
                await AuthApi.logout()
            } catch {}
        }
    }
}