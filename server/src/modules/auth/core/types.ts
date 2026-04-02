
export interface LoginInput {
    email: string,
    password: string
}

export interface AccessPayload {
    _email: string
}

export interface RefreshPayload {
    _email: string,
    _jti: string
}

export interface VerifyInput {
    email: string,
    code: string
}