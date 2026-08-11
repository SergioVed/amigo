import styles from "./index.module.css"
import LogoImage from "../../assets/header/logo.svg"
import MenuImage from "../../assets/header/menu.svg"

export const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <a className={styles.logoLink} href="#" aria-label="Amigo — на головну">
                    <img className={styles.logo} src={LogoImage} alt="Amigo"/>
                </a>

                <nav className={styles.desktopNav} aria-label="Головна навігація">
                    <a href="#ceo">Про засновницю</a>
                    <a href="#advantages">Переваги</a>
                    <a href="#teachers">Викладачі</a>
                    <a href="#feedbacks">Відгуки</a>
                    <a href="#prices">Ціни</a>
                </nav>

                <img className={styles.menu} src={MenuImage} alt="Open menu"/>
            </div>
        </header>
    )

}
