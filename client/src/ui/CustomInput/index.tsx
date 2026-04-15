import { platform } from "os"
import styles from "./index.module.css"

interface CustomInputProps {
    label: string,
    placeholder: string,
    value: string,
    id: string,
    isHidden?: boolean,
    setVelue: (value: string) => void
}

export const CustomInput = ({value, setVelue, placeholder, label, isHidden, id}: CustomInputProps) => {

    return (
        <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input
                className={styles.input}
                id={id}
                type={isHidden ? "password" : "email"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setVelue(e.target.value)}
            />
        </div>
    )
}