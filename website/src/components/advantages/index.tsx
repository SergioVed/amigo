import { AdvantageCard } from "./components/AdvantageCard"
import styles from "./index.module.css"
import { advantages } from "./utils"
import { motion } from "motion/react"

const getInitialAnimation = (index: number) => {
    if (index === 0 || index === 3) {
        return { x: -100, opacity: 0 }
    }

    if (index === 2 || index === 5) {
        return { x: 100, opacity: 0 }
    }

    return { opacity: 0 }
}

export const Advantages = () => {



    return(
        <section className={styles.outer} id="advantages">
            
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                ПУНДИКИ НАШОЇ ШКОЛИ
            </motion.h2>

            <div className={styles.container}>
                {advantages.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={getInitialAnimation(index)}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <AdvantageCard
                            index={index + 1}
                            title={item.title}
                            description={item.description}
                            imageSrc={item.imageSrc}
                        />
                    </motion.div>
                ))}
            </div>

        </section>
    )

}
