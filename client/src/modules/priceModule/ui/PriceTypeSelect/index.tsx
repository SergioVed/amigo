import styles from "./index.module.css"

interface PriceSelectProps<T> {
    label: string,
    type: T
    onChange: (value: T) => void,
    options: Array<{
        name: string,
        value: string
    }>
}

export const PriceSelect = <T extends string>({type, onChange, label, options}: PriceSelectProps<T>) => {
    return (
        <div className={styles.selectField}>
            <label className={styles.selectLabel}>{label}</label>
            <select
                className={styles.select}
                value={type}
                onChange={(e) => onChange(e.target.value as T)}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>

    )
}
