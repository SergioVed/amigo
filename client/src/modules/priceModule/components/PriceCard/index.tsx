import styles from "./index.module.css"
import { Price } from "../../store/types"

interface PriceCardProps {
    price: Price & {
        features?: string[]
    }
}

export const PriceCard = ({ price }: PriceCardProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{price.title}</h2>
            <p className={styles.description}>{price.description}</p>

            <ul className={styles.featureList}>
                {price.features?.map((feature) => (
                    <li className={styles.featureItem} key={feature}>
                        <span className={styles.checkIcon}/>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className={styles.divider}/>

            <span className={styles.amount}>${price.amount}</span>
        </div>
    )
}
