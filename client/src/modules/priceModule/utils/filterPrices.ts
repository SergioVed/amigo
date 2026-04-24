import { Price } from "../store/types";
import { PriceType } from "../types";


export const filterPrices = (prices: Price[], type: PriceType) => {
    return prices.filter(price => {
        return price.type === type
    })
}