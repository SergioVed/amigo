import axios from "axios";
import { Teacher } from "../store/types";

export type UpdateTeacherData = Omit<Teacher, "id">

export class TeachersApi {

    static getTeachers () {
        return axios.get("http://localhost:3000/professor")
    }

    static updateTeacher (id: number, data: UpdateTeacherData) {
        return axios.put(`http://localhost:3000/professor/${id}`, data)
    }
}