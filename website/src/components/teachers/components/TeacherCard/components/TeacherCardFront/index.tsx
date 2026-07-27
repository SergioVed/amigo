import type { Teacher } from "../../../../types"
import styles from "./index.module.css"

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
}: Teacher) => {

    return(
        <article className={styles.container}>
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

                <img
                    className={styles.avatar}
                    src={avatarUrl}
                    alt={`Викладачка ${name}`}
                />
            </div>

            <p className={styles.description}>{description}</p>

            <button className={styles.more} type="button" onClick={() => null}>
                Більше
            </button>

        </article>
    )

}
