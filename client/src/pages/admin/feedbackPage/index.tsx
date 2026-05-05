import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { FeedbackForm } from "../../../modules/feedbackModule/types";
import { createFeedbackForm } from "../../../modules/feedbackModule/utils/createFeedbackForm";
import { ToolBar } from "../../../components/ToolBar";
import { AddFormPopup } from "../../../components/AddFormPopup";
import { fields } from "../../../modules/feedbackModule/utils/fields";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FeedbackList } from "../../../modules/feedbackModule/components/FeedbackList";
import { addFeedbackAction, fetchFeedbacksAction } from "../../../modules/feedbackModule/store/actions";

export const FeedbackPage = () => {
    const dispatch = useAppDispatch()
    const {loading, isFetched, error, feedbacks} = useTypedSelector(state => state.feedbacks)

    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState<boolean>(false)

    const [form, setForm] = useState<FeedbackForm>(createFeedbackForm)

    useEffect(() => {
        if (!isFetched && !loading) {
            dispatch(fetchFeedbacksAction())
        }
    }, [feedbacks])

    function submit (data: FeedbackForm) {
        dispatch(addFeedbackAction(data))
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
            />


            <FeedbackList
                feedbacks={feedbacks}
            />

            
        </div>
    )
}
