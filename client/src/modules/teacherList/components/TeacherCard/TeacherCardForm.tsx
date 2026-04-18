import { Dispatch, SetStateAction } from "react"
import { Teacher } from "../../store/types"
import { CardInput } from "../../ui/CardInput"
import styles from "./index.module.css"

type TeacherFormData = Omit<Teacher, "id">

interface TeacherCardFormProps {
    form: TeacherFormData
    setForm: Dispatch<SetStateAction<TeacherFormData>>
}

export const TeacherCardForm = ({ form, setForm }: TeacherCardFormProps) => {
    return (
        <div className={styles.form}>
            <CardInput
                label="Name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Name"
            />

            <CardInput
                label="Description"
                value={form.description}
                onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Enter description"
            />

            <CardInput
                label="Sub Description"
                value={form.subDescription}
                onChange={(e) => setForm((prev) => ({ ...prev, subDescription: e.target.value }))}
                placeholder="Enter sub description"
            />

            <div className={styles.videoLink}>
                <img
                    src={require("../../public/icons/video.png")}
                    className={styles.videoIcon}
                    alt=""
                />
                <CardInput
                    label="Video Url"
                    value={form.videoUrl}
                    onChange={(e) => setForm((prev) => ({ ...prev, videoUrl: e.target.value }))}
                    placeholder="Enter link to video"
                />
            </div>

            <CardInput
                label="Favourite Word"
                value={form.favouriteWord}
                onChange={(e) => setForm((prev) => ({ ...prev, favouriteWord: e.target.value }))}
                placeholder="Enter favourite word"
            />

            <CardInput
                label="For student"
                value={form.forStudent}
                onChange={(e) => setForm((prev) => ({ ...prev, forStudent: e.target.value }))}
                placeholder="For student...."
                isYellow
            />
        </div>
    )
}
