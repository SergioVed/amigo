import { CeoEntity } from "../core/ceoEntity";
import { CeoModel } from "./ceoModel";
import type { CeoCreationAttrs } from "../core/ceoEntity";


export class CeoMapper {

    public static toDomain (data: CeoModel) {
        return new CeoEntity (
            data.id,
            data.name,
            data.email,
            data.password,
            data.description,
            data.telegram,
            data.instagram,
            data.image
        )
    }

    public static toPersistence (ceoEntity: CeoEntity): CeoCreationAttrs {
        return {
            name: ceoEntity.getName(),
            email: ceoEntity.getEmail(),
            password: ceoEntity.getPassword(),
            description: ceoEntity.getDescription(),
            telegram: ceoEntity.getTelegram(),
            instagram: ceoEntity.getInstagram(),
            image: ceoEntity.getImage()
        }
    }
}
