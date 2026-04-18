import { Dispatch } from "redux"
import { AppDispatch } from "../../../store"
import { TeachersAction, TeachersActionTypes } from "./types"
import { TeachersApi, UpdateTeacherData } from "../api"
import axios from "axios"

export const fetchTeachers = () => {
    return async (dispatch: Dispatch<TeachersAction>) => {

        try {
            dispatch({type: TeachersActionTypes.FETCH_TEACHERS})
            const response = await TeachersApi.getTeachers()
            console.log("api")
            dispatch({type: TeachersActionTypes.FETCH_TEACHERS_SUCCESS, payload: response.data})
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message || message
            }

            dispatch({ type: TeachersActionTypes.FETCH_TEACHERS_ERROR, payload: message })
        }
    }
}

export const updateTeacher = (id: number, data: UpdateTeacherData) => {
    return async (dispatch: Dispatch<TeachersAction>) => {

        try {
            dispatch({type: TeachersActionTypes.UPDATE_TEACHER})
            const response = await TeachersApi.updateTeacher(id, data)
            console.log(response)
            dispatch({type: TeachersActionTypes.UPDATE_TEACHER_SUCCESS, payload: response.data })
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message || message
            }

            dispatch({ type: TeachersActionTypes.UPDATE_TEACHER_ERROR, payload: message })
        }
    }
}