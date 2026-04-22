import { FieldConfig } from "../../../ui/AddFormPopup";
import { CreatePriceForm, PriceType } from "../types";

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
]

export const selectOptions: {name: string, value: PriceType}[] = [
    {
        name: "Individual",
        value: "individual"
    }, {
        name: "Pair",
        value: "pair"
    }
]
