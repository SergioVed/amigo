import { useState } from "react"
import styles from "./index.module.css"
import questionsImage from "../../assets/questions/img.png"
import { questions } from "./utils/questions"
import { motion, stagger } from "motion/react"

const questionsVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.15)
        }
    }
}

const questionVariants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 110,
            damping: 15
        }
    }
}

export const Questions = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(0)

    const toggleQuestion = (index: number) => {
        setOpenQuestion(current => current === index ? null : index)
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.visual}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        ЧАСТІ<br />ЗАПИТАННЯ
                    </motion.h2>
                    <img src={questionsImage} alt="Рожевий телефон із повідомленням" />
                </div>

                <motion.div
                    className={styles.questions}
                    variants={questionsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {questions.map(({ question, answer }, index) => {
                        const isOpen = openQuestion === index

                        return (
                            <motion.article
                                className={styles.question}
                                key={question}
                                variants={questionVariants}
                            >
                                <button
                                    className={styles.question_button}
                                    type="button"
                                    onClick={() => toggleQuestion(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`question-answer-${index}`}
                                >
                                    <span>{question}</span>
                                    <span className={`${styles.icon} ${isOpen ? styles.icon_open : ""}`} aria-hidden="true" />
                                </button>

                                {isOpen && (
                                    <p className={styles.answer} id={`question-answer-${index}`}>
                                        {answer}
                                    </p>
                                )}
                            </motion.article>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
