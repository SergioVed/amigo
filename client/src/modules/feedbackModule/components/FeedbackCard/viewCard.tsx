import { Feedback } from "../../store/types"
import styles from "./index.module.css"

interface FeedbackCardProps {
    feedback: Feedback
}

export const FeedbackViewCard = ({feedback}: FeedbackCardProps) => {

    return (
        <>
            <div className={styles.header}>
                <img
                    className={styles.avatar}
                    src={feedback.avatarUrl}
                    alt={feedback.name}
                />

                <h2 className={styles.name}>{feedback.name}</h2>
            </div>

            <p className={styles.title}>{feedback.title}</p>

            <p className={styles.description}>{feedback.description}</p>
        </>
    )
}
