import type { Teacher } from "../../../../types"
import styles from "./index.module.css"
import priorityBg from "../../../../../../assets/teachers/cardPriority.png"
import starts from "../../../../../../assets/teachers/icons/stars.svg"

const experienceLabel = (years: number) => {
    const lastTwoDigits = years % 100
    const lastDigit = years % 10

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${years} років`
    if (lastDigit === 1) return `${years} рік`
    if (lastDigit >= 2 && lastDigit <= 4) return `${years} роки`
    return `${years} років`
}

export const TeacherCardFront = ({
    avatarUrl,
    name,
    description,
    experience,
    hasPriority,

    onMore
}: Teacher & { onMore: () => void }) => {

    return (
        <article
            className={styles.container}
            style={hasPriority ? { backgroundImage: `url(${priorityBg})` } : undefined}
        >
            <div className={styles.profile}>
                <div className={styles.info}>
                    <p className={styles.certificate}>
                        Certificado de profesora en Amigo
                    </p>

                    <div className={styles.details}>
                        <div className={styles.field}>
                            <h4 className={styles.name}>{name}</h4>
                            <span className={styles.label}>nombre</span>
                        </div>

                        <div className={styles.field}>
                            <p className={styles.experience}>{experienceLabel(experience)}</p>
                            <span className={styles.label}>experiencia</span>
                        </div>
                    </div>
                </div>

                <div className={styles.profileImageBox}>
                    <img
                        className={styles.avatar}
                        src={avatarUrl}
                        alt={`Викладачка ${name}`}
                    />
                    {hasPriority ? <img src={starts} className={styles.stars} /> : <></>}
                </div>

            </div>

            <p className={styles.description}>{description}</p>

            <button className={styles.more} type="button" onClick={onMore}>
                Більше
            </button>

        </article>
    )

}
