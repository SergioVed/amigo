import type { AdvantageCardProps } from "../types"

import img1 from "../../../assets/advantages/img_1.png"
import img2 from "../../../assets/advantages/img_2.png"
import img3 from "../../../assets/advantages/img_3.png"
import img4 from "../../../assets/advantages/img_4.png"
import img5 from "../../../assets/advantages/img_5.png"
import img6 from "../../../assets/advantages/img_6.png"

export const advantages: AdvantageCardProps[] = [
    {
        title: "Школа для дорослих 16+",
        description: "Ми працюємо з дорослими — тому теми життєві: від першого побачення до тих самих слів, які не пишуть у підручниках",
        imageSrc: img1,
    },
    {
        title: "Тільки індивідуальні та парні уроки",
        description: "Ти — центр уроку! Максимум уваги викладача — тобі, твоїй цілі й твоєму темпу",
        imageSrc: img2
    },
    {
        title: "Індивідуальний підхід",
        description: "Ми не женемо всіх по одному сценарію — підлаштовуємо урок під твою ціль, темп і життя",
        imageSrc: img3
    },
    {
        title: "Інтерактивна платформа",
        description: "Усе навчання в сучасному онлайн-кабінеті: матеріали, домашки й прогрес завжди під рукою",
        imageSrc: img4
    },
    {
        title: "Безстрокові абонементи",
        description: "Оплата зберігається до року — без стресу «встигнути відходити»",
        imageSrc: img5
    },
    {
        title: "Оплата з будь-якої точки світу",
        description: "Будь-яка країна, будь-який банк — і так, навіть крипта",
        imageSrc: img6
    },
]
