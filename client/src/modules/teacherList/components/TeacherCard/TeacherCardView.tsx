import { Teacher } from "../../store/types"
import styles from "./index.module.css"

interface TeacherCardViewProps {
    teacher: Teacher
}

export const TeacherCardView = ({ teacher }: TeacherCardViewProps) => {
    return (
        <>
            <h2 className={styles.title}>{teacher.name}</h2>

            <p className={styles.description}>{teacher.description}</p>

            <p className={styles.subDescription}>{teacher.subDescription}</p>

            <a
                className={styles.videoLink}
                href={teacher.videoUrl}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={require("../../public/icons/video.png")}
                    className={styles.videoIcon}
                    alt=""
                />
                <span>{teacher.videoUrl}</span>
            </a>

            <div className={styles.section}>
                <p className={styles.sectionTitle}>Super Powers</p>

                <div className={styles.powerList}>
                    {teacher.superPower.map((power) => (
                        <span className={styles.powerItem} key={power}>
                            {power}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.favouriteWord}>
                <span className={styles.favouriteWordLabel}>Favourite word: </span>
                <strong>{teacher.favouriteWord}</strong>
            </div>

            <div className={styles.forStudent}>
                <p className={styles.forStudentTitle}>I can do for you:</p>
                <p className={styles.forStudentText}>{teacher.forStudent}</p>
            </div>
        </>
    )
}
