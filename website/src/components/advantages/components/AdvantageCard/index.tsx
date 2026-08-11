import type { AdvantageCardProps } from "../../types"
import styles from "./index.module.css"
import { motion } from "motion/react"

export const AdvantageCard = ({
    index,
    title,
    description,
    imageSrc,
    imageAlt = "",
}: AdvantageCardProps) => {
    return (
        <article className={styles.card}>
            <img
                className={styles.image}
                src={imageSrc}
                alt={imageAlt}
            />

            <div className={styles.content}>
                <span className={styles.index}>[ {index} ]</span>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {title}
                </motion.h3>
                <p>{description}</p>
            </div>
        </article>
    )
}
