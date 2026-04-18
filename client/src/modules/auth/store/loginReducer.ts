import { LoginState, LoginAction, LoginActionTypes } from "./types"

const token = localStorage.getItem("token")

const initialState: LoginState = {
    loading: false,
    error: null,
    isCodeSent: false,
    accessToken: null,
    refreshToken: null,
    email: null,
    isAuth: Boolean(token)
}

export const loginReducer = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN:
            return {...state, loading: true, error: null}
         
        case LoginActionTypes.LOGIN_SUCCESS:
            return {...state, loading: false, error: null, email: action.payload.email, isCodeSent: true}    
    
        case LoginActionTypes.LOGIN_ERROR:
            return {...state, loading: false, error: action.payload}

        case LoginActionTypes.CODE_VERIFY:
            return {...state, loading: true, error: null}
            
        case LoginActionTypes.CODE_VERIFY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                accessToken: action.payload.accessToken, 
                refreshToken: action.payload.refreshToken,
                isAuth: true
            }    
        
        case LoginActionTypes.CODE_VERIFY_ERROR:
            return {...state, loading: false, error: action.payload}    

                 
        default:
            return state
    }
}
