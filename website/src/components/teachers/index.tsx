import styles from "./index.module.css"
import { useEffect, useRef, useState } from "react"
import type { Teacher, TeacherLanguage } from "./types"
import { getTeachers } from "../../api"
import { TeacherCard } from "./components/TeacherCard"
import { motion } from "motion/react"
import { OptionBtn } from "../../ui/OptionBtn"

const languageOptions: { label: string; value: TeacherLanguage }[] = [
    { label: "Іспанська", value: "SPANISH" },
    { label: "Англійська", value: "ENGLISH" },
]

export const Teachers = () => {

    const [teachers, setTeachers] = useState<Teacher[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedLanguage, setSelectedLanguage] = useState<TeacherLanguage>("SPANISH")
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

    const handleLanguageChange = (language: TeacherLanguage) => {
        setSelectedLanguage(language)
        teacherListRef.current?.scrollTo({ left: 0, behavior: "smooth" })
    }

    const visibleTeachers = teachers.filter(({ language }) => language === selectedLanguage)

    return(
        <div className={styles.outer}>
            <section className={styles.container} id="teachers">
                
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    НАШІ ВИКЛАДАЧІ
                </motion.h2>
                <motion.div
                    className={styles.options}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <OptionBtn
                        options={languageOptions}
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        ariaLabel="Мова викладачів"
                    />
                </motion.div>

                {isLoading && <p className={styles.status}>Завантажуємо викладачів…</p>}
                {error && <p className={styles.status}>Не вдалося завантажити викладачів.</p>}

                {!isLoading && !error && (
                    <>
                        <ul className={styles.teacher_box} ref={teacherListRef}>
                            {visibleTeachers.map((teacher, index) => {
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
