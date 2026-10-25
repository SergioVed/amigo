// Snapshot of public content from local PostgreSQL. Edit this file to update the website.
// Database timestamps are preserved as ISO strings; authentication data is excluded.
import type { Teacher } from './components/teachers/types'
import type { FeedbackProps } from './components/feedbacks/types'
import type { PriceProps } from './components/prices/types'
import type { CeoInfo } from './components/ceo/types'

type SavedRecord<T> = T & { id: number; createdAt: string; updatedAt: string }

export const teachers: SavedRecord<Teacher>[] = [
  {
    "id": 23,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786485416/amigo/feedback/ozvcgvm8oe4jonz4vxab.png",
    "hasPriority": true,
    "name": "Марі",
    "description": "Викладач білінгв (ісп - укр) Жила 7 років в Іспанії, де вивчила іспанську.",
    "experience": 8,
    "videoUrl": "https://www.instagram.com/academia_amigo",
    "superPower": "емоція та харизма",
    "favouriteWord": "Estupendo",
    "forStudent": "відкрити найкращу friendly-школу іспанської",
    "language": "SPANISH",
    "createdAt": "2026-08-11T21:56:55.652Z",
    "updatedAt": "2026-08-11T21:56:55.652Z"
  },
  {
    "id": 24,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786485535/amigo/feedback/jrn6byfvsulggdlk5dph.jpg",
    "hasPriority": false,
    "name": "Марія",
    "description": "Екзаменаторка DELE. Бакалавр філології.",
    "experience": 5,
    "videoUrl": "https://www.instagram.com/reel/DIT4k2gtWU6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    "superPower": "Мегакомунікабельність та пояснювати складне зрозуміло",
    "favouriteWord": "Sobremesa — час після їжі, коли нікуди не поспішаєш і просто насолоджуєшся компанією.",
    "forStudent": "Придумати 1001 спосіб пояснити незрозумілу тему.",
    "language": "SPANISH",
    "createdAt": "2026-08-11T21:58:53.983Z",
    "updatedAt": "2026-09-26T14:35:01.004Z"
  },
  {
    "id": 25,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1790433377/amigo/teacher/tpkgl3zeubjzecngfd3w.jpg",
    "hasPriority": false,
    "name": "Лія",
    "description": "Сертифікат DELE рівня В2. Випускниця лінгвістичного факультету ЛНУ.",
    "experience": 4,
    "videoUrl": "https://www.instagram.com/academia_amigo",
    "superPower": "Спокій у будь-якій ситуації. Любов до іспанської",
    "favouriteWord": "Serenidad — спокій та внутрішня гармонія.",
    "forStudent": "Пояснити будь-яку тему з гумором і класними прикладами.",
    "language": "SPANISH",
    "createdAt": "2026-08-11T22:00:41.398Z",
    "updatedAt": "2026-09-26T14:36:17.808Z"
  },
  {
    "id": 26,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1790433555/amigo/teacher/e5qzuaw5plroh4izzsya.jpg",
    "hasPriority": false,
    "name": "Марʼяна",
    "description": "Сертифікат DELE рівня С1. Вивчила іспанську в ЛНУ.",
    "experience": 3,
    "videoUrl": "https://www.instagram.com/reel/C7WvVSdN8y1/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ==",
    "superPower": "Пояснювати тему з гумором та знаходити спільну мову зі студентом",
    "favouriteWord": "Serendipia — коли випадково знаходиш щось цікаве, чого зовсім не шукав.",
    "forStudent": "Знайти 1000 асоціацій, щоб тема точно запам’яталась.",
    "language": "SPANISH",
    "createdAt": "2026-08-11T22:02:48.377Z",
    "updatedAt": "2026-09-26T14:39:15.689Z"
  },
  {
    "id": 27,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786555805/amigo/teacher/fcrfhoq2eozvbrkmkgvy.jpg",
    "hasPriority": false,
    "name": "Ірене",
    "description": "Кілька років досліджувала Мексику та Іспанію. Вивчала мову з носіями та пройшла шлях від A0 до B2.",
    "experience": 4,
    "videoUrl": "https://www.instagram.com/reel/Cx-_WhAtb_m/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ==",
    "superPower": "Бути на одній хвилі зі студентом. Знаходити підхід до кожного",
    "favouriteWord": "Ojalá — якби! / хоч би!",
    "forStudent": "Знаходити вправи, які допоможуть засвоїти матеріал на 100%.",
    "language": "SPANISH",
    "createdAt": "2026-08-11T22:04:27.631Z",
    "updatedAt": "2026-09-26T14:37:49.485Z"
  },
  {
    "id": 28,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786485960/amigo/feedback/b3gwwmc0eav34lu4jksg.jpg",
    "hasPriority": false,
    "name": "Анна",
    "description": "Сертифікат DELE рівня С1. Іспанську вивчала в КНЛУ та Університеті Барселони. 8 років життя в Іспанії = багато живої мови та сленгу.",
    "experience": 10,
    "videoUrl": "https://www.instagram.com/reel/C9fHTRBtofy/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ==",
    "superPower": "Гнучкість та емпатія та знаходити підхід до кожного",
    "favouriteWord": "Venga va! — ну вперед, давай!",
    "forStudent": "Ділитися фішками розмовної мови, яких не знайдеш у підручниках.",
    "language": "SPANISH",
    "createdAt": "2026-08-11T22:05:58.635Z",
    "updatedAt": "2026-09-26T14:40:19.334Z"
  },
  {
    "id": 29,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1790433705/amigo/teacher/d39jn6lymdth2h2t2irc.jpg",
    "hasPriority": false,
    "name": "Діана",
    "description": "Сертифікат DELE рівня B2. Вже декілька років мешкає в Іспанії.",
    "experience": 5,
    "videoUrl": "https://www.instagram.com/reel/DbODAtAMFqz/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    "superPower": "Знаходити асоціацію до кожного слова",
    "favouriteWord": "Tumbao — ритмічний та плавний рух під латиноамериканську музику.",
    "forStudent": "Шукати найцікавіші серіали та пісні, щоб навчання було ще веселішим.",
    "language": "SPANISH",
    "createdAt": "2026-08-11T22:08:51.897Z",
    "updatedAt": "2026-09-26T14:41:46.319Z"
  },
  {
    "id": 30,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1790433207/amigo/teacher/l2ebkxurrw7gcwrad2x5.jpg",
    "hasPriority": false,
    "name": "Марина",
    "description": "Підтвердила англійську на рівні C2 (CAE) та прокачала розмовну мову з нейтівами в Англії.",
    "experience": 4,
    "videoUrl": "https://www.instagram.com/reel/DXHnb1-jAZs/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ==",
    "superPower": "закохати в англійську пояснювати складне просто",
    "favouriteWord": "cherish — плекати, ніжно любити, берегти та високо цінувати щось або когось ❤️",
    "forStudent": "бути не просто викладачем, а твоїм головним вболівальником",
    "language": "ENGLISH",
    "createdAt": "2026-09-26T14:33:28.227Z",
    "updatedAt": "2026-09-26T14:33:28.227Z"
  },
  {
    "id": 31,
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1790433786/amigo/teacher/htuv6uabyjipssjcztru.jpg",
    "hasPriority": false,
    "name": "Катя",
    "description": "Сертифікат DELE C1. Закінчила магістратуру у Universidad de Murcia, Literatura Comparada Europea",
    "experience": 11,
    "videoUrl": "https://www.instagram.com/reel/DFqHrpCNUJO/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ==",
    "superPower": "Розговорити навіть найсором’язливішого студента.",
    "favouriteWord": "El melocotón — персик. Просто звучить дуже красиво 🍑",
    "forStudent": "Пожертвувати навіть власним сном 😴",
    "language": "SPANISH",
    "createdAt": "2026-09-26T14:43:07.402Z",
    "updatedAt": "2026-09-26T14:43:07.402Z"
  }
]

export const feedbacks: SavedRecord<FeedbackProps>[] = [
  {
    "id": 43,
    "name": "Анастасія",
    "description": "Найкраще рішення, яке я прийняла цього року ❤️  Тут реально слухають студента. Якщо бачу, що якась тема \"не заходить\", ми шукаємо інший спосіб пояснення. Якщо хочеться більше говоріння - буде більше говоріння. Якщо треба підтягнути граматику - змінюємо план. Немає відчуття конвеєра взагалі.",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786486994/amigo/feedback/pniqkcqrepj9h8eenryb.jpg",
    "createdAt": "2026-08-11T15:59:18.668Z",
    "updatedAt": "2026-08-11T22:23:12.545Z"
  },
  {
    "id": 44,
    "name": "Софія",
    "description": "Було страшно починати, бо я взагалі не вірила, що зможу говорити іспанською. Але на уроках настільки комфортна атмосфера, що перестаєш боятися помилятися. Викладач не перебиває кожні дві секунди, а дуже делікатно направляє. У якийсь момент я просто зрозуміла, що вже говорю 😍 Саме цього мені не вистачало на інших курсах.",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786487006/amigo/feedback/mecwj0nowo1ujnsonahu.jpg",
    "createdAt": "2026-08-11T15:59:19.871Z",
    "updatedAt": "2026-08-11T22:23:24.759Z"
  },
  {
    "id": 45,
    "name": "Марія",
    "description": "Якщо чесно, я довго відкладала іспанську, бо після попередніх курсів була впевнена, що це просто не моє 😅 Але тут усе взагалі поіншому. Викладач не просто пояснює тему, а реально бачить, де саме в тебе проблема, і підлаштовує урок під це. Немає відчуття, що ти йдеш за якоюсь жорсткою програмою. Навпаки, тебе ніби дуже спокійно ведуть до результату. Окремий кайф є ваша платформа. Усі матеріали, домашки, слова, нотатки в одному місці. Дуже зручно ❤️",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786487015/amigo/feedback/q2yrvh4jzjajx98f7jch.jpg",
    "createdAt": "2026-08-11T15:59:23.295Z",
    "updatedAt": "2026-08-11T22:23:34.869Z"
  },
  {
    "id": 46,
    "name": "Дарина",
    "description": "Я змінила вже трьох викладачів до цього, тому є з чим порівняти. Тут уперше виникло відчуття, що викладач працює саме зі мною, а не просто проводить урок за шаблоном. Пояснення дуже живі, багато прикладів із життя, і якось усе складається в голові без зайвого стресу 😊",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786487031/amigo/feedback/b6zuobg15viskvgd4lg3.webp",
    "createdAt": "2026-08-11T15:59:49.298Z",
    "updatedAt": "2026-08-11T22:23:49.659Z"
  },
  {
    "id": 47,
    "name": "Вікторія",
    "description": "Окремий плюс за те, що уроки проходять дуже легко. Година пролітає взагалі непомітно 😅 При цьому після кожного заняття є відчуття, що справді навчився чомусь новому. Дуже подобається, що викладач не тисне, а поступово веде вперед. Саме тому не хочеться кидати навчання.",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786487038/amigo/feedback/iomiuptswy6hnyiiohrz.jpg",
    "createdAt": "2026-08-11T16:00:00.679Z",
    "updatedAt": "2026-08-11T22:23:57.244Z"
  },
  {
    "id": 48,
    "name": "Катерина",
    "description": "Мені найбільше подобається, що в АМІГО не змушують зубрити правила. Ми спочатку починаємо говорити, а вже потім я сама розумію, чому правило працює саме так 😄 Для мене це було відкриття. Викладач завжди підлаштовує урок під мої запити. Був період, коли мені терміново треба було підтягнути розмовну іспанську перед поїздкою, і ми повністю змінили фокус занять. Це дуже цінно 🙌",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786487049/amigo/feedback/j7dlfaxmiduyizt3h2zy.jpg",
    "createdAt": "2026-08-11T16:00:10.272Z",
    "updatedAt": "2026-08-11T22:24:08.011Z"
  },
  {
    "id": 49,
    "name": "Аліна",
    "description": "Мені дуже подобається підхід викладача. Замість того щоб засипати правилами, ми поступово будуємо розуміння мови. Якщо щось не виходить, мені пояснять ще раз, але вже іншими словами чи через приклади. Це взагалі не схоже на школу 😄",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786487064/amigo/feedback/znl5pkluopuyc8obscn3.jpg",
    "createdAt": "2026-08-11T16:00:18.783Z",
    "updatedAt": "2026-08-11T22:24:23.045Z"
  },
  {
    "id": 50,
    "name": "Юлія",
    "description": "Я люблю порядок, тому ваша платформа для мене просто знахідка 😍 Усі слова, матеріали, домашні завдання, навіть мої нотатки -все залишається в одному місці. Не потрібно шукати щось у чатах чи блокнотах. Через це навчання стало набагато простішим.",
    "avatarUrl": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786487074/amigo/feedback/bewrc4qcyyayse3ad9nq.jpg",
    "createdAt": "2026-08-11T16:00:24.643Z",
    "updatedAt": "2026-08-11T22:24:33.006Z"
  }
]

export const prices: SavedRecord<PriceProps>[] = [
  {
    "id": 18,
    "amount": 450,
    "title": "Пробний урок",
    "description": "Some text",
    "type": "individual",
    "category": "trial",
    "createdAt": "2026-07-31T19:09:52.144Z",
    "updatedAt": "2026-07-31T19:09:52.144Z"
  },
  {
    "id": 19,
    "amount": 775,
    "title": "Разовий урок",
    "description": "Some text",
    "type": "individual",
    "category": "single",
    "createdAt": "2026-07-31T19:10:22.582Z",
    "updatedAt": "2026-08-03T18:30:08.242Z"
  },
  {
    "id": 20,
    "amount": 800,
    "title": "Урок з Марі",
    "description": "фіксована ціна за урок",
    "type": "individual",
    "category": "with_mari",
    "createdAt": "2026-07-31T19:10:56.022Z",
    "updatedAt": "2026-08-12T19:57:35.354Z"
  },
  {
    "id": 21,
    "amount": 2900,
    "title": "4 уроки",
    "description": "$725 / урок",
    "type": "individual",
    "category": "subscription",
    "createdAt": "2026-07-31T19:11:52.898Z",
    "updatedAt": "2026-08-03T18:30:35.088Z"
  },
  {
    "id": 22,
    "amount": 5600,
    "title": "8 уроків",
    "description": "$700 / урок",
    "type": "individual",
    "category": "subscription",
    "createdAt": "2026-07-31T19:12:19.187Z",
    "updatedAt": "2026-08-03T18:30:31.390Z"
  },
  {
    "id": 23,
    "amount": 8100,
    "title": "12 уроків",
    "description": "$675 / урок",
    "type": "individual",
    "category": "subscription",
    "createdAt": "2026-07-31T19:14:50.834Z",
    "updatedAt": "2026-08-03T18:30:28.101Z"
  },
  {
    "id": 24,
    "amount": 6300,
    "title": "12 уроків",
    "description": "$525 / урок",
    "type": "pair",
    "category": "subscription",
    "createdAt": "2026-07-31T19:15:28.971Z",
    "updatedAt": "2026-08-03T18:30:40.591Z"
  },
  {
    "id": 25,
    "amount": 4360,
    "title": "8 уроків",
    "description": "$545 / урок",
    "type": "pair",
    "category": "subscription",
    "createdAt": "2026-07-31T19:16:02.720Z",
    "updatedAt": "2026-08-03T18:30:45.924Z"
  },
  {
    "id": 26,
    "amount": 2250,
    "title": "4 уроки",
    "description": "$562,50 / урок",
    "type": "pair",
    "category": "subscription",
    "createdAt": "2026-07-31T19:16:30.872Z",
    "updatedAt": "2026-08-03T18:30:49.473Z"
  },
  {
    "id": 27,
    "amount": 620,
    "title": "Урок з Марі",
    "description": "Фіксована ціна за урок",
    "type": "pair",
    "category": "with_mari",
    "createdAt": "2026-07-31T19:17:09.572Z",
    "updatedAt": "2026-08-03T18:30:55.024Z"
  },
  {
    "id": 28,
    "amount": 595,
    "title": "Разовий урок",
    "description": "Some text",
    "type": "pair",
    "category": "single",
    "createdAt": "2026-07-31T19:17:33.440Z",
    "updatedAt": "2026-08-03T18:30:59.405Z"
  },
  {
    "id": 29,
    "amount": 270,
    "title": "Пробний урок",
    "description": "Some text",
    "type": "pair",
    "category": "trial",
    "createdAt": "2026-07-31T19:17:45.807Z",
    "updatedAt": "2026-07-31T19:17:45.807Z"
  }
]

export const ceos: SavedRecord<CeoInfo>[] = [
  {
    "id": 1,
    "name": "Марі",
    "email": "amigotestsiski@gmail.com",
    "description": "7 років життя в Іспанії навчили мене однієї простої речі: мова змінює життя. Саме тому я створила  AMIGO — школу, де кожен студент знаходить свою людину для вивчення мови.",
    "telegram": "@john_doe",
    "instagram": "@john.doe",
    "image": "https://res.cloudinary.com/dj39usfe5/image/upload/v1786488306/amigo/feedback/rlkkk2osau8eoa6ztxog.png",
    "createdAt": "2026-03-29T23:12:30.244Z",
    "updatedAt": "2026-09-26T14:53:14.378Z"
  }
]

