import { FieldConfig } from "../../../components/AddFormPopup";
import { FeedbackForm } from "../types";


export const fields: FieldConfig<FeedbackForm>[] = [
    {
        name: "name",
        label: "Name",
        placeholder: "Enter user name",
    }, 
    {
        name: "description",
        label: "Description",
        placeholder: "Enter feedback description",
    }, 
]