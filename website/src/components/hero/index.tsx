import styles from "./index.module.css"
import Sticker from "../../assets/hero/sticker-bg.svg"
import Stickers from "../../assets/hero/stickers.png"

export const Hero = () => {

    return (
        <section className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.title}>
                    <span>Онлайн-</span>
                    <span>школа</span>
                    <span>іноземних</span>
                    <span className={styles.lastLine}>
                        мов
                        <img src={Sticker} alt="" className={styles.sticker} />
                    </span>
                </h1>

                <p className={styles.subtitle}>Ми - йога для твого мозку</p>

                <button className={styles.btn}>
                    Записатися на пробне заняття
                </button>

                <img src={Stickers} alt="" className={styles.stickers}/>
            </div>
        </section>
    )

}
