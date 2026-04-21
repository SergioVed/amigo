import styles from "./index.module.css"

export interface CustomInputProps {
    placeholder: string,
    value: string | number,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isYellow?: boolean
    type?: string
}

export const CustomInput = ({ placeholder, onChange, value, label, isYellow, type }: CustomInputProps) => {

    return (
        <div className={styles.container}>
            <label className={styles.label} style={isYellow ? {color: "#f6bf00"} : {}}>
                {label}
            </label>
            <input
                className={styles.input}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>

    )
}
