import { Dispatch } from "redux"
import { LoginAction, LoginActionTypes } from "./types"
import axios from "axios"


export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({type: LoginActionTypes.LOGIN})
            const response = await axios.post("http://localhost:3000/auth/login", {email, password})
            console.log(response)
            dispatch({type: LoginActionTypes.LOGIN_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: LoginActionTypes.LOGIN_ERROR, payload: "Error while fetching "})
        }
    }
}