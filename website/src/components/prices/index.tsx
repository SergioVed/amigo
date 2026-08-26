import { useEffect, useState } from "react"
import styles from "./index.module.css"
import type { PriceProps, PriceType } from "./types"
import { getPrices } from "../../api"
import { OptionBtn } from "../../ui/OptionBtn"
import { motion } from "motion/react"

const priceCardAnimation = {
    initial: { y: 80, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.25 },
    transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 16
    }
}

const priceTypeOptions: { label: string; value: PriceType }[] = [
    { label: "Індивідуальні", value: "individual" },
    { label: "Парні", value: "pair" },
]

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
        <section className={styles.outer} id="prices">
            <section className={styles.container}>

                <header className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        ЦІНИ
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    >
                        <OptionBtn
                            options={priceTypeOptions}
                            value={selectedType}
                            onChange={handleTypeChange}
                            ariaLabel="Тип уроків"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    >
                        Урок триває 55 хвилин • Ціни на уроки англійської та іспанської — однакові
                    </motion.p>
                </header>


                {loading && <p className={styles.status}>Завантажуємо ціни…</p>}
                {error && <p className={styles.status}>{error}</p>}

                {!loading && !error && (
                    <div className={styles.price_box}>
                        <div className={styles.introductory}>
                            {introductoryPrices.map((price, index) => (
                                <motion.article
                                    className={styles.introductory_card}
                                    key={`${price.category}-${index}`}
                                    {...priceCardAnimation}
                                >
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                    >
                                        {price.title}
                                    </motion.h3>
                                    <p className={styles.amount}>₴{formatAmount(price.amount)}</p>
                                </motion.article>
                            ))}
                        </div>

                        {mariPrice && (
                            <motion.article className={styles.mari_card} {...priceCardAnimation}>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    {mariPrice.title}
                                </motion.h3>
                                <p className={styles.amount}>₴{formatAmount(mariPrice.amount)}</p>
                                <p className={styles.description}>{mariPrice.description}</p>
                            </motion.article>
                        )}

                        {subscriptions.length > 0 && (
                            <motion.section {...priceCardAnimation} className={styles.subscriptions}>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    Абонементи
                                </motion.h3>
                                <div className={styles.subscription_list}>
                                    {subscriptions.map((price, index) => (
                                        <motion.article
                                            className={styles.subscription_card}
                                            key={`${price.title}-${index}`}
                                            {...priceCardAnimation}
                                        >
                                            <h4>{price.title}</h4>
                                            <p className={styles.subscription_amount}>₴{formatAmount(price.amount)}</p>
                                            <p className={styles.description}>{price.description}</p>
                                        </motion.article>
                                    ))}
                                </div>
                            </motion.section>
                        )}
                    </div>
                )}
            </section>
        </section>
    )
}
