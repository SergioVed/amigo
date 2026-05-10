import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { ToolBar } from "../../../components/ToolBar";
import { AddFormPopup } from "../../../components/AddFormPopup";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addFeedbackAction, createFeedbackForm, FeedbackForm, FeedbackList, fetchFeedbacksAction, fields } from "../../../modules/feedbackModule";

export const FeedbackPage = () => {
    const dispatch = useAppDispatch()
    const {loading, isFetched, error, feedbacks} = useTypedSelector(state => state.feedbacks)

    const [searchValue, setSearchValue] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [open, setOpen] = useState<boolean>(false)

    const [form, setForm] = useState<FeedbackForm>(createFeedbackForm)

    useEffect(() => {
        if (!isFetched && !loading) {
            dispatch(fetchFeedbacksAction())
        }
    }, [feedbacks])

    function submit (data: FeedbackForm) {
        if (!selectedFile) {
            return null
        }

        dispatch(addFeedbackAction(data, selectedFile))
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (file == null) {
            return
        }

        setSelectedFile(file)
    }

    return (
        <div className={styles.page}>
            <ToolBar
                value={searchValue}
                setValue={setSearchValue}
                setOpen={setOpen}
                addBtnText="Add Feedback"
            />

            <AddFormPopup
                form={form}
                setForm={setForm}
                open={open}
                setOpen={setOpen}
                title="Add Feedback"
                fields={fields}
                onSubmit={() => submit(form)}
            >
                <input type="file" onChange={handleFileChange}/>
            </AddFormPopup>

            <FeedbackList
                feedbacks={feedbacks}
            />
        </div>
    )
}
