import { Price } from "../core/priceEntity";
import { PriceModel } from "./priceModel";


export class PriceMapper {

    public static toDomain (data: PriceModel) {
        return new Price(
            data.id,
            data.amount,
            data.title,
            data.description,
            data.type
        )
    }

    public static toPersistence (price: Price) {
        return {
            amount: price.getAmount(),
            title: price.getTitle(),
            description: price.getDescription(),
            type: price.getType()
        }
    }  

}