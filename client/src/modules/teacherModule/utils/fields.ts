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
            name: "experience",
            label: "Experience",
            placeholder: "Enter experience",
        },
        {
            name: "videoUrl",
            label: "Video Url",
            placeholder: "Enter video url",
        },
        {
            name: "superPower1",
            label: "First Super Power",
            placeholder: "Enter first super power",
        },
        {
            name: "superPower2",
            label: "Second Super Power",
            placeholder: "Enter second super power",
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