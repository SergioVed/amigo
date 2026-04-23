import { Outlet } from "react-router-dom"
import styles from "./index.module.css"
import { sideBarLinks } from "../../utils/navigation"
import { Sidebar } from "../../components/SideBar"
import { Header } from "../../components/Header"

export const AdminLayout = () => {

    return (
        <div className={styles.layout}>
            <Sidebar title="AMIGO" items={sideBarLinks} />

            <div className={styles.content}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
