import { useEffect, useState } from "react"
import styles from "./index.module.css"
import type { PriceProps } from "./types"
import { getPrices } from "../../api"

export const Prices = () => {

    const [prices, setPrices] = useState<PriceProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadFeedbacks = async () => {
            try {
                const res = await getPrices()
                setPrices(res)
            } catch {
                setError("Не вдалося завантажити відгуки")
            } finally {
                setLoading(false)
            }
        }

        loadFeedbacks()
    }, [])

    return (
        <div className={styles.outer}>
            <section className={styles.container}>
                <h2>ЦІНИ</h2>

                <p>Урок триває 55 хвилин • Ціни на уроки англійської та іспанської — однакові</p>

                <div className={styles.price_box}>

                </div>
            </section>
        </div>

    )

}