import styles from "./index.module.css"

interface CustomCardInputProps {
    placeholder: string,
    value: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isYellow?: boolean
}

export const CardInput = ({ placeholder, onChange, value, label, isYellow }: CustomCardInputProps) => {

    return (
        <div className={styles.container}>
            <label className={styles.label} style={isYellow ? {color: "#f6bf00"} : {}}>
                {label}
            </label>
            <input
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>

    )
}