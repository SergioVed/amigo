import { Ceo } from "../../store/types"
import { InfoBlock } from "../infoBlock"
import styles from "./index.module.css"
import userIcon from "../../icons/user.png"

interface InfoGridProps {
    ceo: Ceo
}

export const InfoGrid = ({ceo}: InfoGridProps) => {

    return (
        <div className={styles.container}>

            <div className={styles.fullWidth}>
                <InfoBlock
                    icon={userIcon}
                    title="About"    
                >
                    {ceo.description}
                </InfoBlock>
            </div>

            <InfoBlock
                icon={userIcon}
                title="Email"    
            >
                {ceo.email}
            </InfoBlock>

            <InfoBlock
                icon={userIcon}
                title="Telegram"    
            >
                {ceo.telegram}
            </InfoBlock>

            <InfoBlock
                icon={userIcon}
                title="Instagram"    
            >
                {ceo.instagram}
            </InfoBlock>

        </div>
    )
}
