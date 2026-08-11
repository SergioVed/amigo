import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { CustomInput } from "../../../../ui/CustomInput"
import { FeedbackForm } from "../../types"
import styles from "./index.module.css"
import { AddImageInput } from "../../../../ui/AddImageInput"

interface EditCardProps {
    form: FeedbackForm
    setForm: Dispatch<SetStateAction<FeedbackForm>>
    setSelectedFile: (file: File | null) => void
}

export const FeedbackEditCard = ({ form, setForm, setSelectedFile }: EditCardProps) => {

    function handleSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) {
            return
        }

        setSelectedFile(file)
    }

    return (
        <div className={styles.editForm}>
            <AddImageInput handleSelectFile={(e: ChangeEvent<HTMLInputElement>) => handleSelectFile(e)}/>

            <CustomInput
                placeholder="Name ..."
                onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                value={form.name}
                label="Name"
            />

            <label className={styles.textareaField}>
                <span className={styles.editLabel}>Description</span>
                <textarea
                    className={styles.textarea}
                    placeholder="Description ..."
                    value={form.description}
                    rows={6}
                    onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                />
            </label>
        </div>
    )
}
