import { Dispatch, SetStateAction, useState } from "react"
import { CustomInput } from "../../../../ui/CustomInput"
import { FeedbackForm } from "../../types"

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
        <>
            <input 
                type="file"
                onChange={handleSelectFile}
            />

            <CustomInput
                placeholder="Name ..."
                onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                value={form.name}
                label="Name"
            />z

            <CustomInput
                placeholder="Title ..."
                onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                value={form.title}
                label="Title"
            />

            <CustomInput
                placeholder="Description ..."
                onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                value={form.description}
                label="Description"
            />
        </>
    )
}