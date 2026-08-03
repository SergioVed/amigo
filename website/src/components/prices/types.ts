export type PriceType = "individual" | "pair" | "special";
type PriceCategory = "trial" | "single" | "with_mari" | "subscription";

export interface PriceProps {
    amount: number,
    title: string,
    description: string,
    type: PriceType,
    category: PriceCategory
}