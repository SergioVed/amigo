import { FieldConfig } from "../../../components/AddFormPopup";
import { FeedbackForm } from "../types";


export const fields: FieldConfig<FeedbackForm>[] = [
    {
        name: "name",
        label: "Name",
        placeholder: "Enter user name",
    }, {
        name: "title",
        label: "Title",
        placeholder: "Enter feedback title",
    }, {
        name: "description",
        label: "Description",
        placeholder: "Enter feedback description",
    }, 
]