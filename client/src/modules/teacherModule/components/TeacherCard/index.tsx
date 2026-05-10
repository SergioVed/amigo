import { useState } from "react"
import { Teacher } from "../../store/types"
import styles from "./index.module.css"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { updateTeacherAction, deleteTeacherAction } from "../../store/actions"
import { TeacherCardForm } from "./TeacherCardForm"
import { TeacherCardView } from "./TeacherCardView"
import { DeletePopup } from "../../../../components/DeletePopup"
import { CardActions } from "../../../../components/CardActionButtons"
import { UpdateTeacherPayload } from "../../api"

interface TeacherCardProps {
    teacher: Teacher
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {

    const dispatch = useAppDispatch()

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)

    const [form, setForm] = useState({
        avatarUrl: teacher.avatarUrl,
        name: teacher.name,
        description: teacher.description,
        subDescription: teacher.subDescription,
        videoUrl: teacher.videoUrl,
        superPower: teacher.superPower,
        favouriteWord: teacher.favouriteWord,
        forStudent: teacher.forStudent,
    })

    function handleUpdateTeacher() {
        const formToUpdate: UpdateTeacherPayload = {}
        const isSuperPowerChanged = form.superPower.length !== teacher.superPower.length
            || form.superPower.some((power, index) => power !== teacher.superPower[index])

        if (form.avatarUrl !== teacher.avatarUrl) {
            formToUpdate.avatarUrl = form.avatarUrl
        }

        if (form.name !== teacher.name) {
            formToUpdate.name = form.name
        }

        if (form.description !== teacher.description) {
            formToUpdate.description = form.description
        }

        if (form.subDescription !== teacher.subDescription) {
            formToUpdate.subDescription = form.subDescription
        }

        if (form.videoUrl !== teacher.videoUrl) {
            formToUpdate.videoUrl = form.videoUrl
        }

        if (isSuperPowerChanged) {
            formToUpdate.superPower = form.superPower
        }

        if (form.favouriteWord !== teacher.favouriteWord) {
            formToUpdate.favouriteWord = form.favouriteWord
        }

        if (form.forStudent !== teacher.forStudent) {
            formToUpdate.forStudent = form.forStudent
        }

        dispatch(updateTeacherAction(teacher.id, formToUpdate))
        setIsEditing(false)
    }

    function cancel() {
        setIsEditing(false)
        setForm({...teacher})
    }

    function handleDeleteTeacher() {
        dispatch(deleteTeacherAction(teacher))
    }

    return (
        <div className={styles.card}>
            <CardActions 
                isEditing={isEditing} 
                setIsEditing={setIsEditing}
                onSave={handleUpdateTeacher}
                onCancel={cancel} 
                setPopupVisible={setVisible}   
                className={styles.actions}
            />

            <DeletePopup onDelete={handleDeleteTeacher} setVisible={setVisible} visible={visible}/>

            {isEditing
                ? <TeacherCardForm form={form} setForm={setForm}/>
                : <TeacherCardView teacher={teacher}/>
            }
        </div>
    )
}
