import { TeacherList } from "../../../modules/teacherList"
import styles from "./index.module.css"

export const TeacherPage = () => {
    return (
        <div className={styles.page}>
            <TeacherList/>
        </div>
    )
}
