import { Feedback } from "../../store/types"
import { FeedbackCard } from "../FeedbackCard"
import styles from "./index.module.css"

interface FeedbackListProps {
    feedbacks: Feedback[]
}

export const FeedbackList = ({feedbacks}: FeedbackListProps) => {

    return (
        <div className={styles.container}>
            {feedbacks.map((item) => (
                <FeedbackCard
                    key={item.id ?? item.name}
                    feedback={item}
                />
            ))}
        </div>
    )
}
