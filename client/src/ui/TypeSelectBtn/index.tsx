import styles from "./index.module.css"

interface TypeSelectBtnProps<T> {
    label: string,
    value: T
    onChange: (value: T) => void,
    options: Array<{
        title: string,
        value: T
    }>
}

export const TypeSelectBtn = <T extends string>({value, onChange, label, options}: TypeSelectBtnProps<T>) => {
    return (
        <div className={styles.selectField}>
            <label className={styles.selectLabel}>{label}</label>
            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange(e.target.value as T)}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </div>

    )
}
