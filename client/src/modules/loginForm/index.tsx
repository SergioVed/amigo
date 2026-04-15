import { useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import styles from "./index.module.css"
import { login } from "./store/actions"

export const LoginForm = () => {

    const dispatch = useAppDispatch()
    const {user} = useTypedSelector(state => state.login)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(user)

    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <img src={require("../../public/icons/log-in.png")} className={styles.icon}/>
            </div>

            <h1 className={styles.title}>Admin Login</h1>

            <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="email">
                    Email
                </label>
                <input
                    className={styles.input}
                    id="email"
                    type="email"
                    placeholder="admin@amigo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="password">
                    Password
                </label>
                <input
                    className={styles.input}
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                className={styles.submitButton}
                type="button"
                onClick={() => dispatch(login(email, password))}
            >
                Sign In
            </button>
        </div>
    )
}
