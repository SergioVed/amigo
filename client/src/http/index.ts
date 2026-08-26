import axios from "axios"
import { LoginActionTypes } from "../modules/auth/store/types"
import { store } from "../store"

export const API_URL =
    process.env.REACT_APP_API_URL ?? 'http://localhost:3000'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

let refreshPromise: Promise<string> | null = null

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true
        try {
            if (!refreshPromise) {
                refreshPromise = axios
                    .post(`${API_URL}/auth/refresh`, {}, {withCredentials: true})
                    .then(response => response.data.accessToken)
                    .finally(() => {
                        refreshPromise = null
                    })
            }

            const accessToken = await refreshPromise
            localStorage.setItem('token', accessToken)

            return $api.request(originalRequest)
        } catch {
            localStorage.removeItem("token")
            store.dispatch({type: LoginActionTypes.LOGOUT})
        }

    }
    return Promise.reject(error)
})

export default $api
