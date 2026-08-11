import styles from "./index.module.css"
import Sticker from "../../assets/hero/sticker-bg.svg"
import Stickers from "../../assets/hero/stickers.png"
import { motion } from "motion/react"

export const Hero = () => {

    return (
        <section className={styles.container}>
            <div className={styles.inner}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <span>Онлайн-</span>
                    <span>школа</span>
                    <span>іноземних</span>
                    <span className={styles.lastLine}>
                        мов
                        <img src={Sticker} alt="" className={styles.sticker} />
                    </span>
                </motion.h1>

                <p className={styles.subtitle}>Ми - йога для твого мозку</p>

                <button className={styles.btn}>
                    Записатися на пробне заняття
                </button>

                <img src={Stickers} alt="" className={styles.stickers}/>
            </div>
        </section>
    )

}
