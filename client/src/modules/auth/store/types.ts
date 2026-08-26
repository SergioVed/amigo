
export interface LoginState {
    loading: boolean,
    error: null | string,
    isCodeSent: boolean,
    accessToken: string | null
    refreshToken: string | null
    email: string | null
    isAuth: boolean
    authChecked: boolean
}

interface VerifySuccessPayload {
    accessToken: string,
    refreshToken: string
}

export type LoginAction = LoginActionType
  | LoginErrorActionType
  | LoginSuccessActionType

  | CodeVerifyActionType
  | CodeVerifySuccessActionType
  | CodeVerifyErrorActionType

  | LogoutActionType
  | AuthSuccessActionType

export enum LoginActionTypes {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",

    CODE_VERIFY = "CODE_VERIFY",
    CODE_VERIFY_SUCCESS = "CODE_VERIFY_SUCCESS",
    CODE_VERIFY_ERROR = "CODE_VERIFY_ERROR",

    AUTH_SUCCESS = "AUTH_SUCCESS",
    LOGOUT = "LOGOUT"
}

interface CodeVerifyActionType {
    type: LoginActionTypes.CODE_VERIFY
}

interface CodeVerifySuccessActionType {
    type: LoginActionTypes.CODE_VERIFY_SUCCESS,
    payload: VerifySuccessPayload
}

interface CodeVerifyErrorActionType {
    type: LoginActionTypes.CODE_VERIFY_ERROR,
    payload: string
}

interface LoginActionType {
    type: LoginActionTypes.LOGIN
}

interface LoginSuccessActionType {
    type: LoginActionTypes.LOGIN_SUCCESS,
    payload: {
        email: string
    }
}

interface LoginErrorActionType {
    type: LoginActionTypes.LOGIN_ERROR,
    payload: string
}

interface LogoutActionType {
    type: LoginActionTypes.LOGOUT
}

interface AuthSuccessActionType {
    type: LoginActionTypes.AUTH_SUCCESS,
    payload: string
}
