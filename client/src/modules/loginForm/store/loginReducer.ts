import { LoginState, LoginAction, LoginActionTypes } from "./types"


const initialState: LoginState = {
    user: null,
    loading: false,
    error: null
}

export const loginReducer = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN:
            return {loading: true, error: null, user: null }
         
        case LoginActionTypes.LOGIN_SUCCESS:
            return {loading: false, error: null, user: action.payload }    
    
        case LoginActionTypes.LOGIN_ERROR:
            return {loading: false, error: action.payload, user: null}
                 
        default:
            return state
    }
}
