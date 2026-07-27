import { useState } from "react"
import type { Teacher } from "../../types"
import { TeacherCardFront } from "./components/TeacherCardFront"
import { TeacherCardBack } from "./components/TeacherCardBack"

export const TeacherCard = (props: Teacher) => {

    const [isFlipped, setIsFlipped] = useState<boolean>(false)

    return(
        <div>
            {/* {isFlipped ?  */}
            {/* <TeacherCardBack {...props} onBack={() => setIsFlipped(false)}/> :  */}
            {/* <TeacherCardFront {...props} onMore={() => setIsFlipped(true)}/> */}
        </div>
    )

}