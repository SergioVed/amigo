import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export interface SidebarLinkProps {
    to: string;
    label: string;
    icon?: string;
    iconAlt?: string;
}

export const SidebarLink = ({ to, label, icon, iconAlt }: SidebarLinkProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
            }
        >
            {icon ? (
                <span className={styles.icon}>
                    <img className={styles.iconImage} src={icon} alt={iconAlt ?? `${label} icon`} />
                </span>
            ) : null}
            <span className={styles.label}>{label}</span>
        </NavLink>
    );
};
