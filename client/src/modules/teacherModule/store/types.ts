import { TeacherCreateForm } from "../types"

export interface Teacher {
    id: number,
    avatarUrl: string,
    name: string,
    description: string,
    experience: number,
    hasPriority: boolean,
    videoUrl: string,
    superPower: string[],
    favouriteWord: string,
    forStudent: string
}

export interface TeachersState {
    teachers: Teacher[],
    loading: boolean,
    error: string | null,
    isFetched: boolean
}




export type TeachersAction = FetchTeachersActionType
    | FetchTeachersErrorActionType
    | FetchTeachersSuccessActionType

    | UpdateTeacherActionType
    | UpdateTeacherErrorActionType
    | UpdateTeacherSuccessActionType

    | DeleteTeacherActionType
    | DeleteTeacherErrorActionType
    | DeleteTeacherSuccessActionType

    | AddTeacherActionType
    | AddTeacherSuccessActionType
    | AddTeacherErrorActionType

export enum TeachersActionTypes {
    FETCH_TEACHERS = "FETCH_TEACHERS",
    FETCH_TEACHERS_SUCCESS = "FETCH_TEACHERS_SUCCESS",
    FETCH_TEACHERS_ERROR = "FETCH_TEACHERS_ERROR",

    UPDATE_TEACHER = "UPDATE_TEACHER",
    UPDATE_TEACHER_ERROR = "UPDATE_TEACHER_ERROR",
    UPDATE_TEACHER_SUCCESS = "UPDATE_TEACHER_SUCCESS",

    DELETE_TEACHER = "DELETE_TEACHER",
    DELETE_TEACHER_SUCCESS = "DELETE_TEACHER_SUCCESS",
    DELETE_TEACHER_ERROR = "DELETE_TEACHER_ERROR",

    ADD_TEACHER = "ADD_TEACHER",
    ADD_TEACHER_SUCCESS = "ADD_TEACHER_SUCCESS",
    ADD_TEACHER_ERROR = "ADD_TEACHER_ERROR"
}

// Add Teacher action types
interface AddTeacherActionType {
    type: TeachersActionTypes.ADD_TEACHER
}

interface AddTeacherSuccessActionType {
    type: TeachersActionTypes.ADD_TEACHER_SUCCESS
    payload: Teacher
}

interface AddTeacherErrorActionType {
    type: TeachersActionTypes.ADD_TEACHER_ERROR
    payload: string
}

// Delete Teacher action types
interface DeleteTeacherActionType {
    type: TeachersActionTypes.DELETE_TEACHER
}

interface DeleteTeacherSuccessActionType {
    type: TeachersActionTypes.DELETE_TEACHER_SUCCESS,
    payload: Teacher
}

interface DeleteTeacherErrorActionType {
    type: TeachersActionTypes.DELETE_TEACHER_ERROR,
    payload: string
}

// One Teacher action types
interface UpdateTeacherActionType {
    type: TeachersActionTypes.UPDATE_TEACHER
}

interface UpdateTeacherSuccessActionType {
    type: TeachersActionTypes.UPDATE_TEACHER_SUCCESS,
    payload: Teacher
}

interface UpdateTeacherErrorActionType {
    type: TeachersActionTypes.UPDATE_TEACHER_ERROR,
    payload: string
}

// All teachers action types
interface FetchTeachersActionType {
    type: TeachersActionTypes.FETCH_TEACHERS
}

interface FetchTeachersSuccessActionType {
    type: TeachersActionTypes.FETCH_TEACHERS_SUCCESS,
    payload: Teacher[]
}

interface FetchTeachersErrorActionType {
    type: TeachersActionTypes.FETCH_TEACHERS_ERROR,
    payload: string
}
