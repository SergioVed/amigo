import styles from "./index.module.css"
import { Price, PriceActionTypes } from "../../store/types"
import { CardActions } from "../../../../ui/CardActionButtons"
import { useState } from "react"
import { DeletePopup } from "../../../../ui/DeletePopup"
import { PriceCardForm, PriceCardFormData } from "./priceCardForm"
import { PriceCardView } from "./priceCardVeiw"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { deletePrice, updatePrice } from "../../store/actions"
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
    })

    function cancel() {
        setIsEditing(false)
        setForm({
            title: price.title,
            amount: price.amount,
            description: price.description,
            type: price.type,
        })
    }

    function saveUpdatedPrice(form: PriceForm, id: number) {
        dispatch(updatePrice(form, id))
        setIsEditing(false)
    }

    function handleDeletePrice(id: number) {
        dispatch(deletePrice(id))
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
