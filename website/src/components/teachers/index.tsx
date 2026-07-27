import styles from "./index.module.css"
import { useEffect, useState } from "react"
import type { Teacher } from "../ceo/types"
import type { AxiosError } from "axios"
import { getTeachers } from "../../api"
import { TeacherCardFront } from "./components/TeacherCardFront"

export const Teachers = () => {

    const [teachers, setTeachers] = useState<Teacher[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<String | null>(null)

    useEffect(() => {
        const loadTeachers = async () => {
            try{
                const data = await getTeachers()
                setTeachers(data)
            } catch (e: any) {
                setError(e.message)
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

                <div className={styles.teacher_box}>
                    {teachers.map((teacher, key) => (
                        <TeacherCardFront/>
                    ))}
                </div>                

            </section>
        </div>

    )

}