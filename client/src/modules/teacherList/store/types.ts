export interface Teacher {
    id: number,
    avatarUrl: string,
    name: string,
    description: string,
    subDescription: string,
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

export enum TeachersActionTypes {
    FETCH_TEACHERS = "FETCH_TEACHERS",
    FETCH_TEACHERS_SUCCESS = "FETCH_TEACHERS_SUCCESS",
    FETCH_TEACHERS_ERROR = "FETCH_TEACHERS_ERROR",

    UPDATE_TEACHER = "UPDATE_TEACHER",
    UPDATE_TEACHER_ERROR = "UPDATE_TEACHER_ERROR",
    UPDATE_TEACHER_SUCCESS = "UPDATE_TEACHER_SUCCESS"
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
