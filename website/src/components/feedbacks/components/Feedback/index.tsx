import type { FeedbackProps } from "../../types"
import { useId, useState } from "react"
import styles from "./index.module.css"
import { motion } from "motion/react"

export const Feedback = ({
    name,
    title,
    description,
    avatarUrl
}: FeedbackProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const descriptionId = useId()

    return(
        <article className={styles.container}>
            <header className={styles.header}>
                <span className={styles.avatarFrame}>
                    <img className={styles.avatar} src={avatarUrl} alt="" />
                </span>
                <motion.h3
                    className={styles.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {name}
                </motion.h3>
            </header>

            <p
                className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}
                id={descriptionId}
                title={title}
            >
                {description}
            </p>

            <button
                className={styles.toggle}
                type="button"
                aria-controls={descriptionId}
                aria-expanded={isExpanded}
                onClick={() => setIsExpanded((current) => !current)}
            >
                {isExpanded ? "Менше" : "Більше"}
            </button>

        </article>
    )

}
