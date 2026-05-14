import { CeoAction, CeoActionTypes, CeoState } from "./types"

const ceoState: CeoState = {
    ceo: null,
    loading: false,
    error: null,
    isFetched: false
}

export const CeoReducer = (state = ceoState, action: CeoAction): CeoState => {
    switch (action.type) {
        case CeoActionTypes.FETCH_CEO:
            return {...state, loading: true, error: null}   
            
        case CeoActionTypes.FETCH_CEO_SUCCESS:
            return {...state, loading: false, isFetched: true, ceo: action.payload}    
    
        case CeoActionTypes.FETCH_CEO_ERROR:
            return {...state, loading: false, error: action.payload}
            

        case CeoActionTypes.UPDATE_CEO:
            return {...state, loading: true, error: null, isFetched: false}

        case CeoActionTypes.UPDATE_CEO_SUCCESS:
            return {...state, loading: false, ceo: action.payload, isFetched: true}

        case CeoActionTypes.UPDATE_CEO_ERROR:
            return {...state, loading: false, error: action.payload}
        

        default:
            return state
    }
}