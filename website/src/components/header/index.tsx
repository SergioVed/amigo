import styles from "./index.module.css"
import LogoImage from "../../assets/header/logo.svg"
import MenuImage from "../../assets/header/menu.svg"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const mobileMenuAnimation = {
    hidden: { opacity: 0, y: -18, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut" as const,
            staggerChildren: 0.04,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: -12,
        scale: 0.98,
        transition: { duration: 0.18, ease: "easeIn" as const },
    },
}

const mobileLinkAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
}

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

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className={styles.mobileNav}
                        id="mobile-navigation"
                        aria-label="Мобільна навігація"
                        variants={mobileMenuAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.a variants={mobileLinkAnimation} href="#ceo" onClick={closeMenu}>Про засновницю</motion.a>
                        <motion.a variants={mobileLinkAnimation} href="#advantages" onClick={closeMenu}>Переваги</motion.a>
                        <motion.a variants={mobileLinkAnimation} href="#teachers" onClick={closeMenu}>Викладачі</motion.a>
                        <motion.a variants={mobileLinkAnimation} href="#feedbacks" onClick={closeMenu}>Відгуки</motion.a>
                        <motion.a variants={mobileLinkAnimation} href="#prices" onClick={closeMenu}>Ціни</motion.a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )

}
