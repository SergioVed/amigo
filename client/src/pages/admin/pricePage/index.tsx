import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { AddFormPopup } from "../../../components/AddFormPopup"
import { addPriceAction,
    fetchPricesAction, 
    PriceToolBar,
    PriceForm,
    PriceType,
    createPriceForm,
    PriceList,
    filterPrices,
    fields,
    typeOptions,
    categoryOptions
} from "../../../modules/priceModule"
import { TypeSelectBtn } from "../../../ui/TypeSelectBtn"

export const PricePage = () => {

    const [value, setValue] = useState<PriceType>("individual")
    const [isAddPopupOpen, setIsAddPopupOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const { prices, loading, isFetched } = useTypedSelector(state => state.prices)
    const [form, setForm] = useState<PriceForm>(createPriceForm)

    useEffect(() => {
        if (!loading && !isFetched) {
            dispatch(fetchPricesAction())
        }
    }, [prices])

    function handleAddPrice(form: PriceForm) {
        dispatch(addPriceAction(form))
        setIsAddPopupOpen(false)
    }

    return (
        <div className={styles.page}>

            <PriceToolBar
                value={value}
                setValue={setValue}
                setIsOpen={setIsAddPopupOpen}
            />

            <PriceList
                prices={filterPrices(prices, value)}
            />

            {isAddPopupOpen && <AddFormPopup
                title="Add Price"
                open={isAddPopupOpen}
                setOpen={setIsAddPopupOpen}
                form={form}
                setForm={setForm}
                fields={fields}
                onSubmit={() => {
                    handleAddPrice(form)
                }}>
                <TypeSelectBtn
                    label="Type"
                    options={typeOptions}
                    value={form.type}
                    onChange={(type) => {
                        setForm(prev => ({ ...prev, type: type }))
                    }}
                />

                <TypeSelectBtn
                    label="Category"
                    options={categoryOptions}
                    value={form.category}
                    onChange={(category) => {
                        setForm(prev => ({ ...prev, category: category }))
                    }}
                />
            </AddFormPopup>}

        </div>
    )
}