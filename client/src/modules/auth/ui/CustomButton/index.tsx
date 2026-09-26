import styles from "./index.module.css"

interface CustomButtonProps {
    disabled?: boolean,
    text: string,
    onClick: () => void
}

export const CustomButton = ({text, onClick, disabled}: CustomButtonProps) => {

    return (
        <button
            className={styles.submitButton}
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}