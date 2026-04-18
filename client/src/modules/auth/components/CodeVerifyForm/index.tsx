import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { CustomButton } from "../../../../ui/CustomButton"
import style from "./index.module.css"
import { verifyCode } from "../../store/actions"
import { CustomInput } from "../../../../ui/CustomInput"

export const CodeVerifyForm = () => {

    const dispatch = useAppDispatch()
    const {email, error, isAuth} = useTypedSelector(state => state.login)

    const [code, setCode] = useState("");

    function submit(email: string, code: string) {
        dispatch(verifyCode(email, code))
    }

    return (
        <div className={style.container}>
            <div className={style.iconWrapper}>
                <img
                    src={require("../../../../public/icons/login/lock.png")}
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

            {error ? <p style={{margin: 0, color: "#ff0000"}}>{error}</p> : <></>}


            <CustomButton text="Verify Code" onClick={() => submit(email!, code)}/>
        </div>
    )
}
