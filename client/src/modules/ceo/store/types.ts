

export interface CeoState {
    ceo: Ceo | null,
    loading: boolean,
    error: string | null,
    isFetched: boolean
}

export interface Ceo {
    name: string,
    email: string,
    description: string,
    telegram: string,
    instagram: string,
    image: string,
}

export type CeoAction = FetchCeoAction
    | FetchCeoSuccessAction
    | FetchCeoErrorAction

    | UpdateCeoAction
    | UpdateCeoSuccessAction
    | UpdateCeoErrorAction


export enum CeoActionTypes {
    FETCH_CEO = "FETCH_CEO",
    FETCH_CEO_SUCCESS = "FETCH_CEO_SUCCESS",
    FETCH_CEO_ERROR = "FETCH_CEO_ERROR",

    UPDATE_CEO = "UPDATE_CEO",
    UPDATE_CEO_SUCCESS = "UPDATE_CEO_SUCCESS",
    UPDATE_CEO_ERROR = "UPDATE_CEO_ERROR",
}

interface FetchCeoAction {
    type: CeoActionTypes.FETCH_CEO
}

interface FetchCeoSuccessAction {
    type: CeoActionTypes.FETCH_CEO_SUCCESS,
    payload: Ceo
}

interface FetchCeoErrorAction {
    type: CeoActionTypes.FETCH_CEO_ERROR,
    payload: string
}

interface UpdateCeoAction {
    type: CeoActionTypes.UPDATE_CEO
}

interface UpdateCeoSuccessAction {
    type: CeoActionTypes.UPDATE_CEO_SUCCESS,
    payload: Ceo
}

interface UpdateCeoErrorAction {
    type: CeoActionTypes.UPDATE_CEO_ERROR,
    payload: string
}