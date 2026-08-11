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
                        <span className={styles.sticker}>
                            <motion.img
                                src={Sticker}
                                alt=""
                                className={styles.stickerImage}
                                animate={{
                                    y: [0, -8, 0],
                                    scale: [1, 1.08, 1]
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.2,
                                    ease: "easeInOut"
                                }}
                            />
                        </span>
                    </span>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                >
                    Ми - йога для твого мозку
                </motion.p>

                <motion.button
                    className={styles.btn}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                >
                    Записатися на пробне заняття
                </motion.button>

                <img src={Stickers} alt="" className={styles.stickers}/>
            </div>
        </section>
    )

}
