import styles from "./index.module.css"
import CeoImg from "../../assets/ceo/photo-frame.png"
import { useEffect, useState } from "react"
import type { CeoInfo } from "./types"
import { getCeo } from "../../api"

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
                <img className={styles.photoFrame} src={CeoImg} alt="" />

                <div className={styles.description}>
                    {loading && <p role="status">Завантаження...</p>}
                    {error && <p role="alert">{error}</p>}

                    <h2>
                        {info
                            ? `Привіт! Я – ${info.name}, засновниця школи AMIGO`
                            : "Привіт! Я – Марі, засновниця школи AMIGO"}
                    </h2>
                    <p>
                        {info?.description
                            ?? "7 років життя в Іспанії навчили мене однієї простої речі: мова змінює життя. Саме тому я створила AMIGO — школу, де кожен студент знаходить свою людину для вивчення мови."}
                    </p>
                </div>

                <div className={styles.info}>
                    <div className={styles.infoBlock}>
                        <strong>5</strong>
                        <span>років навчаємо мовам</span>
                    </div>

                    <div className={styles.infoBlock}>
                        <strong>3000+</strong>
                        <span>студентів пройшли навчання</span>
                    </div>

                    <div className={styles.infoBlock}>
                        <strong>90+</strong>
                        <span>студентів переїхали до Іспанії</span>
                    </div>
                </div>
            </section>
        </div>

    )
}
