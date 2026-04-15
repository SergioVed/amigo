import styles from "./login.module.css"
import { LoginForm } from "../../modules/loginForm"

export const Login = () => {
    return (
        <div className={styles.container}>
            <LoginForm/>
        </div>
    )
}