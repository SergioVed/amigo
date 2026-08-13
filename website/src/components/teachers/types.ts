

export interface Teacher {
    avatarUrl: string,
    hasPriority: boolean,
    name: string,
    description: string,
    experience: number,
    videoUrl: string,
    superPower: string[],
    favouriteWord: string,
    forStudent: string
    language: TeacherLanguage
}

export type TeacherLanguage = "SPANISH" | "ENGLISH"
