import styles from "./index.module.css"
import { Price } from "../../store/types"

interface PriceCardViewProps {
    price: Price
}

export const PriceCardView = ({price}: PriceCardViewProps) => {

    return (
        <>

            <h2 className={styles.title}>{price.title}</h2>
            <p className={styles.description}>{price.description}</p>

            <div className={styles.divider}/>

            <span className={styles.amount}>${price.amount}</span>
        </>
    )
}