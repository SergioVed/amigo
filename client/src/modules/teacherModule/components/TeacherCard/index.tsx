import { useState } from "react"
import { Teacher } from "../../store/types"
import styles from "./index.module.css"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { updateTeacherAction, deleteTeacherAction } from "../../store/actions"
import { TeacherCardForm } from "./TeacherCardForm"
import { TeacherCardView } from "./TeacherCardView"
import { DeletePopup } from "../../../../ui/DeletePopup"
import { CardActions } from "../../../../ui/CardActionButtons"

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
        dispatch(updateTeacherAction(teacher.id, form))
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
