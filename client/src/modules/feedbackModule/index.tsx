import { SetStateAction, useState } from "react"
import { ToolBar } from "../../components/ToolBar"
import styles from "./index.module.css"
import { AddFormPopup } from "../../components/AddFormPopup";
import { FeedbackForm } from "./types";
import { createFeedbackForm } from "./utils/createFeedbackForm";
import { fields } from "./utils/fields";

export const FeedbackModule = () => {

    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState<boolean>(false)

    const [form, setForm] = useState<FeedbackForm>(createFeedbackForm)

    return (
        <>
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

        </>
    )
}