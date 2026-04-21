import { PriceAction, PriceActionTypes, PriceState } from "./types"


const initialState: PriceState = {
    prices: [],
    loading: false,
    error: null,
    isFetched: false
}

export const PriceReducer = (state = initialState, action: PriceAction): PriceState => {

    switch (action.type) {
        case PriceActionTypes.FETCH_PRICES:
            return {...state, loading: true, error: null}            
    
        case PriceActionTypes.FETCH_PRICES_SUCCESS:
            return {...state, loading: false, isFetched: true, prices: action.payload}

        case PriceActionTypes.FETCH_PRICES_ERROR:
            return {...state, loading: false, error: action.payload}    

        default:
            return state;
    }
}