import { Dispatch } from "redux"
import { PriceCardFormData } from "../../components/PriceCard/priceCardForm"
import { selectOptions } from "../../utils/fields"
import styles from "./index.module.css"
import { SetStateAction } from "react"
import { PriceType } from "../../types"

interface PriceTypeSelectProps {
    type: PriceType
    onChange: (value: PriceType) => void
}

export const PriceTypeSelect = ({type, onChange}: PriceTypeSelectProps) => {
    return (
        <div className={styles.selectField}>
            <label className={styles.selectLabel}>Type</label>
            <select
                className={styles.select}
                value={type}
                onChange={(e) => onChange(e.target.value as PriceType)}
            >
                {selectOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>

    )
}
