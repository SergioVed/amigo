import { useState } from "react"
import { Teacher } from "../../store/types"
import styles from "./index.module.css"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { updateTeacher } from "../../store/actions"
import { TeacherCardActions } from "./TeacherCardActions"
import { TeacherCardForm } from "./TeacherCardForm"
import { TeacherCardView } from "./TeacherCardView"

interface TeacherCardProps {
    teacher: Teacher
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {

    const dispatch = useAppDispatch()

    const [isEditing, setIsEditing] = useState<boolean>(false)
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

    function submit() {
        dispatch(updateTeacher(teacher.id, form))
        setIsEditing(false)
    }

    function cancel() {
        setIsEditing(false)
        setForm({...teacher})
    }

    return (
        <div className={styles.card}>
            <TeacherCardActions 
                isEditing={isEditing} 
                setIsEditing={setIsEditing}
                onSave={submit}
                onCancel={cancel}    
            />

            {isEditing
                ? <TeacherCardForm form={form} setForm={setForm}/>
                : <TeacherCardView teacher={teacher}/>
            }
        </div>
    )
}
