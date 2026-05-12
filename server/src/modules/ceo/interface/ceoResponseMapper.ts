import { CeoEntity } from "../core/ceoEntity";


export class CeoResponseMapper {

    public static toResponse (ceo: CeoEntity) {
        return {
            name: ceo.getName(),
            email: ceo.getEmail(),
            description: ceo.getDescription(),
            telegram: ceo.getTelegram(),
            instagram: ceo.getInstagram(),
            image: ceo.getImage(),
        }
    }
}