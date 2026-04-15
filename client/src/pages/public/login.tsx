import styles from "./login.module.css"
import { AuthModule } from "../../modules/auth"

export const Login = () => {
    return (
        <div className={styles.container}>
            <AuthModule/>
        </div>
    )
}