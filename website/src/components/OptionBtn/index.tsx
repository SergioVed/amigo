import styles from "./index.module.css"

export interface Option<T extends string> {
    label: string
    value: T
}

interface OptionBtnProps<T extends string> {
    options: readonly Option<T>[]
    value: T
    onChange: (value: T) => void
    ariaLabel: string
}

export const OptionBtn = <T extends string>({
    options,
    value,
    onChange,
    ariaLabel,
}: OptionBtnProps<T>) => {
    return (
        <div className={styles.container} role="group" aria-label={ariaLabel}>
            {options.map((option) => {
                const isActive = option.value === value

                return (
                    <button
                        key={option.value}
                        type="button"
                        className={`${styles.button} ${isActive ? styles.active : ""}`}
                        onClick={() => onChange(option.value)}
                        aria-pressed={isActive}
                    >
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}
