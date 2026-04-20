import { useEffect, useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { addTeacherAction, fetchTeachers } from "./store/actions"
import { TeacherCard } from "./components/TeacherCard"
import { SearchInput } from "./ui/SearchInput"
import style from "./index.module.css"
import { AddButton } from "../../ui/AddButton"
import { AddFormPopup, FieldConfig } from "../../ui/AddFormPopup"
import { fields } from "./utils/fields"

export type TeacherCreateForm = {
    avatarUrl: string
    name: string
    description: string
    subDescription: string
    videoUrl: string
    superPower: string
    favouriteWord: string
    forStudent: string
}

export const TeacherList = () => {
    const dispatch = useAppDispatch()

    const { teachers, loading, isFetched, error } = useTypedSelector(state => state.teachers)
    const [searchValue, setSearchValue] = useState("")
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState<TeacherCreateForm>({
        avatarUrl: "",
        name: "",
        description: "",
        subDescription: "",
        videoUrl: "",
        superPower: "",
        favouriteWord: "",
        forStudent: "",
    })

    function addTeacher (form: TeacherCreateForm) {
        dispatch(addTeacherAction(form))
    }

    useEffect(() => {
        if (!isFetched && !loading) {
            dispatch(fetchTeachers())
        }
    }, [dispatch, teachers, loading, isFetched])

    const normalizedQuery = searchValue.trim().toLowerCase()
    const filteredTeachers = teachers.filter((teacher) => {
        if (!normalizedQuery) {
            return true
        }

        return [
            teacher.name,
            teacher.description,
            teacher.subDescription,
        ].some((value) => value.toLowerCase().includes(normalizedQuery))
    })

    return (
        <div className={style.wrapper}>
            <div className={style.actionsContainer}>
                <SearchInput
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <AddButton text="Add teacher" onClick={() => setOpen(true)}/>
            </div>

            {open && <AddFormPopup 
                setOpen={setOpen}
                form={form}
                setForm={setForm}
                open={open} 
                title={"Add teacher"} 
                fields={fields} 
                onSubmit={() => {
                    addTeacher(form)
                    setOpen(false)
                }}
            />}

            <div className={style.container}>
                {filteredTeachers.map(teacher => (
                    <TeacherCard key={teacher.id ?? teacher.name} teacher={teacher} />
                ))}
            </div>
        </div>
    )
}
