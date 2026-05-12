import styles from "./index.module.css"

interface InfoBlockProps {
    icon: string,
    title: string,
    children: React.ReactNode
}

export const InfoBlock = ({icon, title, children}: InfoBlockProps) => {

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <img src={icon} className={styles.icon}/>
                <p className={styles.title}>{title}</p>
            </div>

            <div className={styles.info}>
                {children}
            </div>

        </div>

    )
}