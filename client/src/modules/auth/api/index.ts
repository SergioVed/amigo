import axios from "axios";
import $api from "../../../http";


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
}
