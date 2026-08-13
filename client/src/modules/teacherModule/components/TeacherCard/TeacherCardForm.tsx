import { ChangeEvent, Dispatch, SetStateAction } from "react"
import styles from "./index.module.css"
import { CustomInput } from "../../../../ui/CustomInput"
import { Teacher } from "../../../teacherModule/store/types"
import { AddImageInput } from "../../../../ui/AddImageInput"
import { compressImage } from "../../../../utils/compressImage"

type TeacherFormData = Omit<Teacher, "id">

interface TeacherCardFormProps {
    form: TeacherFormData
    setForm: Dispatch<SetStateAction<TeacherFormData>>
    setSelectedFile: (file: File | null) => void
}



export const TeacherCardForm = ({ form, setForm, setSelectedFile }: TeacherCardFormProps) => {

    async function handleSelectImage(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

        if (!file) {
            return
        }

        try {
            setSelectedFile(await compressImage(file))
        } catch (error) {
            setSelectedFile(null)
            alert(error instanceof Error ? error.message : "Could not prepare the selected image")
            e.target.value = ""
        }
    }

    function updateSuperPower(index: number, value: string) {
        setForm(prev => {
            const superPower = [...prev.superPower]
            superPower[index] = value

            return { ...prev, superPower }
        })
    }

    return (
        <div className={styles.form}>
            <AddImageInput
                handleSelectFile={handleSelectImage}
            />

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

            <CustomInput
                label="Experience"
                value={form.experience}
                type="number"
                onChange={(e) => setForm((prev) => ({ ...prev, experience: Number(e.target.value) }))}
                placeholder="Enter experience"
            />

            <label>
                <input
                    type="checkbox"
                    checked={form.hasPriority}
                    onChange={(e) => setForm((prev) => ({ ...prev, hasPriority: e.target.checked }))}
                />
                Has priority
            </label>

            <CustomInput
                label="First Super Power"
                value={form.superPower[0] ?? ""}
                onChange={(e) => updateSuperPower(0, e.target.value)}
                placeholder="Enter first super power"
            />

            <CustomInput
                label="Second Super Power"
                value={form.superPower[1] ?? ""}
                onChange={(e) => updateSuperPower(1, e.target.value)}
                placeholder="Enter second super power"
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
