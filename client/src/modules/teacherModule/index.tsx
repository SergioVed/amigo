import { useEffect, useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { addTeacherAction, fetchTeachers } from "./store/actions"
import style from "./index.module.css"
import { AddFormPopup } from "../../ui/AddFormPopup"
import { fields } from "./utils/fields"
import { TeachersToolBar } from "./components/TeachersToolBar"
import { TeacherList } from "./components/TeacherList"
import { filterTeachers } from "./utils/filterTeachers"
import { TeacherCreateForm } from "./types"
import { createTeacherForm } from "./utils/createTeacherForm"

export const TeacherModule = () => {
    const dispatch = useAppDispatch()
    const { teachers, loading, isFetched, error } = useTypedSelector(state => state.teachers)

    const [searchValue, setSearchValue] = useState("")
    const [open, setOpen] = useState(false)

    const [form, setForm] = useState<TeacherCreateForm>(createTeacherForm)

    function handleAddTeacher (form: TeacherCreateForm) {
        dispatch(addTeacherAction(form))
    }

    useEffect(() => {
        if (!isFetched && !loading) {
            dispatch(fetchTeachers())
        }
    }, [dispatch, teachers, loading, isFetched])


    return (
        <div className={style.wrapper}>
            
            <TeachersToolBar 
                value={searchValue} 
                setValue={setSearchValue} 
                setOpen={setOpen}
            /> 

            {open && <AddFormPopup 
                setOpen={setOpen}
                form={form}
                setForm={setForm}
                open={open} 
                title={"Add teacher"} 
                fields={fields} 
                onSubmit={() => {
                    handleAddTeacher(form)
                    setOpen(false)
                }}
            />}

            <TeacherList filteredTeachers={filterTeachers(teachers, searchValue)}/>
        </div>
    )
}
