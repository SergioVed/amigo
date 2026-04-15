import styles from "./index.module.css"

interface CustomButtonProps {
    text: string,
    onClick: () => void
}

export const CustomButton = ({text, onClick}: CustomButtonProps) => {

    return (
        <button
            className={styles.submitButton}
            type="button"
            onClick={onClick}
        >
            {text}
        </button>
    )
}