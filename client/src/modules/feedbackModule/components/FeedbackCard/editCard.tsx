import { Dispatch, SetStateAction, useState } from "react"
import { CustomInput } from "../../../../ui/CustomInput"
import styles from "./index.module.css"
import { FeedbackForm } from "../../types"

interface EditCardProps {
    form: FeedbackForm
    setForm: Dispatch<SetStateAction<FeedbackForm>>
}

export const FeedbackEditCard = ({form, setForm}: EditCardProps) => {

    return (
        <>
            <div className={styles.header}>
                

                <CustomInput
                    placeholder="Name ..."
                    onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}
                    value={form.name}
                    label="Name"
                />
            </div>

            <CustomInput
                placeholder="Title ..."
                onChange={(e) => setForm(prev => ({...prev, title: e.target.value}))}
                value={form.title}
                label="Title"
            />

            <CustomInput
                placeholder="Description ..."
                onChange={(e) => setForm(prev => ({...prev, description: e.target.value}))}
                value={form.description}
                label="Description"
            />
        </>
    )
}