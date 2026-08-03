
export type PriceCategory = "trial" | "single" | "with_mari" | "subscription";
export type PriceType = "individual" | "pair"



export interface PriceForm {
    title: string,
    amount: number,
    description: string,
    type: PriceType,
    category: PriceCategory
}