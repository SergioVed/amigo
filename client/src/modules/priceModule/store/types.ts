
type PriceType = "individual" | "pair"

export interface Price {
    id: number | null,
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

export enum PriceActionTypes {
    FETCH_PRICES = "FETCH_PRICES",
    FETCH_PRICES_SUCCESS = "FETCH_PRICES_SUCCESS",
    FETCH_PRICES_ERROR = "FETCH_PRICES_ERROR"
}

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