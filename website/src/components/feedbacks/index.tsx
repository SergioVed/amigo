import styles from "./index.module.css"
import stickers from "../../assets/feedbacks/stickers.png"
import { Feedback } from "./components/Feedback"
import type { FeedbackProps } from "./types"
import { useEffect, useState } from "react"
import { getFeedbacks } from "../../api"
import { motion, stagger } from "motion/react"

const feedbackListVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.18)
        }
    }
}

const feedbackItemVariants = {
    hidden: {
        y: -120,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 110,
            damping: 14
        }
    }
}

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
                    <motion.ul
                        className={styles.list}
                        variants={feedbackListVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        {feedbacks.map((feedback, index) => (
                            <motion.li
                                className={styles.item}
                                key={`${feedback.name}-${index}`}
                                variants={feedbackItemVariants}
                            >
                                <Feedback {...feedback}/>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </section>
    )

}
