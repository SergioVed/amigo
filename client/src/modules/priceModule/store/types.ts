
type PriceType = "individual" | "pair"

export interface Price {
    id: number,
    amount: number,
    title: string,
    description: string,
    type: PriceType
}



export interface PriceState {
    prices: Price[],
    loading: boolean,
    error: string | null
    isFetched: boolean
}

export type PriceAction = FetchPriceActionType
    | FetchPriceErrorActionType
    | FetchPriceSuccessActionType

    | AddPriceActionType
    | AddPriceErrorActionType
    | AddPriceSuccessActionType

    | UpdatePriceActionType
    | UpdatePriceErrorActionType
    | UpdatePriceSuccessActionType

    | DeletePriceActionType
    | DeletePriceErrorActionType
    | DeletePriceSuccessActionType

export enum PriceActionTypes {
    FETCH_PRICES = "FETCH_PRICES",
    FETCH_PRICES_SUCCESS = "FETCH_PRICES_SUCCESS",
    FETCH_PRICES_ERROR = "FETCH_PRICES_ERROR",

    ADD_PRICE = "ADD_PRICE",
    ADD_PRICE_SUCCESS = "ADD_PRICE_SUCCESS",
    ADD_PRICE_ERROR = "ADD_PRICE_ERROR",

    UPDATE_PRICE = "UPDATE_PRICE",
    UPDATE_PRICE_SUCCESS = "UPDATE_PRICE_SUCCESS",
    UPDATE_PRICE_ERROR = "UPDATE_PRICE_ERROR",

    DELETE_PRICE = "DELETE_PRICE",
    DELETE_PRICE_SUCCESS = "DELETE_PRICE_SUCCESS",
    DELETE_PRICE_ERROR = "DELETE_PRICE_ERROR",
}

//Delete price action types
interface DeletePriceActionType {
    type: PriceActionTypes.DELETE_PRICE
}

interface DeletePriceSuccessActionType {
    type: PriceActionTypes.DELETE_PRICE_SUCCESS,
    payload: Price
}

interface DeletePriceErrorActionType {
    type: PriceActionTypes.DELETE_PRICE_ERROR,
    payload: string
}

// Update price action types
interface UpdatePriceActionType {
    type: PriceActionTypes.UPDATE_PRICE
}

interface UpdatePriceSuccessActionType {
    type: PriceActionTypes.UPDATE_PRICE_SUCCESS,
    payload: Price
}

interface UpdatePriceErrorActionType {
    type: PriceActionTypes.UPDATE_PRICE_ERROR,
    payload: string
}

// Add price action types
interface AddPriceActionType {
    type: PriceActionTypes.ADD_PRICE
}

interface AddPriceSuccessActionType {
    type: PriceActionTypes.ADD_PRICE_SUCCESS
    payload: Price
}

interface AddPriceErrorActionType {
    type: PriceActionTypes.ADD_PRICE_ERROR,
    payload: string
}


// Fetch all prices action types
interface FetchPriceActionType {
    type: PriceActionTypes.FETCH_PRICES
}

interface FetchPriceSuccessActionType {
    type: PriceActionTypes.FETCH_PRICES_SUCCESS
    payload: Price[]
}

interface FetchPriceErrorActionType {
    type: PriceActionTypes.FETCH_PRICES_ERROR
    payload: string
}