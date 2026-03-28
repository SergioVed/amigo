export interface CreateProfessorAttrs {
    avatarUrl: string,
    name: string,
    description: string,
    subDescription: string,
    videoUrl: string,
    superPower: string[],
    favouriteWord: string,
    forStudent: string
}

export class Professor {

    constructor(
        private _id: number | null,
        private _avatarUrl: string,
        private _name: string,
        private _description: string,
        private _subDescription: string,
        private _videoUrl: string,
        private _superPower: string[],
        private _favouriteWord: string,
        private _forStudent: string
    ) { }

    public getId(): number | null {
        return this._id;
    }

    public getAvatarUrl(): string {
        return this._avatarUrl;
    }

    public getName(): string {
        return this._name;
    }

    public getDescription(): string {
        return this._description;
    }

    public getSubDescription(): string {
        return this._subDescription;
    }

    public getVideoUrl(): string {
        return this._videoUrl;
    }

    public getSuperPower(): string[] {
        return this._superPower;
    }

    public getFavouriteWord(): string {
        return this._favouriteWord;
    }

    public getForStudent(): string {
        return this._forStudent;
    }


    public static create(data: CreateProfessorAttrs) {
        return new Professor(
            null,
            data.avatarUrl,
            data.name,
            data.description,
            data.subDescription,
            data.videoUrl,
            data.superPower,
            data.favouriteWord,
            data.forStudent
        )
    }

    public update(data: Partial<CreateProfessorAttrs>) {
        if (data.avatarUrl !== undefined) this._avatarUrl = data.avatarUrl;
        if (data.name !== undefined) this._name = data.name;
        if (data.description !== undefined) this._description = data.description;
        if (data.subDescription !== undefined) this._subDescription = data.subDescription;
        if (data.videoUrl !== undefined) this._videoUrl = data.videoUrl;
        if (data.superPower !== undefined) this._superPower = data.superPower;
        if (data.favouriteWord !== undefined) this._favouriteWord = data.favouriteWord;
        if (data.forStudent !== undefined) this._forStudent = data.forStudent;
    }
}

