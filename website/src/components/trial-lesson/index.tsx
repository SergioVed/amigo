import styles from "./index.module.css"
import { stickers } from "./utils/stickers"
import { motion } from "motion/react"

export const TrialLesson = () => {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <motion.h2
                        aria-label="Твоя викладачка вже чекає на тебе"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className={styles.mobileTitle} aria-hidden="true">
                            Твоя<br />викладачка<br />вже чекає<br />на тебе
                        </span>
                        <span className={styles.desktopTitle} aria-hidden="true">
                            Твоя викладачка<br />вже чекає на тебе
                        </span>
                    </motion.h2>

                    <div className={styles.action}>
                        <p>Тицьни, щоб познайомитися</p>
                        <button type="button">Записатися на пробне заняття</button>
                    </div>
                </div>

                <ul className={styles.stickers} aria-hidden="true">
                    {stickers.map(({ text, className }) => (
                        <motion.li
                            className={`${styles.sticker} ${styles[className]}`}
                            key={className}
                            animate={{
                                "--bounce-y": ["0px", "-8px", "0px"],
                                "--bounce-scale": [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 4,
                                ease: "easeInOut"
                            }}
                        >
                            {text}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
