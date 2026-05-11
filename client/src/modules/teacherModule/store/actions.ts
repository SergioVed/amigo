import { Dispatch } from "redux"
import { Teacher, TeachersAction, TeachersActionTypes } from "./types"
import { TeachersApi, UpdateTeacherPayload } from "../api"
import { errorHandler } from "../../../store/errorHandler"
import { TeacherCreatePayload } from "../types"

export const fetchTeachersAction = () => {
    return async (dispatch: Dispatch<TeachersAction>) => {

        try {
            dispatch({type: TeachersActionTypes.FETCH_TEACHERS})
            const response = await TeachersApi.getTeachers()
            dispatch({type: TeachersActionTypes.FETCH_TEACHERS_SUCCESS, payload: response.data})
        } catch (e) {
            errorHandler(e, TeachersActionTypes.FETCH_TEACHERS_ERROR, dispatch)
        }
    }
}

export const updateTeacherAction = (id: number, data: UpdateTeacherPayload) => {
    return async (dispatch: Dispatch<TeachersAction>) => {

        try {
            dispatch({type: TeachersActionTypes.UPDATE_TEACHER})
            const response = await TeachersApi.updateTeacher(id, data)
            dispatch({type: TeachersActionTypes.UPDATE_TEACHER_SUCCESS, payload: response.data })
        } catch (e) {
            errorHandler(e, TeachersActionTypes.UPDATE_TEACHER_ERROR, dispatch)
        }
    }
}

export const deleteTeacherAction = (teacher: Teacher) => {
    return async (dispatch: Dispatch<TeachersAction>) => {
        try {
            dispatch({type: TeachersActionTypes.DELETE_TEACHER})
            await TeachersApi.deleteTeaher(teacher.id)
            dispatch({type: TeachersActionTypes.DELETE_TEACHER_SUCCESS, payload: teacher})
        } catch (e) {
            errorHandler(e, TeachersActionTypes.DELETE_TEACHER_ERROR, dispatch)
        }
    }
}

export const addTeacherAction = (data: TeacherCreatePayload, selectedFile: File) => {
    return async (dispatch: Dispatch<TeachersAction>) => {
        try {
            dispatch({type: TeachersActionTypes.ADD_TEACHER})
            const response = await TeachersApi.addTeacher(data, selectedFile)
            console.log(response, "response")
            dispatch({type: TeachersActionTypes.ADD_TEACHER_SUCCESS, payload: response.data})
        } catch (e) {
            errorHandler(e, TeachersActionTypes.ADD_TEACHER_ERROR, dispatch)
        }
    }
}
