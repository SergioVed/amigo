import { Teacher } from "../store/types";
import $api from "../../../http";
import { TeacherCreatePayload } from "../types";

export type UpdateTeacherData = Omit<Teacher, "id">
export type UpdateTeacherPayload = Partial<UpdateTeacherData>

export class TeachersApi {

    static getTeachers () {
        return $api.get("/professor")
    }

    static updateTeacher (id: number, data: UpdateTeacherPayload) {
        return $api.put(`/professor/${id}`, data)
    }

    static deleteTeaher (id: number) {
        return $api.delete(`professor/${id}`)
    }

    static addTeacher (data: TeacherCreatePayload, selectedFile: File) {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("subDescription", data.subDescription)
        formData.append("forStudent", data.forStudent)
        formData.append("videoUrl", data.videoUrl)
        formData.append("favouriteWord", data.favouriteWord)
        
        data.superPower.forEach((item) => {
            formData.append("superPower", item)
        })

        formData.append("file", selectedFile)

        return $api.post('/professor', formData)
    }
}
