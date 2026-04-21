import { FieldConfig } from "../../../ui/AddFormPopup";
import { CreatePriceForm } from "../types";

export const fields: FieldConfig<CreatePriceForm>[] = [
    {
        name: "title",
        label: "Title",
        placeholder: "Enter price title",
    },
    {
        name: "amount",
        label: "Amount",
        placeholder: "Enter amount",
        isYellow: true,
    },
    {
        name: "description",
        label: "Description",
        placeholder: "Enter description",
    },
    {
        name: "type",
        label: "Type",
        placeholder: "Select a type",
    },
]
