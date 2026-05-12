import { useEffect } from "react"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useActionData } from "react-router-dom"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import { fetchCeoAction } from "../../../modules/ceo/store/actions"
import { InfoBlock } from "../../../modules/ceo/components/infoBlock"
import { InfoGrid } from "../../../modules/ceo/components/infoGrid"
import { CustomLoader } from "../../../ui/CustomLoader"

export const CeoPage = () => {

    const {loading, error, ceo, isFetched} = useTypedSelector(state => state.ceo)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!loading && !isFetched) {
            dispatch(fetchCeoAction())
        }
    }, [])

    if (!ceo) {
        return (
            <CustomLoader/>
        )
    }

    return (
        <div style={{padding: "0rem 5rem"}}>
            <InfoGrid ceo={ceo}/>
        </div>
    )
}