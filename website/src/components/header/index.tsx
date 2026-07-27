import styles from "./index.module.css"
import LogoImage from "../../assets/header/logo.svg"
import MenuImage from "../../assets/header/menu.svg"

export const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <img src={LogoImage} alt="Amigo"/>
                <img src={MenuImage} alt="Open menu"/>
            </div>
        </header>
    )

}
