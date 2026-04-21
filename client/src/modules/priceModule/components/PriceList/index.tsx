import { Price } from "../../store/types"
import { PriceCard } from "../PriceCard"
import styles from "./index.module.css"

interface PriceListProps {
    prices: Price[]
}

export const PriceList = ({prices}: PriceListProps) => {

    return (
        <div className={styles.container}>
            {prices.map(price => (
                <PriceCard price={price}/>
            ))}
        </div>
    )
}