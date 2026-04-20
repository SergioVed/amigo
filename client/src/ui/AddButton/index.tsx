import styles from "./index.module.css"

interface AddButtonProps {
    text: string,
    onClick: () => void
}

export const AddButton = ({text, onClick}: AddButtonProps) => {

    return (
        <button 
            onClick={onClick}
            className={styles.button}
        >
            {text}
        </button>
    )
}