import axios from "axios";
import { Teacher } from "../store/types";
import $api from "../../../http";

export type UpdateTeacherData = Omit<Teacher, "id">

export class TeachersApi {

    static getTeachers () {
        return $api.get("/professor")
    }

    static updateTeacher (id: number, data: UpdateTeacherData) {
        return $api.put(`/professor/${id}`, data)
    }
}