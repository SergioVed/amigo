import styles from "./index.module.css"
import type { Teacher } from "../../../../types"
import bookIcon from "../../../../../../assets/teachers/icons/book.svg"
import heartIcon from "../../../../../../assets/teachers/icons/heart.svg"
import lightningIcon from "../../../../../../assets/teachers/icons/lightning.svg"
import stars from "../../../../../../assets/teachers/icons/stars.svg"

export const TeacherCardBack = ({
    name,
    videoUrl,
    superPower,
    favouriteWord,
    forStudent,
    hasPriority,

    onMore
}: Teacher & {onMore: () => void}) => {


    return(
        <article className={styles.container} onClick={onMore}>
            <h4 className={styles.name}>{name}</h4>

            {hasPriority ? <img src={stars} className={styles.stars}/> : <></>}

            <div className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.heading}>
                        <h5 className={styles.label}>Супер сили</h5>
                        <img className={styles.icon} src={lightningIcon} alt="" />
                    </div>

                    <ul className={styles.list}>
                        {superPower.map((power) => (
                            <li key={power}>{power}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section}>
                    <div className={styles.heading}>
                        <h5 className={styles.label}>Улюблене іспанське слово</h5>
                        <img className={styles.icon} src={heartIcon} alt="" />
                    </div>

                    <p className={styles.value}>{favouriteWord}</p>
                </section>

                <section className={`${styles.section} ${styles.studentSection}`}>
                    <div className={styles.heading}>
                        <h5 className={styles.label}>«Заради студента я готова...»</h5>
                        <img className={styles.icon} src={bookIcon} alt="" />
                    </div>

                    <p className={styles.value}>{forStudent}</p>
                </section>
            </div>

            <a className={styles.video} href={videoUrl} target="_blank" rel="noreferrer">
                <span className={styles.play} aria-hidden="true" />
                <span className={styles.videoLabel}>Відеовізитівка</span>
            </a>
        </article>
    )

}