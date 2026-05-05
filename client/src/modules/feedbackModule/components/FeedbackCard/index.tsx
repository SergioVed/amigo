import { useState } from "react"
import { Feedback } from "../../store/types"
import styles from "./index.module.css"
import { FeedbackViewCard } from "./viewCard"
import { FeedbackEditCard } from "./editCard"
import { CardActions } from "../../../../components/CardActionButtons"
import { FeedbackForm } from "../../types"
import { createFeedbackForm } from "../../utils/createFeedbackForm"
import { DeletePopup } from "../../../../components/DeletePopup"
import { useDispatch } from "react-redux"
import { useActionData } from "react-router-dom"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { deleteFeedbackAction } from "../../store/actions"

interface FeedbackCardProps {
    feedback: Feedback
}

export const FeedbackCard = ({ feedback }: FeedbackCardProps) => {

    const dispatch = useAppDispatch()

    const [isEditing, setIsEdititng] = useState<boolean>(false)
    const [popupVisible, setPopupVisible] = useState<boolean>(false)

    const [form, setForm] = useState<FeedbackForm>({
        name: feedback.name,
        title: feedback.title,
        description: feedback.description,
        avatarUrl: feedback.avatarUrl
    })

    function save() {
        
    }

    function cancel() {
        setForm({...feedback})
        setIsEdititng(false)
    }

    function handleDelete(feedback: Feedback) {
        dispatch(deleteFeedbackAction(feedback))
    }

    return (
        <article className={styles.card}>

            <CardActions 
                isEditing={isEditing} 
                setIsEditing={setIsEdititng}
                setPopupVisible={setPopupVisible}
                onSave={save}
                onCancel={cancel}
                className={styles.actions}
            />

            <DeletePopup 
                onDelete={() => handleDelete(feedback)}
                setVisible={setPopupVisible} 
                visible={popupVisible}
            />

            {isEditing
                ? <FeedbackEditCard
                    form={form}
                    setForm={setForm}
                />
                : <FeedbackViewCard feedback={feedback}/>
            }
        </article>

    )
}
