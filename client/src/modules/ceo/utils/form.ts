import { Ceo } from "../store/types"



export const createCeoForm = (ceo: Ceo | null) => {

    if (ceo === null) {
        return {
            name: "",
            email: "",
            description: "",
            telegram: "",
            instagram: ""
        }
    } else {
        return {
            name: ceo.name,
            email: ceo.email,
            description: ceo.description,
            telegram: ceo.telegram,
            instagram: ceo.instagram
        }
    }


}