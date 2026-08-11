import styles from "./index.module.css"
import { stickers } from "./utils/stickers"

export const TrialLesson = () => {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2 aria-label="Твоя викладачка вже чекає на тебе">
                        <span className={styles.mobileTitle} aria-hidden="true">
                            Твоя<br />викладачка<br />вже чекає<br />на тебе
                        </span>
                        <span className={styles.desktopTitle} aria-hidden="true">
                            Твоя викладачка<br />вже чекає на тебе
                        </span>
                    </h2>

                    <div className={styles.action}>
                        <p>Тицьни, щоб познайомитися</p>
                        <button type="button">Записатися на пробне заняття</button>
                    </div>
                </div>

                <ul className={styles.stickers} aria-hidden="true">
                    {stickers.map(({ text, className }) => (
                        <li className={`${styles.sticker} ${styles[className]}`} key={className}>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
