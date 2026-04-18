import axios from "axios";


export class AuthApi {

    static login(email: string, password: string) {
        return axios.post("http://localhost:3000/auth/login", {
            email, password
        })
    }

    static verify(email: string, code: string) {
        return axios.post("http://localhost:3000/auth/login-verify", {
            email, code
        })
    }
}
