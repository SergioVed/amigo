import { FieldConfig } from "../../../components/AddFormPopup";
import { PriceCategory, PriceForm, PriceType } from "../types";

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

export const typeOptions: {name: string, value: PriceType}[] = [
    {
        name: "Individual",
        value: "individual"
    }, {
        name: "Pair",
        value: "pair"
    }
]

export const categoryOptions: {name: string, value: PriceCategory}[] = [
    {
        name: "Trial",
        value: "trial"
    }, {
        name: "Single",
        value: "single"
    }, {
        name: "Subscription",
        value: "subscription"
    }, {
        name: "With Mari",
        value: "with_mari"
    },
]
