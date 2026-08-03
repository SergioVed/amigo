import styles from "./index.module.css"
import type {PriceType} from "../../types.ts"
import { PriceTypes } from "../../utils/PriceTypes.ts"

interface PriceTypeToogleBtnProps {
    value: "individual" | "pair"
    onChange: (value: PriceType) => void
}

export const PriceTypeToogleBtn = ({value, onChange}: PriceTypeToogleBtnProps) => {
    
    return (
        <div className={styles.container}>
            {PriceTypes.map((type) => {
                const isActive = type === value;
                const label = type === "individual" ? "Індивідуальні" : "Парні";

                return (
                    <button
                        key={type}
                        type="button"
                        className={`${styles.button} ${isActive ? styles.active : ""}`}
                        onClick={() => onChange(type)}
                        aria-pressed={isActive}
                    >
                        {label}
                    </button>
                )
            })}
        </div>
    )
}
