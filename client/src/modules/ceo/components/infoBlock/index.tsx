import { useContext, useState } from "react"
import styles from "./index.module.css"
import { CustomInput } from "../../../../ui/CustomInput";
import { CeoEditContext } from "../../utils/context";

interface InfoBlockProps {
    icon: string,
    title: string,
    children: React.ReactNode,
    value: string,
    onChange: (value: string) => void
}

export const InfoBlock = ({ icon, title, children, value, onChange }: InfoBlockProps) => {

    const {isEditing} = useContext(CeoEditContext)

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <img src={icon} className={styles.icon} />
                <p className={styles.title}>{title}</p>
            </div>

            <div className={styles.info}>
                { isEditing
                    ? <CustomInput 
                        placeholder={`Enter ${title} ...`}
                        value={value} 
                        label={""} 
                        onChange={(e) => onChange(e.target.value)}/>
                    : 
                    <>
                        {children}
                    </>
                }
            </div>

        </div>

    )
}