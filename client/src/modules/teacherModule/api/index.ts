import { Teacher } from "../store/types";
import $api from "../../../http";
import { TeacherCreatePayload } from "../types";

export type UpdateTeacherData = Omit<Teacher, "id">
export type UpdateTeacherPayload = Partial<UpdateTeacherData>

export class TeachersApi {

    static getTeachers () {
        return $api.get("/professor")
    }

    static updateTeacher (id: number, data: UpdateTeacherPayload, file: File | null = null) {
        const formData = new FormData()

        if (data.avatarUrl !== undefined) {
            formData.append("avatarUrl", data.avatarUrl)
        }

        if (data.name !== undefined) {
            formData.append("name", data.name)
        }

        if (data.description !== undefined) {
            formData.append("description", data.description)
        }

        if (data.forStudent !== undefined) {
            formData.append("forStudent", data.forStudent)
        }

        if (data.videoUrl !== undefined) {
            formData.append("videoUrl", data.videoUrl)
        }

        if (data.favouriteWord !== undefined) {
            formData.append("favouriteWord", data.favouriteWord)
        }

        if (data.experience !== undefined) {
            formData.append("experience", String(data.experience))
        }

        if (data.hasPriority !== undefined) {
            formData.append("hasPriority", String(data.hasPriority))
        }

        if (data.superPower !== undefined) {
            data.superPower.forEach((item) => {
                formData.append("superPower", item)
            })
        }

        if (data.language !== undefined) {
            formData.append("language", data.language)
        }

        if (file !== null) {
            formData.append("file", file)
        }

        return $api.put(`/professor/${id}`, formData)
    }

    static deleteTeaher (id: number) {
        return $api.delete(`professor/${id}`)
    }

    static addTeacher (data: TeacherCreatePayload, selectedFile: File) {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("forStudent", data.forStudent)
        formData.append("videoUrl", data.videoUrl)
        formData.append("favouriteWord", data.favouriteWord)
        formData.append("experience", String(data.experience))
        formData.append("hasPriority", String(data.hasPriority))
        formData.append("language", data.language)
        
        data.superPower.forEach((item) => {
            formData.append("superPower", item)
        })

        formData.append("file", selectedFile)

        return $api.post('/professor', formData)
    }
}
