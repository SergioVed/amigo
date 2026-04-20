import { setConstantValue } from "typescript"
import styles from "./index.module.css"

interface TeacherCardActionsProps {
    isEditing: boolean,
    setIsEditing: (value: boolean) => void
    setPopupVisible: (value: boolean) => void
    onSave: () => void
    onCancel: () => void
}

export const TeacherCardActions = ({isEditing, setIsEditing, setPopupVisible, onSave, onCancel}: TeacherCardActionsProps) => {
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
            : <div className={styles.actions}>
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