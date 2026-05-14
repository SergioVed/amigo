import { Ceo } from "../../store/types"
import { InfoBlock } from "../infoBlock"
import styles from "./index.module.css"
import userIcon from "../../icons/user.png"
import { UpdateCeoForm } from "../../types"
import { Dispatch, SetStateAction } from "react"

interface InfoGridProps {
    ceo: Ceo,
    isEditing: boolean,
    form: UpdateCeoForm,
    setForm: Dispatch<SetStateAction<UpdateCeoForm>>
}

export const InfoGrid = ({ceo, form, setForm, isEditing}: InfoGridProps) => {

    return (
        <div className={styles.container}>

            <div className={styles.fullWidth}>
                <InfoBlock
                    icon={userIcon}
                    title="About"   
                    value={form.description ?? ceo.description}
                    onChange={(value) => setForm(prev => ({...prev, description: value}))}
                >
                    {ceo.description}
                </InfoBlock>
            </div>

            <InfoBlock
                icon={userIcon}
                title="Telegram"  
                value={form.telegram ?? ceo.telegram}
                onChange={(value) => setForm(prev => ({...prev, telegram: value}))}  
            >
                {ceo.telegram}
            </InfoBlock>

            <InfoBlock
                icon={userIcon}
                title="Instagram"    
                value={form.instagram ?? ceo.instagram}
                onChange={(value) => setForm(prev => ({...prev, instagram: value}))}
            >
                {ceo.instagram}
            </InfoBlock>

        </div>
    )
}
