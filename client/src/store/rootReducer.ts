import { combineReducers } from "redux";
import { loginReducer } from "../modules/auth/store/reducer";
import { PriceReducer } from "../modules/priceModule/store/reducer";
import { teacherReducer } from "../modules/teacherModule/store/reducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    teachers: teacherReducer,
    prices: PriceReducer
})

export type RootState = ReturnType<typeof rootReducer>;