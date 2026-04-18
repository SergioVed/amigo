import { useLocation } from "react-router-dom";
import { sideBarLinks } from "../../utils/navigation";
import styles from "./index.module.css";

export const Header = () => {
    const location = useLocation();

    const currentPage = sideBarLinks.find((item) => item.to === location.pathname);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{currentPage?.label ?? "Admin"}</h1>
        </header>
    );
};
