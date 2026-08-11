import styles from "./index.module.css"
import LogoImage from "../../assets/header/logo.svg"
import MenuImage from "../../assets/header/menu.svg"
import { useEffect, useState } from "react"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener("keydown", closeOnEscape)
        return () => window.removeEventListener("keydown", closeOnEscape)
    }, [])

    const closeMenu = () => setIsMenuOpen(false)

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

                <button
                    className={styles.menuButton}
                    type="button"
                    aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
                    aria-controls="mobile-navigation"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((current) => !current)}
                >
                    <img className={styles.menu} src={MenuImage} alt=""/>
                </button>
            </div>

            {isMenuOpen && (
                <nav
                    className={styles.mobileNav}
                    id="mobile-navigation"
                    aria-label="Мобільна навігація"
                >
                    <a href="#ceo" onClick={closeMenu}>Про засновницю</a>
                    <a href="#advantages" onClick={closeMenu}>Переваги</a>
                    <a href="#teachers" onClick={closeMenu}>Викладачі</a>
                    <a href="#feedbacks" onClick={closeMenu}>Відгуки</a>
                    <a href="#prices" onClick={closeMenu}>Ціни</a>
                </nav>
            )}
        </header>
    )

}
