
export interface LoginState {
    user: any,
    loading: boolean,
    error: null | string
}

export type LoginAction = LoginActionType | LoginErrorActionType | LoginSuccessActionType

export enum LoginActionTypes {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR "
}

interface LoginActionType {
    type: LoginActionTypes.LOGIN
}

interface LoginSuccessActionType {
    type: LoginActionTypes.LOGIN_SUCCESS,
    payload: any
}

interface LoginErrorActionType {
    type: LoginActionTypes.LOGIN_ERROR,
    payload: string
}
