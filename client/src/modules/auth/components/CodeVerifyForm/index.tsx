import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { CustomButton } from "../../../../ui/CustomButton"
import style from "./index.module.css"
import { verifyCode } from "../../store/actions"
import { CustomInput } from "../../../../ui/CustomInput"

export const CodeVerifyForm = () => {

    const dispatch = useAppDispatch()
    const {email} = useTypedSelector(state => state.login)

    const [code, setCode] = useState("");

    console.log(email)
    console.log(code)

    function submit(email: string, code: string) {
        dispatch(verifyCode(email, code))
    }

    return (
        <div className={style.container}>
            <div className={style.iconWrapper}>
                <img
                    src={require("../../../../public/icons/lock.png")}
                    className={style.icon}
                />
            </div>

            <h1 className={style.title}>Enter verification code</h1>

            <p className={style.description}>
                We've sent a 6-digit verification code to your email address
            </p>

            <CustomInput 
                value={code} 
                setVelue={setCode} 
                placeholder="your code" 
                label="Enter verification code"
                id="code"    
            />

            <CustomButton text="Verify Code" onClick={() => submit(email!, code)}/>
        </div>
    )
}
