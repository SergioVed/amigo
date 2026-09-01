import { LoginState, LoginAction, LoginActionTypes } from "./types"

const initialState: LoginState = {
    loading: false,
    error: null,
    isCodeSent: false,
    accessToken: null,
    refreshToken: null,
    email: null,
    isAuth: false,
    authChecked: false
}

export const loginReducer = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN:
            return { ...state, loading: true, error: null }

        case LoginActionTypes.LOGIN_SUCCESS:
            return { ...state, loading: false, error: null, email: action.payload.email, isCodeSent: true }

        case LoginActionTypes.LOGIN_ERROR:
            return { ...state, loading: false, error: action.payload }

        case LoginActionTypes.CODE_VERIFY:
            return { ...state, loading: true, error: null }

        case LoginActionTypes.CODE_VERIFY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                accessToken: action.payload.accessToken,
                isAuth: true,
                authChecked: true
            }

        case LoginActionTypes.CODE_VERIFY_ERROR:
            return { ...state, loading: false, error: action.payload }


        

        case LoginActionTypes.LOGOUT:
            return {
                loading: false,
                error: null,
                isCodeSent: false,
                accessToken: null,
                refreshToken: null,
                email: null,
                isAuth: false,
                authChecked: true
            }

        case LoginActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                accessToken: action.payload,
                error: null,
                isAuth: true,
                authChecked: true
            }

        default:
            return state
    }
}
