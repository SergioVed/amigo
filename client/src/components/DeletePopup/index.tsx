import { createPortal } from "react-dom"
import styles from "./index.module.css"

interface DeletePopupProps {
    visible: boolean
    setVisible: (value: boolean) => void
    onDelete: () => void
}

export const DeletePopup = ({onDelete, setVisible, visible}: DeletePopupProps) => {
    return createPortal(
        <div className={styles.overlay} style={visible ? {display: "flex"} : {display: "none"}}>
            <div className={styles.popup} role="dialog" aria-modal="true" aria-labelledby="delete-popup-title">
                <p className={styles.text} id="delete-popup-title">
                    Are you sure you want to delete?
                </p>

                <div className={styles.actions}>
                    <button className={styles.cancelButton} type="button" onClick={onDelete}>
                        Delete
                    </button>

                    <button className={styles.deleteButton} type="button" onClick={() => setVisible(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}
