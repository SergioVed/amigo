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

           
        case PriceActionTypes.ADD_PRICE:
            return {...state, loading: true, error: null}    

        case PriceActionTypes.ADD_PRICE_SUCCESS:
            return {...state, loading: false, prices: [...state.prices, action.payload]}    

        case PriceActionTypes.ADD_PRICE_ERROR:
            return {...state, loading: false, error: action.payload} 
            
            
        case PriceActionTypes.UPDATE_PRICE:
            return {...state, loading: true, error: null}

        case PriceActionTypes.UPDATE_PRICE_SUCCESS:
            return {
                ...state, 
                loading: false,
                prices: state.prices.map(price => {
                    return price.id === action.payload.id ? action.payload : price
                })
            }  
            
        case PriceActionTypes.UPDATE_PRICE_ERROR:
            return {...state, loading: false, error: action.payload}  
            
            
        case PriceActionTypes.DELETE_PRICE:
            return {...state, loading: true, error: null}
            
        case PriceActionTypes.DELETE_PRICE_SUCCESS:
            return {
                ...state, 
                loading: false, 
                prices: state.prices.filter((price) => price.id !== action.payload.id)
            }    

        case PriceActionTypes.DELETE_PRICE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    

        default:
            return state;
    }
}