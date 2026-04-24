export interface Feedback {
    id: number,
    name: string,
    title: string,
    description: string,
    avatarUrl: string
}

export interface FeedbackState {
    feedbacks: Feedback[],
    loading: boolean,
    isFetched: boolean,
    error: null | string
}




