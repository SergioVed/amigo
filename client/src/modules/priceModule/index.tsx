import { useEffect, useState } from "react"
import { PriceList } from "./components/PriceList"
import styles from "./index.module.css"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { fetchPrices } from "./store/actions"
import { PriceToolBar } from "./components/PriceToolBar"
import { CreatePriceForm, PriceType } from "./types"
import { filterPrices } from "./utils/filterPrices"
import { AddFormPopup } from "../../ui/AddFormPopup"
import { createPriceForm } from "./utils/createPriceForm"
import { fields } from "./utils/fields"

export const PriceModule = () => {
    const { prices, error, loading, isFetched } = useTypedSelector(state => state.prices)
    const dispatch = useAppDispatch()

    const [value, setValue] = useState<PriceType>("pair")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [form, setForm] = useState<CreatePriceForm>(createPriceForm)

    useEffect(() => {
        if (!isFetched && !loading) {
            dispatch(fetchPrices())
        }
    }, [prices, isFetched])

    return (
        <div className={styles.wrapper}>
            <PriceToolBar
                setisOpen={setIsOpen}
                value={value}
                setValue={setValue}
            />

            {isOpen && <AddFormPopup
                title="Add Price"
                open={isOpen}
                setOpen={setIsOpen}
                form={form}
                setForm={setForm}
                fields={fields}
                onSubmit={() => {
                    setIsOpen(false)
                }}
            />}

            <PriceList prices={filterPrices(value, prices)} />
        </div>

    )
}
