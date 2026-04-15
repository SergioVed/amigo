import { useTypedSelector } from "../../hooks/useTypedSelector"
import { CustomLoader } from "../../ui/CustomLoader"
import { CodeVerifyForm } from "./components/CodeVerifyForm"
import { LoginForm } from "./components/LoginForm"

export const AuthModule = () => {

    const {isCodeSent, loading} = useTypedSelector(state => state.login)

    if (loading) {
        return (
            <CustomLoader/>
        )
    }

    if (isCodeSent) {
        return (
            <CodeVerifyForm/>
        )
    } else {
        return (
            <LoginForm/>
        )
    }
}