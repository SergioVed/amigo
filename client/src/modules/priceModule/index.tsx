import { useEffect, useState } from "react"
import { PriceList } from "./components/PriceList"
import styles from "./index.module.css"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { addPrice, fetchPrices } from "./store/actions"
import { PriceToolBar } from "./components/PriceToolBar"
import { CreatePriceForm, PriceType } from "./types"
import { filterPrices } from "./utils/filterPrices"
import { AddFormPopup } from "../../ui/AddFormPopup"
import { createPriceForm } from "./utils/createPriceForm"
import { fields, selectOptions } from "./utils/fields"
import { PriceTypeSelect } from "./ui/PriceTypeSelect"

export const PriceModule = () => {
    const { prices, error, loading, isFetched } = useTypedSelector(state => state.prices)
    const dispatch = useAppDispatch()

    const [value, setValue] = useState<PriceType>("pair")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [form, setForm] = useState<CreatePriceForm>(createPriceForm)

    console.log(form)

    useEffect(() => {
        if (!isFetched && !loading) {
            dispatch(fetchPrices())
        }
    }, [prices, isFetched])

    function handleAddPrice(form: CreatePriceForm) {
        dispatch(addPrice(form))
    }

    return (
        <div className={styles.wrapper}>
            <PriceToolBar
                setisOpen={setIsOpen}
                value={value}
                setValue={setValue}
            />

            {error && <p className={styles.error}>{error}</p>}

            {isOpen && <AddFormPopup
                title="Add Price"
                open={isOpen}
                setOpen={setIsOpen}
                form={form}
                setForm={setForm}
                fields={fields}
                onSubmit={() => {
                    handleAddPrice(form)
                    setIsOpen(false)
                }}>
                    <PriceTypeSelect
                        type={form.type}
                        onChange={(type) => {
                            setForm(prev => ({...prev, type: type}))
                        }}
                    />
                </AddFormPopup>
                
                }

            <PriceList prices={filterPrices(value, prices)} />
        </div>

    )
}
