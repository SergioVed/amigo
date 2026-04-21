import { TeachersAction, TeachersActionTypes, TeachersState } from "./types";

const initialState: TeachersState = {
    teachers: [],
    loading: false,
    error: "",
    isFetched: false
}

export const teacherReducer = (state = initialState, action: TeachersAction): TeachersState => {

    switch (action.type) {
        case TeachersActionTypes.FETCH_TEACHERS:
            return { ...state, loading: true, error: null }
            
        case TeachersActionTypes.FETCH_TEACHERS_SUCCESS:
            return { ...state, loading: false, teachers: action.payload, isFetched: true }

        case TeachersActionTypes.FETCH_TEACHERS_ERROR:
            return { ...state, loading: false, error: action.payload }



        case TeachersActionTypes.UPDATE_TEACHER:
            return { ...state, loading: true, error: null }

        case TeachersActionTypes.UPDATE_TEACHER_ERROR:
            return { ...state, loading: false, error: action.payload }

        case TeachersActionTypes.UPDATE_TEACHER_SUCCESS:
            return {
                ...state,
                loading: false,
                teachers: state.teachers.map((teacher) =>
                    teacher.id === action.payload.id ? action.payload : teacher
                )
            }

        case TeachersActionTypes.DELETE_TEACHER:
            return {...state, loading: true, error: null}

        case TeachersActionTypes.DELETE_TEACHER_ERROR:
            return {...state, loading: false, error: action.payload}

        case TeachersActionTypes.DELETE_TEACHER_SUCCESS:
            return {
                ...state,
                loading: false,
                teachers: state.teachers.filter(teacher => {
                    return teacher.id != action.payload.id
                })
            }


        case TeachersActionTypes.ADD_TEACHER:
            return {...state, loading: true, error: null}

        case TeachersActionTypes.ADD_TEACHER_ERROR:
            return {...state, loading: false, error: action.payload}   

        case TeachersActionTypes.ADD_TEACHER_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                teachers: [...state.teachers, action.payload]
            }    
        default:
            return state;
    }
}
