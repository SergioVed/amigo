export type PriceType = "individual" | "pair" | "special";
export type PriceCategory = "trial" | "single" | "with_mari" | "subscription";

export interface CreatePriceAttrs {
    amount: number,
    title: string,
    description: string,
    type: PriceType,
    category: PriceCategory
}

export interface UpdatePriceAttrs extends Partial<CreatePriceAttrs> {}

export class Price {

    constructor (
        private _id: number | null,
        private _amount: number,
        private _title: string,
        private _description: string,
        private _type: PriceType,
        private _category: PriceCategory
    ) {}

    public getId(): number | null {
        return this._id;
    }

    public getAmount(): number {
        return this._amount;
    }

    public getTitle(): string {
        return this._title;
    }

    public getDescription(): string {
        return this._description;
    }

    public getType(): PriceType {
        return this._type;
    }

    public getCategory(): PriceCategory {
        return this._category
    }

    public static create (data: CreatePriceAttrs) {
        return new Price(
            null,
            data.amount,
            data.title, 
            data.description,
            data.type,
            data.category
        )
    }

    public update(data: UpdatePriceAttrs) {
        if (data.amount !== undefined) this._amount = data.amount
        if (data.description !== undefined) this._description = data.description
        if (data.title !== undefined) this._title = data.title;
        if (data.type !== undefined) this._type = data.type;
        if (data.category !== undefined) this._category = data.category;
    }
}
