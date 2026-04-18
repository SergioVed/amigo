import { SidebarLink, SidebarLinkProps } from "../../ui/SidebarLink";
import styles from "./index.module.css";

interface SidebarProps {
    title?: string;
    items: SidebarLinkProps[];
    footerText?: string;
}

export const Sidebar = ({
    title = "AMIGO",
    items,
    footerText = "Васап, це твоя адміночка :)",
}: SidebarProps) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.inner}>
                <div className={styles.brand}>{title}</div>

                <nav className={styles.navigation} aria-label="Sidebar navigation">
                    {items.map((item) => (
                        <SidebarLink
                            key={item.to}
                            to={item.to}
                            label={item.label}
                            icon={item.icon}
                            iconAlt={item.iconAlt}
                        />
                    ))}
                </nav>
            </div>

            <div className={styles.footer}>{footerText}</div>
        </aside>
    );
};
