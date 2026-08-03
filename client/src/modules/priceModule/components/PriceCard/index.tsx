import styles from "./index.module.css"
import { Price, PriceActionTypes } from "../../store/types"
import { CardActions } from "../../../../components/CardActionButtons"
import { useState } from "react"
import { DeletePopup } from "../../../../components/DeletePopup"
import { PriceCardForm, PriceCardFormData } from "./priceCardForm"
import { PriceCardView } from "./priceCardView"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { deletePriceAction, updatePriceAction } from "../../store/actions"
import { PriceForm } from "../../types"

interface PriceCardProps {
    price: Price
}

export const PriceCard = ({price}: PriceCardProps) => {
    const dispatch = useAppDispatch()

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
    const [form, setForm] = useState<PriceCardFormData>({
        title: price.title,
        amount: price.amount,
        description: price.description,
        type: price.type,
        category: price.category
    })

    function cancel() {
        setIsEditing(false)
        setForm({
            title: price.title,
            amount: price.amount,
            description: price.description,
            type: price.type,
            category: price.category
        })
    }

    function saveUpdatedPrice(form: PriceForm, id: number) {

        let formToUpdate: Partial<PriceForm> = {};

        if (form.amount !== price.amount) {
            formToUpdate.amount = form.amount;
        }

        if (form.description !== price.description) {
            formToUpdate.description = form.description
        }

        if (form.title !== price.title) {
            formToUpdate.title = form.title
        }

        if (form.type !== price.type) {
            formToUpdate.type = form.type
        }

        if (form.category !== price.category){
            formToUpdate.category = form.category
        }

        dispatch(updatePriceAction(formToUpdate, id))
        setIsEditing(false)
    }

    function handleDeletePrice(id: number) {
        dispatch(deletePriceAction(id))
        setVisible(false)
    }

    return (
        <div className={styles.card}>
            <CardActions
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                setPopupVisible={setVisible}
                onSave={() => saveUpdatedPrice(form, price.id)}
                onCancel={cancel}
                className={styles.actions}
            />

            <DeletePopup onDelete={() => handleDeletePrice(price.id)} setVisible={setVisible} visible={visible}/>
            
            {isEditing 
                ? <PriceCardForm form={form} setForm={setForm}/>
                : <PriceCardView price={price}/>
            }

        </div>
    )
}
