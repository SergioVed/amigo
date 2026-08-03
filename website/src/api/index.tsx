import axios from "axios"
import type { CeoInfo } from "../components/ceo/types"
import type { Teacher } from "../components/teachers/types"
import type { FeedbackProps } from "../components/feedbacks/types"
import type { PriceProps } from "../components/prices/types"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCeo = () => {
    return fetch<CeoInfo>("/ceo/1")
}

export const getTeachers = () => {
    return fetch<Teacher[]>("/professor")
}

export const getFeedbacks = () => {
    return fetch<FeedbackProps[]>("/feedback")
}

export const getPrices = () => {
    return fetch<PriceProps[]>("/price")
}


async function fetch<T>(path: string) {
    const response = await axios.get<T>(API_BASE_URL + path)
    return response.data
}