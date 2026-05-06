import { FeedbackActionTypes, type FeedbackAction, type FeedbackState } from "./types"

const initialState: FeedbackState = {
    feedbacks: [],
    loading: false,
    isFetched: false,
    error: null
}

export const FeedbackReducer = (state = initialState, action: FeedbackAction): FeedbackState => {
    switch (action.type) {

        case FeedbackActionTypes.FETCH_FEEDBACKS:
            return {...state, loading: true, error: null}

        case FeedbackActionTypes.FETCH_FEEDBACKS_SUCCESS:
            return {...state, loading: false, isFetched: true, feedbacks: action.payload}    
        
        case FeedbackActionTypes.FETCH_FEEDBACKS_ERROR:
            return {...state, loading: false, error: action.payload}    


        case FeedbackActionTypes.ADD_FEEDBACK:
            return {...state, loading: true, error: null}

        case FeedbackActionTypes.ADD_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                feedbacks: [...state.feedbacks, action.payload]
            }    

        case FeedbackActionTypes.ADD_FEEDBACK_ERROR:
            return {...state, loading: false, error: action.payload}


        case FeedbackActionTypes.DELETE_FEEDBACK:
            return {...state, loading: true, error: null}

        case FeedbackActionTypes.DELETE_FEEDBACK_SUCCESS:
            return {
                ...state, 
                loading: false, 
                feedbacks: [...state.feedbacks].filter(item => item.id !== action.payload.id)
            }

        case FeedbackActionTypes.DELETE_FEEDBACK_ERROR:
            return {...state, loading: false, error: action.payload}
            
            
        case FeedbackActionTypes.UPDATE_FEEDBACK:
            return {...state, loading: true, error: null}
            
        case FeedbackActionTypes.UPDATE_FEEDBACK_SUCCESS:
            return {
                ...state, 
                loading: false,
                feedbacks: state.feedbacks.map(item => {
                    return action.payload.id === item.id ? action.payload : item
                })
            }   
            
        case FeedbackActionTypes.UPDATE_FEEDBACK_ERROR:
            return {...state, loading: false, error: action.payload}    

        default:
            return state    
    }
}