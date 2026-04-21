import { Price } from "../core/priceEntity"


export class PriceResponseMapper {

    static toResponse = (price: Price) => {
        return {
            id:  price.getId(),
            amount: price.getAmount(),
            title: price.getTitle(),
            description: price.getDescription(),
            type: price.getType()
        }
    }
}