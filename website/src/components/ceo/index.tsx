import styles from "./index.module.css"
import CeoImg from "../../assets/ceo/photo-frame.png"
import { useEffect, useState } from "react"
import type { CeoInfo } from "./types"
import { getCeo } from "../../api"
import { motion, stagger } from "motion/react"

const infoVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.16)
        }
    }
}

const infoBlockVariants = {
    hidden: {
        y: 80,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 16
        }
    }
}

const descriptionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.2)
        }
    }
}

const descriptionItemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" as const }
    }
}

const descriptionHeadingVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" as const }
    }
}

export const Ceo = () => {
    const [info, setInfo] = useState<CeoInfo | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadCeoInfo = async () => {
            try {
                const ceo = await getCeo()
                setInfo(ceo)
            } catch {
                setError("Не вдалося завантажити інформацію")
            } finally {
                setLoading(false)
            }
        }

        void loadCeoInfo()
    }, [])

    return (
        <div className={styles.outer} id="ceo">
            <section className={styles.container}>
                <motion.img
                    className={styles.photoFrame}
                    src={info?.image ? info.image : CeoImg}
                    alt=""
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{
                        x: [-120, 18, 0],
                        opacity: [0, 1, 1]
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 1.1,
                        times: [0, 0.8, 1],
                        ease: "easeOut"
                    }}
                />

                <motion.div
                    className={styles.description}
                    variants={descriptionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {loading && <p role="status">Завантаження...</p>}
                    {error && <p role="alert">{error}</p>}

                    <motion.h2 variants={descriptionHeadingVariants}>
                        {info
                            ? `Привіт! Я – ${info.name}, засновниця школи AMIGO`
                            : "Привіт! Я – Марі, засновниця школи AMIGO"}
                    </motion.h2>
                    <motion.p variants={descriptionItemVariants}>
                        {info?.description
                            ?? "7 років життя в Іспанії навчили мене однієї простої речі: мова змінює життя. Саме тому я створила AMIGO — школу, де кожен студент знаходить свою людину для вивчення мови."}
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.info}
                    variants={infoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <motion.div className={styles.infoBlock} variants={infoBlockVariants}>
                        <strong>5</strong>
                        <span>років навчаємо мовам</span>
                    </motion.div>

                    <motion.div className={styles.infoBlock} variants={infoBlockVariants}>
                        <strong>3000+</strong>
                        <span>студентів пройшли навчання</span>
                    </motion.div>

                    <motion.div className={styles.infoBlock} variants={infoBlockVariants}>
                        <strong>90+</strong>
                        <span>студентів переїхали до Іспанії</span>
                    </motion.div>
                </motion.div>
            </section>
        </div>

    )
}
