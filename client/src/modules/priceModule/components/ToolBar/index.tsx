import { AddButton } from "../../../../ui/AddButton"
import { SearchInput } from "../../../../ui/SearchInput"
import styles from "./index.module.css"

interface ToolBarProps {
    value: string,
    setValue: (value: string) => void
    setOpen: (value: boolean) => void
}

export const ToolBar = ({ value, setValue, setOpen }: ToolBarProps) => {

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