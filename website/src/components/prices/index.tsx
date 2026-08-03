import { useEffect, useState } from "react"
import styles from "./index.module.css"
import type { PriceProps, PriceType } from "./types"
import { getPrices } from "../../api"
import { PriceTypeToogleBtn } from "./components/PriceTypeToogleBtn"

export const Prices = () => {
    const [prices, setPrices] = useState<PriceProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedType, setSelectedType] = useState<"individual" | "pair">("individual")

    useEffect(() => {
        const loadPrices = async () => {
            try {
                const res = await getPrices()
                setPrices(res)
            } catch {
                setError("Не вдалося завантажити ціни")
            } finally {
                setLoading(false)
            }
        }

        loadPrices()
    }, [])

    const formatAmount = (amount: number) => new Intl.NumberFormat("uk-UA").format(amount)

    const selectedPrices = prices.filter(({ type }) => type === selectedType)
    const introductoryPrices = ["trial", "single"].flatMap(category =>
        selectedPrices.filter(price => price.category === category)
    )
    const mariPrice = selectedPrices.find(({ category }) => category === "with_mari")
    const subscriptions = selectedPrices.filter(({ category }) => category === "subscription")

    const handleTypeChange = (type: PriceType) => {
        if (type === "individual" || type === "pair") {
            setSelectedType(type)
        }
    }

    return (
        <section className={styles.outer}>
            <section className={styles.container}>

                <header className={styles.header}>
                    <h2>ЦІНИ</h2>

                    <PriceTypeToogleBtn value={selectedType} onChange={handleTypeChange} />

                    <p>Урок триває 55 хвилин • Ціни на уроки англійської та іспанської — однакові</p>
                </header>


                {loading && <p className={styles.status}>Завантажуємо ціни…</p>}
                {error && <p className={styles.status}>{error}</p>}

                {!loading && !error && (
                    <div className={styles.price_box}>
                        <div className={styles.introductory}>
                            {introductoryPrices.map((price, index) => (
                                <article className={styles.introductory_card} key={`${price.category}-${index}`}>
                                    <h3>{price.title}</h3>
                                    <p className={styles.amount}>₴{formatAmount(price.amount)}</p>
                                </article>
                            ))}
                        </div>

                        {mariPrice && (
                            <article className={styles.mari_card}>
                                <h3>{mariPrice.title}</h3>
                                <p className={styles.amount}>₴{formatAmount(mariPrice.amount)}</p>
                                <p className={styles.description}>{mariPrice.description}</p>
                            </article>
                        )}

                        {subscriptions.length > 0 && (
                            <section className={styles.subscriptions}>
                                <h3>Абонементи</h3>
                                <div className={styles.subscription_list}>
                                    {subscriptions.map((price, index) => (
                                        <article className={styles.subscription_card} key={`${price.title}-${index}`}>
                                            <h4>{price.title}</h4>
                                            <p className={styles.subscription_amount}>₴{formatAmount(price.amount)}</p>
                                            <p className={styles.description}>{price.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                )}
            </section>
        </section>
    )
}
