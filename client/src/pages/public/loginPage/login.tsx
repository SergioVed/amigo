import styles from "./login.module.css"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { CustomLoader } from "../../../ui/CustomLoader"
import { CodeVerifyForm, LoginForm } from "../../../modules/auth"

export const LoginPage = () => {

    const { isCodeSent, loading } = useTypedSelector(state => state.login)

    if (loading) {
        return (
            <CustomLoader />
        )
    }

    return (
        <div className={styles.container}>
            {isCodeSent
                ? <CodeVerifyForm/>
                : <LoginForm/>
            }
        </div>
    )


}