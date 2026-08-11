import styles from "./index.module.css"
import stickers from "../../assets/feedbacks/stickers.png"
import { Feedback } from "./components/Feedback"
import type { FeedbackProps } from "./types"
import { useEffect, useState } from "react"
import { getFeedbacks } from "../../api"

export const Feedbacks = () => {

    const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadFeedbacks = async () => {
            try{
                const res = await getFeedbacks()
                setFeedbacks(res)
            }catch {
                setError("Не вдалося завантажити відгуки")
            }finally{
                setLoading(false)
            }
        }

        loadFeedbacks()
    }, [])

    return (
        <section className={styles.container} id="feedbacks" aria-label="Відгуки студентів">
            <div className={styles.notebook}>
                <img className={styles.desktopStickers} src={stickers} alt="" aria-hidden="true" />

                {loading && <p className={styles.status}>Завантажуємо відгуки…</p>}
                {error && <p className={styles.status}>{error}</p>}

                {!loading && !error && (
                    <ul className={styles.list}>
                        {feedbacks.map((feedback, index) => (
                            <li className={styles.item} key={`${feedback.name}-${index}`}>
                                <Feedback {...feedback}/>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )

}
