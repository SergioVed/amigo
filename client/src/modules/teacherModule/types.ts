export interface TeacherCreateForm {
    name: string
    description: string
    subDescription: string
    videoUrl: string
    superPower: string
    favouriteWord: string
    forStudent: string
}

export interface TeacherCreatePayload {
    name: string
    description: string
    subDescription: string
    videoUrl: string
    superPower: string[]
    favouriteWord: string
    forStudent: string
}