import { AddButton } from "../../ui/AddButton"
import styles from "./index.module.css"
import { SearchInput } from "../../ui/SearchInput"

interface ToolBarProps {
    value: string,
    addBtnText: string,
    setValue: (value: string) => void
    setOpen: (value: boolean) => void
}

export const ToolBar = ({ value, setValue, setOpen, addBtnText }: ToolBarProps) => {

    return (
        <div className={styles.actionsContainer}>
            <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <AddButton text={addBtnText} onClick={() => setOpen(true)} />
        </div>
    )
}