import { useState } from "react"
import { Feedback } from "../../store/types"
import styles from "./index.module.css"
import { FeedbackViewCard } from "./viewCard"
import { FeedbackEditCard } from "./editCard"
import { CardActions } from "../../../../components/CardActionButtons"
import { FeedbackForm } from "../../types"
import { DeletePopup } from "../../../../components/DeletePopup"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { deleteFeedbackAction, updateFeedbackAction } from "../../store/actions"
import { UpdateFeedbackPayload } from "../../api/FeedbackApi"

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
    })
    const [selectedFile, setSelectedFile] = useState<File | null>(null)


    function handleSave() {
        const formToUpdate: UpdateFeedbackPayload = {}

        if (form.name !== feedback.name) {
            formToUpdate.name = form.name
        }

        if (form.title !== feedback.title) {
            formToUpdate.title = form.title
        }

        if (form.description !== feedback.description) {
            formToUpdate.description = form.description
        }

        dispatch(updateFeedbackAction(formToUpdate, selectedFile, feedback.id))
        setIsEdititng(false)
    }

    function handleCancel() {
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
                onSave={handleSave}
                onCancel={handleCancel}
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
                    setSelectedFile={setSelectedFile}
                />
                : <FeedbackViewCard feedback={feedback}/>
            }
        </article>

    )
}
