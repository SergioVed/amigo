import { Outlet } from "react-router-dom"
import styles from "./index.module.css"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/sideBar"
import { sideBarLinks } from "../../utils/navigation"

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
