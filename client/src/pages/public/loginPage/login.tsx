import styles from "./login.module.css"
import { AuthModule } from "../../../modules/auth"

export const LoginPage = () => {
    return (
        <div className={styles.container}>
            <AuthModule/>
        </div>
    )
}