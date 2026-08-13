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

export const typeOptions: {title: string, value: PriceType}[] = [
    {
        title: "Individual",
        value: "individual"
    }, {
        title: "Pair",
        value: "pair"
    }
]

export const categoryOptions: {title: string, value: PriceCategory}[] = [
    {
        title: "Trial",
        value: "trial"
    }, {
        title: "Single",
        value: "single"
    }, {
        title: "Subscription",
        value: "subscription"
    }, {
        title: "With Mari",
        value: "with_mari"
    },
]
