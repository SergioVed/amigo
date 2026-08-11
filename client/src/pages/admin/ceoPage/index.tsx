import { useEffect, useState } from "react"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import { fetchCeoAction, updateCeoAction } from "../../../modules/ceo/store/actions"
import { InfoGrid } from "../../../modules/ceo/components/infoGrid"
import { CustomLoader } from "../../../ui/CustomLoader"
import styles from "./index.module.css"
import { UpdateCeoForm } from "../../../modules/ceo/types"
import { createCeoForm } from "../../../modules/ceo/utils/form"
import { CustomInput } from "../../../ui/CustomInput"
import { CeoEditContext } from "../../../modules/ceo/utils/context"
import { AddImageInput } from "../../../ui/AddImageInput"

export const CeoPage = () => {

    const { loading, ceo, isFetched } = useTypedSelector(state => state.ceo)
    const dispatch = useAppDispatch()

    const [imageError, setImageError] = useState(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [form, setForm] = useState<UpdateCeoForm>({})
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    function saveCeo(form: UpdateCeoForm) {
        dispatch(updateCeoAction(form, selectedFile))
        setSelectedFile(null)
        setIsEditing(false)
    }

    function cancelCeoUpdate() {
        setForm(createCeoForm(ceo))
        setSelectedFile(null)
        setIsEditing(false)
    }

    function handleSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        setSelectedFile(e.target.files?.[0] ?? null)
    }

    useEffect(() => {
        if (ceo) {
            setForm(createCeoForm(ceo))
            setImageError(false)
        }
    }, [ceo, ceo?.image])

    useEffect(() => {
        if (!loading && !isFetched) {
            dispatch(fetchCeoAction())
        }
    }, [dispatch, isFetched, loading])

    if (!ceo) {
        return (
            <CustomLoader />
        )
    }

    return (
        <CeoEditContext.Provider value={{isEditing}}>

            <div className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.avatarWrap}>
                        {ceo.image && !imageError ? (
                            <img
                                src={ceo.image}
                                alt={ceo.name}
                                className={styles.avatar}
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <span className={styles.avatarFallback}>{ceo.name.charAt(0)}</span>
                        )}
                    </div>

                    <div className={styles.heroInfo}>
                        {isEditing
                            ? <>
                                <CustomInput
                                    placeholder="Enter Name ..."
                                    value={form.name ?? ceo.name}
                                    label="Enter your name"
                                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                                />
                                <AddImageInput handleSelectFile={handleSelectFile}/>
                            </>
                            : <h2 className={styles.name}>{ceo.name}</h2>
                        }
                    </div>

                    <div className={styles.actions}>
                        {isEditing ? (
                            <>
                                <button
                                    className={`${styles.actionButton} ${styles.primaryButton}`}
                                    type="button"
                                    onClick={() => saveCeo(form)}
                                >
                                    Save
                                </button>
                                <button
                                    className={`${styles.actionButton} ${styles.secondaryButton}`}
                                    type="button"
                                    onClick={cancelCeoUpdate}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                className={`${styles.actionButton} ${styles.primaryButton}`}
                                type="button"
                                onClick={() => setIsEditing(true)}
                            >
                                Update
                            </button>
                        )}
                    </div>
                </section>

                <InfoGrid ceo={ceo} form={form} setForm={setForm} isEditing={isEditing} />
            </div>

        </CeoEditContext.Provider>

    )
}
