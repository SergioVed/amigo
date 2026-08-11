import instagramIcon from "../../assets/footer/instagram.svg"
import logo from "../../assets/footer/logo.png"
import telegramIcon from "../../assets/footer/telegram.svg"
import tiktokIcon from "../../assets/footer/tiktok.svg"
import styles from "./index.module.css"

const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/mariya_amarilla/?hl=uk", icon: instagramIcon },
    { label: "TikTok", href: "https://www.tiktok.com/@mari.amari_?_t=ZM-8znpvlQibxw&_r=1&fbclid=PAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadmCiZpqXf5T_pJ3aQXHZvT3ekuaEDq3Nk6N3rAKiCMIQrEGfeRaSLfNV8JIw", icon: tiktokIcon },
    { label: "Telegram", href: "https://t.me/mariya_amarilla", icon: telegramIcon },
]

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.card}>
                <img className={styles.logo} src={logo} alt="AMIGO" />
                <p className={styles.tagline}>Ми - йога для твого мозку</p>

                <nav className={styles.socials} aria-label="Соціальні мережі">
                    {socialLinks.map(({ label, href, icon }) => (
                        <a
                            className={styles.socialLink}
                            href={href}
                            key={label}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                        >
                            <img src={icon} alt="" aria-hidden="true" />
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    )
}
