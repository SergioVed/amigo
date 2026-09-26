import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { CustomButton } from "../../ui/CustomButton"
import style from "./index.module.css"
import { LoginActionTypes } from "../../store/types"
import { verifyCode } from "../../store/actions"
import { CustomInput } from "../../ui/CustomInput"

export const CodeVerifyForm = () => {

    const dispatch = useAppDispatch()
    const {email, error, loading} = useTypedSelector(state => state.login)

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
                Enter the 6-digit code sent to {email}. It expires in 10 minutes.
            </p>

            <CustomInput
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="your code"
                label="Enter verification code"
                id="code"
            />

            {error ? <p style={{margin: 0, color: "#ff0000"}}>{error}</p> : <></>}


            <CustomButton text={loading ? "Verifying…" : "Verify Code"} disabled={loading || code.length !== 6} onClick={() => submit(email!, code)}/>
            <button type="button" disabled={loading} onClick={() => dispatch({type: LoginActionTypes.LOGOUT})}>
                Back to sign in / request a new code
            </button>
        </div>
    )
}
