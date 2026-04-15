import { combineReducers } from "redux";
import { loginReducer } from "../modules/loginForm/store/loginReducer";


export const rootReducer = combineReducers({
    login: loginReducer
})

export type RootState = ReturnType<typeof rootReducer>;