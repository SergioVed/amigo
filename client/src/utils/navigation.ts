import { ADMIN_FULL_PATHS } from "./paths";

export const sideBarLinks = [
    {
        to: ADMIN_FULL_PATHS.teachers,
        label: "Teacher",
        icon: require("../public/icons/sideBar/teacher.png"),
        iconAlt: "Teacher",
    },
    {
        to: ADMIN_FULL_PATHS.feedback,
        label: "Feedback",
        icon: require("../public/icons/sideBar/feed-back.png"),
        iconAlt: "Feedback",
    },
    {
        to: ADMIN_FULL_PATHS.price,
        label: "Price",
        icon: require("../public/icons/sideBar/price.png"),
        iconAlt: "Price",
    },
    {
        to: ADMIN_FULL_PATHS.ceo,
        label: "Ceo",
        icon: require("../public/icons/sideBar/feed-back.png"),
        iconAlt: "CEO",
    },
];
