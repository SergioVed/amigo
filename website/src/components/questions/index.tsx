import { useState } from "react"
import styles from "./index.module.css"
import questionsImage from "../../assets/questions/img.png"
import { questions } from "./utils/questions"

export const Questions = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(0)

    const toggleQuestion = (index: number) => {
        setOpenQuestion(current => current === index ? null : index)
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.visual}>
                    <h2>ЧАСТІ<br />ЗАПИТАННЯ</h2>
                    <img src={questionsImage} alt="Рожевий телефон із повідомленням" />
                </div>

                <div className={styles.questions}>
                    {questions.map(({ question, answer }, index) => {
                        const isOpen = openQuestion === index

                        return (
                            <article className={styles.question} key={question}>
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
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
