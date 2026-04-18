import styles from "./index.module.css"
import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { login } from "../../store/actions"
import { CustomInput } from "../../../../ui/CustomInput"
import { CustomButton } from "../../../../ui/CustomButton"

export const LoginForm = () => {

    const dispatch = useAppDispatch()
    const {error} = useTypedSelector(state => state.login)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    function submit(email: string, password: string) {
        dispatch(login(email, password))
    }

    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <img src={require("../../../../public/icons/login/log-in.png")} className={styles.icon}/>
            </div>

            <h1 className={styles.title}>Admin Login</h1>

            <CustomInput 
                label="Email" 
                placeholder="amigo@gmail.com" 
                value={email} 
                setVelue={setEmail}
                id="email"
            />
            <CustomInput 
                label="Password" 
                placeholder="*******" 
                isHidden 
                value={password} 
                setVelue={setPassword}
                id="password"
            />

            {error ? <p style={{margin: 0, color: "#ff0000", whiteSpace: "pre-line"}}>{error}</p> : <></>}

            <CustomButton text="Sign in" onClick={() => submit(email, password)}/>
        </div>
    )
}