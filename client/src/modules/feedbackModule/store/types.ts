export interface Feedback {
    id: number,
    name: string,
    description: string,
    avatarUrl: string
}

export interface FeedbackState {
    feedbacks: Feedback[],
    loading: boolean,
    isFetched: boolean,
    error: null | string
}



export enum FeedbackActionTypes {
    FETCH_FEEDBACKS = "FETCH_FEEDBACKS",
    FETCH_FEEDBACKS_ERROR = "FETCH_FEEDBACKS_ERROR",
    FETCH_FEEDBACKS_SUCCESS = "FETCH_FEEDBACKS_SUCCESS",
    
    ADD_FEEDBACK = "ADD_FEEDBACK",
    ADD_FEEDBACK_SUCCESS = "ADD_FEEDBACK_SUCCESS",
    ADD_FEEDBACK_ERROR = "ADD_FEEDBACK_ERROR",

    DELETE_FEEDBACK = "DELETE_FEEDBACK",
    DELETE_FEEDBACK_SUCCESS = "DELETE_FEEDBACK_SUCCESS",
    DELETE_FEEDBACK_ERROR = "DELETE_FEEDBACK_ERROR",

    UPDATE_FEEDBACK = "UPDATE_FEEDBACK",
    UPDATE_FEEDBACK_SUCCESS = "UPDATE_FEEDBACK_SUCCESS",
    UPDATE_FEEDBACK_ERROR = "UPDATE_FEEDBACK_ERROR"
}

export type FeedbackAction = FetchFeedbackAction
    | FetchFeedbackErrorAction
    | FetchFeedbackSuccessAction

    | AddFeedbackAction
    | AddFeedbackSuccessAction
    | AddFeedbackErrorAction

    | DeleteFeedbackAction
    | DeleteFeedbackSuccessAction
    | DeleteFeedbackErrorAction

    | UpdateFeedbackAction
    | UpdateFeedbackSuccessAction
    | UpdateFeedbackErrorAction



interface FetchFeedbackAction {
    type: FeedbackActionTypes.FETCH_FEEDBACKS,
}

interface FetchFeedbackSuccessAction {
    type: FeedbackActionTypes.FETCH_FEEDBACKS_SUCCESS,
    payload: Feedback[]
}

interface FetchFeedbackErrorAction {
    type: FeedbackActionTypes.FETCH_FEEDBACKS_ERROR,
    payload: string
}



interface AddFeedbackAction {
    type: FeedbackActionTypes.ADD_FEEDBACK
}

interface AddFeedbackSuccessAction {
    type: FeedbackActionTypes.ADD_FEEDBACK_SUCCESS,
    payload: Feedback
}

interface AddFeedbackErrorAction {
    type: FeedbackActionTypes.ADD_FEEDBACK_ERROR,
    payload: string
}



interface DeleteFeedbackAction {
    type: FeedbackActionTypes.DELETE_FEEDBACK
}

interface DeleteFeedbackSuccessAction {
    type: FeedbackActionTypes.DELETE_FEEDBACK_SUCCESS,
    payload: Feedback
}

interface DeleteFeedbackErrorAction {
    type: FeedbackActionTypes.DELETE_FEEDBACK_ERROR,
    payload: string
}


interface UpdateFeedbackAction {
    type: FeedbackActionTypes.UPDATE_FEEDBACK
}

interface UpdateFeedbackSuccessAction {
    type: FeedbackActionTypes.UPDATE_FEEDBACK_SUCCESS,
    payload: Feedback
}

interface UpdateFeedbackErrorAction {
    type: FeedbackActionTypes.UPDATE_FEEDBACK_ERROR,
    payload: string
}