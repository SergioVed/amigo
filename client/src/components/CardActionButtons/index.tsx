import { setConstantValue } from "typescript"
import styles from "./index.module.css"

interface CardActionsProps {
    isEditing: boolean,
    setIsEditing: (value: boolean) => void
    setPopupVisible: (value: boolean) => void
    onSave: () => void
    onCancel: () => void
    className?: string
}

export const CardActions = ({isEditing, setIsEditing, setPopupVisible, onSave, onCancel, className}: CardActionsProps) => {
    return (
        <>
            {isEditing 
            ? <div className={styles.submitContainer}>
                <button 
                    className={`${styles.actionButton} ${styles.saveBtn}`}
                    onClick={onSave}    
                >
                    Save
                </button>
                <button 
                    className={`${styles.actionButton} ${styles.cancelBtn}`}
                    onClick={onCancel}    
                >
                    Cancel
                </button>
            </div>
            : <div className={`${styles.actions} ${className || ""}`}>
                    <button
                        onClick={() => setIsEditing(true)}
                        className={`${styles.actionButton} ${styles.editButton}`}
                        type="button"
                    >
                        Edit
                    </button>
                    <button
                        className={`${styles.actionButton} ${styles.deleteButton}`} 
                        type="button"
                        onClick={() => setPopupVisible(true)}
                    >
                        delete
                    </button>
                </div>
            }
        </>

    )
}
