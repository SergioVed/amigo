import { ChangeEvent } from "react"
import styles from "./index.module.css"

interface AddImageInputProps {
    handleSelectFile: (e: ChangeEvent<HTMLInputElement>) => void
}

export const AddImageInput = ({handleSelectFile}: AddImageInputProps) => {

    return (
        <label className={styles.fileField}>
            <span className={styles.editLabel}>Avatar</span>
            <input
                className={styles.fileInput}
                type="file"
                accept="image/*"
                onChange={handleSelectFile}
            />
        </label>
    )

}