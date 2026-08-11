import { Teacher } from "../store/types"

interface FilterTeachersProps {
    teachers: Teacher[],
    query: string
}

export const filterTeachers = (teachers: Teacher[], query: string) => {
    const normalisedQuery = query.toLocaleLowerCase().trim()

    if (normalisedQuery == "") {
        return teachers
    }

    return teachers.filter(teacher => (
        [
            teacher.name,
            teacher.description,
        ].some((value) => (
            value.toLocaleLowerCase().includes(normalisedQuery)
        ))
    ))
}