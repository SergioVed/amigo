import axios from "axios";
import $api, { API_URL } from "../../../http";


export class AuthApi {

    static login(email: string, password: string) {
        return $api.post("/auth/login", {
            email, password
        })
    }

    static verify(email: string, code: string) {
        return $api.post("/auth/login-verify", {
            email, code
        })
    }

    static refresh() {
        return axios.post(`${API_URL}/auth/refresh`, {}, {withCredentials: true})
    }

    static logout () {
        return $api.post("auth/logout", {}, {withCredentials: true})
    }
}
