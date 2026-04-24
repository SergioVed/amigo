import styles from "./index.module.css"
import { useState } from "react"
import { FeedbackForm } from "../../../modules/feedbackModule/types";
import { createFeedbackForm } from "../../../modules/feedbackModule/utils/createFeedbackForm";
import { ToolBar } from "../../../components/ToolBar";
import { AddFormPopup } from "../../../components/AddFormPopup";
import { fields } from "../../../modules/feedbackModule/utils/fields";

export const FeedbackPage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState<boolean>(false)

    const [form, setForm] = useState<FeedbackForm>(createFeedbackForm)

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
                onSubmit={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />

            
        </div>
    )
}
