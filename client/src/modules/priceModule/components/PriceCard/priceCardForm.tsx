
import { Dispatch, SetStateAction } from "react"
import { CustomInput } from "../../../../ui/CustomInput"
import { PriceType } from "../../types"
import styles from "./index.module.css"
import { PriceTypeSelect } from "../../ui/PriceTypeSelect"

export interface PriceCardFormData {
    title: string
    amount: number
    description: string
    type: PriceType
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

            <PriceTypeSelect
                type={form.type}
                onChange={(type) => {
                    setForm(prev => ({...prev, type: type}))
                }}
            />
        </div>
    )
}
