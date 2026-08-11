import styles from "./index.module.css"
import { useEffect, useRef, useState } from "react"
import type { Teacher } from "./types"
import { getTeachers } from "../../api"
import { TeacherCard } from "./components/TeacherCard"
import { motion } from "motion/react"

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
                
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    НАШІ PROFESORAS
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    [викладачі]
                </motion.h3>

                {isLoading && <p className={styles.status}>Завантажуємо викладачів…</p>}
                {error && <p className={styles.status}>Не вдалося завантажити викладачів.</p>}

                {!isLoading && !error && (
                    <>
                        <ul className={styles.teacher_box} ref={teacherListRef}>
                            {teachers.map((teacher, index) => {
                                const key = `${teacher.name}-${teacher.avatarUrl}`

                                if (index < 3) {
                                    return (
                                        <li className={styles.teacher_item} key={key}>
                                            <TeacherCard {...teacher}/>
                                        </li>
                                    )
                                }

                                return (
                                    <motion.li
                                        className={styles.teacher_item}
                                        key={key}
                                        initial={{ y: -100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 110,
                                            damping: 15,
                                            delay: (index - 3) * 0.15
                                        }}
                                    >
                                        <TeacherCard {...teacher}/>
                                    </motion.li>
                                )
                            })}
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
