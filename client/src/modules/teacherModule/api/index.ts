import axios from "axios";
import { Teacher } from "../store/types";
import $api from "../../../http";
import { TeacherCreateForm, TeacherCreatePayload } from "../types";

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

    static addTeacher (data: TeacherCreatePayload) {
        return $api.post('/professor', data)
    }
}
