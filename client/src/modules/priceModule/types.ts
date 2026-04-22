export type PriceType = "individual" | "pair"

export interface PriceForm {
    title: string,
    amount: number,
    description: string,
    type: PriceType
}