
import { Dispatch, SetStateAction } from "react"
import { CustomInput } from "../../../../ui/CustomInput"
import { PriceCategory, PriceType } from "../../types"
import styles from "./index.module.css"
import { PriceSelect } from "../../ui/PriceTypeSelect"
import { categoryOptions, typeOptions } from "../../utils/fields"

export interface PriceCardFormData {
    title: string
    amount: number
    description: string
    type: PriceType
    category: PriceCategory
}

interface PriceCardFormProps {
    form: PriceCardFormData
    setForm: Dispatch<SetStateAction<PriceCardFormData>>
}

export const PriceCardForm = ({form, setForm}: PriceCardFormProps) => {

    return (
        <div className={styles.form}>
            <CustomInput
                label="Title"
                value={form.title}
                onChange={(e) => setForm((prev) => ({...prev, title: e.target.value}))}
                placeholder="Enter title"
            />

            <CustomInput
                label="Amount"
                value={form.amount}
                onChange={(e) => setForm((prev) => ({...prev, amount: Number(e.target.value)}))}
                placeholder="Enter amount"
                type="number"
                isYellow
            />

            <CustomInput
                label="Description"
                value={form.description}
                onChange={(e) => setForm((prev) => ({...prev, description: e.target.value}))}
                placeholder="Enter description"
            />

            <PriceSelect
                label="Type"
                options={typeOptions}
                type={form.type}
                onChange={(type) => {
                    setForm(prev => ({...prev, type: type}))
                }}
            />

             <PriceSelect
                label="Category"
                options={categoryOptions}
                type={form.category}
                onChange={(category) => {
                    setForm(prev => ({...prev, category: category}))
                }}
            />
        </div>
    )
}
