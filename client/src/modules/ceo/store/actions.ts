import { Dispatch } from "redux"
import { CeoAction, CeoActionTypes } from "./types"
import { CeoApi } from "../api/ceoApi"
import { errorHandler } from "../../../store/errorHandler"


export const fetchCeoAction = () => {
    return async (dispatch: Dispatch<CeoAction>) => {
        try {
            dispatch({type: CeoActionTypes.FETCH_CEO})
            const response = await CeoApi.fetchCeo()
            dispatch({type: CeoActionTypes.FETCH_CEO_SUCCESS, payload: response.data})
        } catch (error) {
            errorHandler(error, CeoActionTypes.FETCH_CEO_ERROR, dispatch)
        }
    }
}