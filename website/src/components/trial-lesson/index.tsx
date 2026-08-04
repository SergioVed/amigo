import styles from "./index.module.css"
import { stickers } from "./utils/stickers"

export const TrialLesson = () => {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2>Твоя<br />викладачка<br />вже чекає<br />на тебе</h2>

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
