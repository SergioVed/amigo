import { Dispatch } from "redux"
import { Teacher, TeachersAction, TeachersActionTypes } from "./types"
import { TeachersApi, UpdateTeacherData } from "../api"
import axios from "axios"
import { TeacherCreateForm, TeacherCreatePayload } from "../types"

export const fetchTeachersAction = () => {
    return async (dispatch: Dispatch<TeachersAction>) => {

        try {
            dispatch({type: TeachersActionTypes.FETCH_TEACHERS})
            const response = await TeachersApi.getTeachers()
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

export const updateTeacherAction = (id: number, data: UpdateTeacherData) => {
    return async (dispatch: Dispatch<TeachersAction>) => {

        try {
            dispatch({type: TeachersActionTypes.UPDATE_TEACHER})
            const response = await TeachersApi.updateTeacher(id, data)
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

export const deleteTeacherAction = (teacher: Teacher) => {
    return async (dispatch: Dispatch<TeachersAction>) => {
        try {
            dispatch({type: TeachersActionTypes.DELETE_TEACHER})
            const response = await TeachersApi.deleteTeaher(teacher.id)
            dispatch({type: TeachersActionTypes.DELETE_TEACHER_SUCCESS, payload: teacher})
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message || message
            }

            dispatch({ type: TeachersActionTypes.DELETE_TEACHER_ERROR, payload: message })
        }
    }
}

export const addTeacherAction = (data: TeacherCreatePayload) => {
    return async (dispatch: Dispatch<TeachersAction>) => {
        try {
            dispatch({type: TeachersActionTypes.ADD_TEACHER})
            const response = await TeachersApi.addTeacher(data)
            console.log(response, "response")
            dispatch({type: TeachersActionTypes.ADD_TEACHER_SUCCESS, payload: response.data})
        } catch (e) {
            let message = "Server is down, contact 'SeregaGrozaSuchek2008' so he can fix it"

            if (axios.isAxiosError(e)) {
                message = e.response?.data?.message || message
            }

            dispatch({ type: TeachersActionTypes.ADD_TEACHER_ERROR, payload: message })
        }
    }
}