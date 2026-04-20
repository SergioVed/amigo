import { TeacherCreateForm } from "..";
import { FieldConfig } from "../../../ui/AddFormPopup";

export const fields: FieldConfig<TeacherCreateForm>[] = [
        {
            name: "avatarUrl",
            label: "Avatar Url",
            placeholder: "Enter avatar url",
        },
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
            name: "subDescription",
            label: "Sub Description",
            placeholder: "Enter sub description",
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