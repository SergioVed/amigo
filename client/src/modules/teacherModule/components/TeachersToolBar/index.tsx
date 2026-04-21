import styles from "./index.module.css"
import { AddButton } from "../../../../ui/AddButton"
import { SearchInput } from "../../ui/SearchInput"

interface TeachersToolBarProps {
    value: string,
    setValue: (value: string) => void
    setOpen: (value: boolean) => void
}

export const TeachersToolBar = ({ value, setValue, setOpen }: TeachersToolBarProps) => {

    return (
        <div className={styles.actionsContainer}>
            <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <AddButton text="Add teacher" onClick={() => setOpen(true)} />
        </div>
    )
}