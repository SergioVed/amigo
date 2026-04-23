import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { ToolBar } from "../../../components/ToolBar"
import { AddFormPopup } from "../../../components/AddFormPopup"
import { fields } from "../../../modules/teacherModule/utils/fields"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import {
    TeacherList,
    TeacherCreateForm,
    addTeacherAction,
    fetchTeachersAction,
    createTeacherForm,
    filterTeachers
} from "../../../modules/teacherModule"

export const TeacherPage = () => {

    const [searchValue, setSearchValue] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [form, setForm] = useState<TeacherCreateForm>(createTeacherForm)

    const dispatch = useAppDispatch()
    const { teachers, loading, isFetched } = useTypedSelector(state => state.teachers)

    function handleSubmit(form: TeacherCreateForm) {
        dispatch(addTeacherAction({
            ...form,
            superPower: form.superPower.split(",")
        }))

        setIsOpen(false)
    }

    useEffect(() => {
        if (!loading && !isFetched) {
            dispatch(fetchTeachersAction())
        }
    }, [teachers])


    return (
        <div className={styles.page}>
            <ToolBar
                value={searchValue}
                setValue={setSearchValue}
                setOpen={setIsOpen}
                addBtnText="Add Teacher"
            />

            <TeacherList
                filteredTeachers={filterTeachers(teachers, searchValue)}
            />

            <AddFormPopup
                title="Add teacher"
                open={isOpen}
                setOpen={setIsOpen}
                form={form}
                setForm={setForm}
                fields={fields}
                onSubmit={() => handleSubmit(form)}
            />
        </div>
    )
}
