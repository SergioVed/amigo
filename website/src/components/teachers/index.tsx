import styles from "./index.module.css"
import { useEffect, useState } from "react"
import type { Teacher } from "./types"
import { getTeachers } from "../../api"
import { TeacherCardFront } from "./components/TeacherCard/components/TeacherCardFront"
import { TeacherCard } from "./components/TeacherCard"
import { TeacherCardBack } from "./components/TeacherCard/components/TeacherCardBack"

export const Teachers = () => {

    const [teachers, setTeachers] = useState<Teacher[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadTeachers = async () => {
            try{
                const data = await getTeachers()
                setTeachers(data)
            } catch (error: unknown) {
                setError(error instanceof Error ? error.message : "Unknown error")
            } finally {
                setIsLoading(false)
            }
        }

        loadTeachers()
    }, [])

    return(
        <div className={styles.outer}>
            <section className={styles.container}>
                
                <h2>НАШІ PROFESORAS</h2>
                <h3>[викладачі]</h3>

                {isLoading && <p className={styles.status}>Завантажуємо викладачів…</p>}
                {error && <p className={styles.status}>Не вдалося завантажити викладачів.</p>}

                {!isLoading && !error && (
                    <ul className={styles.teacher_box}>
                        {teachers.map((teacher) => (
                            <li className={styles.teacher_item} key={`${teacher.name}-${teacher.avatarUrl}`}>
                                <TeacherCard {...teacher}/>
                            </li>
                        ))}
                    </ul>
                )}

            </section>
        </div>

    )

}
