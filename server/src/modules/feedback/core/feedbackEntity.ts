export interface CreateFeedbackAttrs {
    name: string,
    title: string,
    description: string,
    avatarUrl: string
}

export interface UpdateFeedbackAttrs extends Partial<CreateFeedbackAttrs> {}

export class Feedback {

    constructor(
        private _id: number | null,
        private _name: string,
        private _title: string,
        private _description: string,
        private _avatarUrl: string
    ) { }

    public getId(): number | null {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public getTitle(): string {
        return this._title;
    }

    public getDescription(): string {
        return this._description;
    }

    public getUrl(): string {
        return this._avatarUrl;
    }

    public static create(data: CreateFeedbackAttrs) {
        return new Feedback(
            null,
            data.name,
            data.title,
            data.description,
            data.avatarUrl
        )
    }

    public update(data: Partial<CreateFeedbackAttrs>) {
        if (data.name !== undefined) this._name = data.name;
        if (data.title !== undefined) this._title = data.title;
        if (data.description !== undefined) this._description = data.description;
        if (data.avatarUrl !== undefined) this._avatarUrl = data.avatarUrl;
    }
}
