import axios from "axios"
import type { CeoInfo } from "../components/ceo/types"
import type { Teacher } from "../components/teachers/types"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCeo = async () => {
    const response = await axios.get<CeoInfo>(API_BASE_URL + "/ceo/1")
    return response.data
}

export const getTeachers = async () => {
    const response = await axios.get<Teacher[]>(API_BASE_URL + "/professor")
    return response.data
}
