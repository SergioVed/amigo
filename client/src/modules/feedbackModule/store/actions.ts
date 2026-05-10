import { Dispatch } from "redux"
import { Feedback, FeedbackAction, FeedbackActionTypes } from "./types"
import { FeedbackApi, UpdateFeedbackPayload } from "../api/FeedbackApi"
import { FeedbackForm } from "../types"
import { errorHandler } from "../../../store/errorHandler"

export const fetchFeedbacksAction = () => {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        try {
            dispatch({ type: FeedbackActionTypes.FETCH_FEEDBACKS })
            const response = await FeedbackApi.fetchFeedbacks()
            dispatch({ type: FeedbackActionTypes.FETCH_FEEDBACKS_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, FeedbackActionTypes.FETCH_FEEDBACKS_ERROR, dispatch)
        }
    }
}

export const addFeedbackAction = (data: FeedbackForm, file: File) => {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        try {
            dispatch({ type: FeedbackActionTypes.ADD_FEEDBACK })
            const response = await FeedbackApi.addFeedback(data, file)
            dispatch({ type: FeedbackActionTypes.ADD_FEEDBACK_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, FeedbackActionTypes.ADD_FEEDBACK_ERROR, dispatch)
        }
    }
}

export const deleteFeedbackAction = (feedback: Feedback) => {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        try {
            dispatch({type: FeedbackActionTypes.DELETE_FEEDBACK})
            const response = await FeedbackApi.deleteFeedback(feedback.id)
            dispatch({type: FeedbackActionTypes.DELETE_FEEDBACK_SUCCESS, payload: feedback})
        } catch (e) {
            errorHandler(e, FeedbackActionTypes.DELETE_FEEDBACK_ERROR, dispatch)
        }
    }
}

export const updateFeedbackAction = (data: UpdateFeedbackPayload, file: File | null, id: number) => {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        try {
            dispatch({type: FeedbackActionTypes.UPDATE_FEEDBACK})
            const response = await FeedbackApi.updateFeedback(data, file, id)
            dispatch({type: FeedbackActionTypes.UPDATE_FEEDBACK_SUCCESS, payload: response.data})
        } catch (e) {
            errorHandler(e, FeedbackActionTypes.UPDATE_FEEDBACK_ERROR, dispatch)
        }
    }
}
