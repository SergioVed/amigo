export interface TeacherCreateForm {
    name: string
    description: string
    videoUrl: string
    superPower1: string
    superPower2: string
    favouriteWord: string
    forStudent: string
    experience: number
    hasPriority: boolean,
    language: Language
}

export interface TeacherCreatePayload {
    name: string
    description: string
    videoUrl: string
    superPower: string[]
    favouriteWord: string
    forStudent: string
    experience: number
    hasPriority: boolean,
    language: Language
}


export type Language = "SPANISH" | "ENGLISH"