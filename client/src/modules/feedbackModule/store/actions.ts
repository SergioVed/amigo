import { Dispatch } from "redux"
import { Feedback, FeedbackAction, FeedbackActionTypes } from "./types"
import { FeedbackApi } from "../api/FeedbackApi"
import axios, { Axios, AxiosError } from "axios"
import { FeedbackForm } from "../types"

export const fetchFeedbacksAction = () => {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        try {
            dispatch({ type: FeedbackActionTypes.FETCH_FEEDBACKS })
            const response = await FeedbackApi.fetchFeedbacks()
            dispatch({ type: FeedbackActionTypes.FETCH_FEEDBACKS_SUCCESS, payload: response.data })
        } catch (e) {
            let message = "Esi sho to zvoni Serege"

            if (axios.isAxiosError(e)) {
                message = e.response?.data ?? message
            }

            dispatch({ type: FeedbackActionTypes.FETCH_FEEDBACKS_ERROR, payload: message })
        }
    }
}

export const addFeedbackAction = (data: FeedbackForm) => {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        try {
            dispatch({ type: FeedbackActionTypes.ADD_FEEDBACK })
            const response = await FeedbackApi.addFeedback(data)
            dispatch({ type: FeedbackActionTypes.ADD_FEEDBACK_SUCCESS, payload: response.data })
        } catch (e) {
            let message = "Esi sho to zvoni Serege"

            if (axios.isAxiosError(e)) {
                message = e.response?.data ?? message
            }

            dispatch({ type: FeedbackActionTypes.ADD_FEEDBACK_ERROR, payload: message })
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
            let message = "Esi sho to zvoni Serege"

            if (axios.isAxiosError(e)) {
                message = e.response?.data ?? message
            }

            dispatch({ type: FeedbackActionTypes.DELETE_FEEDBACK_ERROR, payload: message })
        }
    }
}