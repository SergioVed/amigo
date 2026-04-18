import { useEffect } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { fetchTeachers } from "./store/actions"
import { TeacherCard } from "./components/TeacherCard"
import style from "./index.module.css"

export const TeacherList = () => {
    const dispatch = useAppDispatch()
    const { teachers, loading, isFetched } = useTypedSelector(state => state.teachers)

    useEffect(() => {
        if (!isFetched && !loading) {
            dispatch(fetchTeachers())
        }
    }, [dispatch, teachers, loading, isFetched])

    console.log(teachers)


    return (
        <div className={style.container}>
            {teachers.map(teacher => (
                <TeacherCard key={teacher.id ?? teacher.name} teacher={teacher}/>
            ))}
        </div>
    )
}
