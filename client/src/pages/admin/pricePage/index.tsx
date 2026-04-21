import { PriceModule } from "../../../modules/priceModule"
import { PriceList } from "../../../modules/priceModule/components/PriceList"
import styles from "./index.module.css"

export const PricePage = () => {
    return (
        <div className={styles.page}>
            <PriceModule/>
        </div>
    )
}