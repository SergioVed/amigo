import styles from "./index.module.css"
import { useEffect, useRef, useState } from "react"
import type { Teacher } from "./types"
import { getTeachers } from "../../api"
import { TeacherCard } from "./components/TeacherCard"

export const Teachers = () => {

    const [teachers, setTeachers] = useState<Teacher[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const teacherListRef = useRef<HTMLUListElement>(null)

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

    const scrollTeachers = (direction: -1 | 1) => {
        const list = teacherListRef.current

        if (!list) return

        list.scrollBy({
            left: direction * Math.min(list.clientWidth * 0.8, 360),
            behavior: "smooth",
        })
    }

    return(
        <div className={styles.outer}>
            <section className={styles.container} id="teachers">
                
                <h2>НАШІ PROFESORAS</h2>
                <h3>[викладачі]</h3>

                {isLoading && <p className={styles.status}>Завантажуємо викладачів…</p>}
                {error && <p className={styles.status}>Не вдалося завантажити викладачів.</p>}

                {!isLoading && !error && (
                    <>
                        <ul className={styles.teacher_box} ref={teacherListRef}>
                            {teachers.map((teacher) => (
                                <li className={styles.teacher_item} key={`${teacher.name}-${teacher.avatarUrl}`}>
                                    <TeacherCard {...teacher}/>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.navigation} aria-label="Навігація викладачами">
                            <button type="button" onClick={() => scrollTeachers(-1)} aria-label="Попередні викладачі">
                                ←
                            </button>
                            <button type="button" onClick={() => scrollTeachers(1)} aria-label="Наступні викладачі">
                                →
                            </button>
                        </div>
                    </>
                )}

            </section>
        </div>

    )

}
