import styles from "./index.module.css"

export const CustomLoader = () => {
    return (
        <div className={styles.wrapper} aria-label="Loading" role="status">
            <span className={styles.spinner}></span>
        </div>
    )
}
