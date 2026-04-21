import { Teacher } from "../../store/types"
import { TeacherCard } from "../TeacherCard"
import styles from "./index.module.css"

interface TeacherListProps {
    filteredTeachers: Teacher[]

}

export const TeacherList = ({filteredTeachers}: TeacherListProps) => {

    return (
        <div className={styles.container}>
            {filteredTeachers.map(teacher => (
                <TeacherCard key={teacher.id ?? teacher.name} teacher={teacher} />
            ))}
        </div>
    )
}