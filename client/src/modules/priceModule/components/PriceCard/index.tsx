import styles from "./index.module.css"
import { Price } from "../../store/types"
import { CardActions } from "../../../../ui/CardActionButtons"
import { useState } from "react"
import { DeletePopup } from "../../../../ui/DeletePopup"
import { PriceCardForm, PriceCardFormData } from "./priceCardForm"
import { PriceCardView } from "./priceCardVeiw"

interface PriceCardProps {
    price: Price
}

export const PriceCard = ({price}: PriceCardProps) => {
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

    return (
        <div className={styles.card}>
            <CardActions
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                setPopupVisible={setVisible}
                onSave={() => setIsEditing(false)}
                onCancel={cancel}
                className={styles.actions}
            />

            <DeletePopup onDelete={() => null} setVisible={setVisible} visible={visible}/>
            
            {isEditing 
                ? <PriceCardForm form={form} setForm={setForm}/>
                : <PriceCardView price={price}/>
            }

        </div>
    )
}
