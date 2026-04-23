export interface TeacherCreateForm {
    avatarUrl: string
    name: string
    description: string
    subDescription: string
    videoUrl: string
    superPower: string
    favouriteWord: string
    forStudent: string
}

export interface TeacherCreatePayload {
    avatarUrl: string
    name: string
    description: string
    subDescription: string
    videoUrl: string
    superPower: string[]
    favouriteWord: string
    forStudent: string
}