

export type PriceType = "individual" | "pair"

export interface CreatePriceForm {
    title: string,
    amount: number,
    description: string,
    type: PriceType
}