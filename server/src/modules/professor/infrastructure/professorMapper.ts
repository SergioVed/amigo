import { Professor } from "../core/professorEntity";
import { ProfessorModel, ProfessorModelCreationAttrs } from "./professorModel";


export class ProfessorMapper {

    public static toDomain (data: ProfessorModel): Professor {
        return new Professor(
            data.id,
            data.avatar_url,
            data.name,
            data.description,
            data.sub_description,
            data.video_url,
            data.super_power,
            data.favourite_word,
            data.for_student
        )
    }

    public static toPersistence (professor: Professor): ProfessorModelCreationAttrs {
        return {
            avatar_url: professor.getAvatarUrl(),
            name: professor.getName(),
            description: professor.getDescription(),
            sub_description: professor.getSubDescription(),
            video_url: professor.getVideoUrl(),
            super_power: professor.getSuperPower(),
            favourite_word: professor.getFavouriteWord(),
            for_student: professor.getForStudent(),
        }
    }
}
