import { Dispatch, SetStateAction } from "react"
import styles from "./index.module.css"
import { CustomInput } from "../../../../ui/CustomInput"
import { Teacher } from "../../../teacherModule/store/types"

type TeacherFormData = Omit<Teacher, "id">

interface TeacherCardFormProps {
    form: TeacherFormData
    setForm: Dispatch<SetStateAction<TeacherFormData>>
}

export const TeacherCardForm = ({ form, setForm }: TeacherCardFormProps) => {
    return (
        <div className={styles.form}>
            <CustomInput
                label="Name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Name"
            />

            <CustomInput
                label="Description"
                value={form.description}
                onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Enter description"
            />

            <div className={styles.videoLink}>
                <img
                    src={require("../../public/icons/video.png")}
                    className={styles.videoIcon}
                    alt=""
                />
                <CustomInput
                    label="Video Url"
                    value={form.videoUrl}
                    onChange={(e) => setForm((prev) => ({ ...prev, videoUrl: e.target.value }))}
                    placeholder="Enter link to video"
                />
            </div>

            <CustomInput
                label="Favourite Word"
                value={form.favouriteWord}
                onChange={(e) => setForm((prev) => ({ ...prev, favouriteWord: e.target.value }))}
                placeholder="Enter favourite word"
            />

            <CustomInput
                label="For student"
                value={form.forStudent}
                onChange={(e) => setForm((prev) => ({ ...prev, forStudent: e.target.value }))}
                placeholder="For student...."
                isYellow
            />
        </div>
    )
}
