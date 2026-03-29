import { CeoEntity } from "./ceoEntity";

export interface ICeoRepository {
    getOne(id: number): Promise<CeoEntity | null>
    getByEmail(email: string): Promise<CeoEntity | null>
    save(ceoEntity: CeoEntity): Promise<CeoEntity | null>
}