import { Price } from "../store/types";
import { PriceType } from "../types";


export const filterPrices = (type: PriceType, prices: Price[]) => {
    return prices.filter(price => {
        return price.type === type
    })
}