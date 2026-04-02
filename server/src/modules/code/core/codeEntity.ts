export interface CreateCodeEntityAttrs {
    codeHash: string,
    email: string,
    expiresAt: Date
}

export interface UpdateCodeEntityAttrs extends Partial<CreateCodeEntityAttrs> {
    usedAt?: Date | null,
}

export class CodeEntity {
    constructor (
        private _id: number | null,
        private _codeHash: string,
        private _email: string,
        private _expiresAt: Date,
        private _usedAt: Date | null
    ) {}

    public getId (): number | null {
        return this._id
    }

    public getCodeHash (): string {
        return this._codeHash
    }

    public getEmail (): string {
        return this._email
    }

    public getExpiresAt (): Date {
        return this._expiresAt
    }

    public getUsedAt (): Date | null {
        return this._usedAt
    }

    public static create (data: CreateCodeEntityAttrs) {
        return new CodeEntity (
            null,
            data.codeHash,
            data.email,
            data.expiresAt,
            null
        )
    }

    public update (data: UpdateCodeEntityAttrs) {
        if (data.codeHash !== undefined) this._codeHash = data.codeHash
        if (data.email !== undefined) this._email = data.email
        if (data.expiresAt !== undefined) this._expiresAt = data.expiresAt
        if (data.usedAt !== undefined) this._usedAt = data.usedAt
    }
}
