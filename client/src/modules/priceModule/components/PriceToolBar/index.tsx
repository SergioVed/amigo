import { AddButton } from "../../../../ui/AddButton"
import { PriceType } from "../../types"
import { PriceTypeToogleBtn } from "../../ui/PriceTypeToogleBtn"
import styles from "./index.module.css"

interface PriceToolBarProps {
    value: PriceType,
    setValue: (value: PriceType) => void
    setisOpen: (value: boolean) => void
}

export const PriceToolBar = ({value, setValue, setisOpen}: PriceToolBarProps) => {

    return (
        <div className={styles.container}>

            <PriceTypeToogleBtn
                value={value}
                onChange={setValue}
            />

            <AddButton 
                text="Add price" 
                onClick={() => setisOpen(true)}            
            />
        </div>
    )
}