import { Price } from "./priceEntity"


export interface IPriceRepository {
    getAll(): Promise<Price[]>
    getOne(id: number): Promise<Price | null>
    save(price: Price): Promise<Price | null>
    delete(id: number): Promise<Price | null>
}