import { AdvantageCard } from "./components/AdvantageCard"
import styles from "./index.module.css"
import { advantages } from "./utils"

export const Advantages = () => {



    return(
        <section className={styles.outer} id="advantages">
            
            <h2>ПУНДИКИ НАШОЇ ШКОЛИ</h2>

            <div className={styles.container}>
                {advantages.map((item, index) => (
                    <AdvantageCard
                        index={index + 1}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                    />
                ))}
            </div>

        </section>
    )

}
