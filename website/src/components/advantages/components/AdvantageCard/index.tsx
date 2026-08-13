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
                <svg
                    className={styles.shape}
                    viewBox="0 0 600 450"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M44 2H165C193 2 194 50 235 50H554C579 50 598 70 598 96V404C598 429 579 448 554 448H44C19 448 2 429 2 404V46C2 21 19 2 44 2Z"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
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
