import { combineReducers } from "redux";
import { loginReducer } from "../modules/auth/store/reducer";
import { teacherReducer } from "../modules/teacherList/store/reducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    teachers: teacherReducer
})

export type RootState = ReturnType<typeof rootReducer>;