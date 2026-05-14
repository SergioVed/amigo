

interface CeoForm {
    name: string,
    email: string,
    description: string,
    telegram: string,
    instagram: string,
    image: string,
}

export type UpdateCeoForm = Partial<CeoForm>;