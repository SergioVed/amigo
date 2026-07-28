import { Professor } from "../core/professorEntity.js";
import { ProfessorModel, ProfessorModelCreationAttrs } from "./professorModel";


export class ProfessorMapper {

    public static toDomain (data: ProfessorModel): Professor {
        return new Professor(
            data.id,
            data.has_priority,
            data.avatar_url,
            data.name,
            data.description,
            data.experience,
            data.video_url,
            data.super_power,
            data.favourite_word,
            data.for_student
        )
    }

    public static toPersistence (professor: Professor): ProfessorModelCreationAttrs {
        return {
            avatar_url: professor.getAvatarUrl(),
            has_priority: professor.getHasPriority(),
            name: professor.getName(),
            description: professor.getDescription(),
            experience: professor.getExperience(),
            video_url: professor.getVideoUrl(),
            super_power: professor.getSuperPower(),
            favourite_word: professor.getFavouriteWord(),
            for_student: professor.getForStudent(),
        }
    }
}
