import { TeacherModule } from "../../../modules/teacherModule"
import styles from "./index.module.css"

export const TeacherPage = () => {
    return (
        <div className={styles.page}>
            <TeacherModule/>
        </div>
    )
}
