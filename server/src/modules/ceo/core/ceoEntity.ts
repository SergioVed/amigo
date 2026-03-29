export interface CeoCreationAttrs {
    name: string,
    email: string,
    password: string,
    description: string,
    telegram: string,
    instagram: string,
    image: string
}

export interface CeoUpdateAttrs extends Partial<CeoCreationAttrs> {}

export class CeoEntity {

    constructor(
        private _id: number | null,
        private _name: string,
        private _email: string,
        private _password: string,
        private _description: string,
        private _telegram: string,
        private _instagram: string,
        private _image: string
    ){}

    public getId (): number | null {
        return this._id
    }

    public getName(): string {
        return this._name;
    }

    public getEmail(): string {
        return this._email
    }

    public getPassword(): string {
        return this._password
    }

    public getDescription(): string {
        return this._description;
    }

    public getTelegram(): string {
        return this._telegram;
    }

    public getInstagram(): string {
        return this._instagram;
    }

    public getImage(): string {
        return this._image;
    }


    public static create (data: CeoCreationAttrs) {
        return new CeoEntity (
            null,
            data.name,
            data.email,
            data.password,
            data.description,
            data.telegram,
            data.instagram,
            data.image
        )
    }

    public update (data: CeoUpdateAttrs) {
        if (data.name !== undefined) this._name = data.name
        if (data.description !== undefined) this._description = data.description
        if (data.telegram !== undefined) this._telegram = data.telegram
        if (data.instagram !== undefined) this._instagram = data.instagram
        if (data.image !== undefined) this._image = data.image
    }
}
