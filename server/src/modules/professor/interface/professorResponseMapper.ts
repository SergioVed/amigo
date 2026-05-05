import { Professor } from "../core/professorEntity.js";


export class ProfessorResponseMapper {

    static toResponse (professor: Professor) {
        return {
            id: professor.getId(),
            avatarUrl: professor.getAvatarUrl(),
            name: professor.getName(),
            description: professor.getDescription(),
            subDescription: professor.getSubDescription(),
            videoUrl: professor.getVideoUrl(),
            superPower: professor.getSuperPower(),
            favouriteWord: professor.getFavouriteWord(),
            forStudent: professor.getForStudent(),
        }
    }
}