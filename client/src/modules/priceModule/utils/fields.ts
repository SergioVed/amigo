import { FieldConfig } from "../../../components/AddFormPopup";
import { PriceForm, PriceType } from "../types";

export const fields: FieldConfig<PriceForm>[] = [
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
