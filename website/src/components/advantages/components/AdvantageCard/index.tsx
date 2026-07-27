import type { AdvantageCardProps } from "../../types"
import styles from "./index.module.css"

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
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    )
}
