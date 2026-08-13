import { useState } from "react"
import type { Teacher } from "../../types"
import { TeacherCardFront } from "./components/TeacherCardFront"
import { TeacherCardBack } from "./components/TeacherCardBack"
import styles from "./index.module.css"

export const TeacherCard = (props: Teacher) => {

    const [isFlipped, setIsFlipped] = useState<boolean>(false)

    return (
        <div className={styles.card}>
            <div className={`${styles.inner} ${isFlipped ? styles.flipped : ""}`}>
                <div
                    className={styles.face}
                    aria-hidden={isFlipped}
                    inert={isFlipped ? true : undefined}
                >
                    <TeacherCardFront {...props} onMore={() => setIsFlipped(true)}/>
                </div>

                <div
                    className={`${styles.face} ${styles.back}`}
                    aria-hidden={!isFlipped}
                    inert={!isFlipped ? true : undefined}
                >
                    <TeacherCardBack {...props} onMore={() => setIsFlipped(false)}/>
                </div>
            </div>
        </div>
    )
}
