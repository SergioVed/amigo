import { TeacherCreateForm } from "../types";
import { FieldConfig } from "../../../components/AddFormPopup";

export const fields: FieldConfig<TeacherCreateForm>[] = [
        {
            name: "name",
            label: "Name",
            placeholder: "Enter teacher name",
        },
        {
            name: "description",
            label: "Description",
            placeholder: "Enter description",
        },
        {
            name: "videoUrl",
            label: "Video Url",
            placeholder: "Enter video url",
        },
        {
            name: "superPower",
            label: "Super Power",
            placeholder: "Enter super power",
        },
        {
            name: "favouriteWord",
            label: "Favourite Word",
            placeholder: "Enter favourite word",
        },
        {
            name: "forStudent",
            label: "For Student",
            placeholder: "For student...",
            isYellow: true,
        },
    ]