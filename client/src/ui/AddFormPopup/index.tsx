import { AddButton } from "../AddButton"
import { CustomInput } from "../CustomInput"
import styles from "./index.module.css"
import { Dispatch, SetStateAction } from "react"

type FormValues = Record<string, string>

export interface FieldConfig<T extends FormValues> {
    name: keyof T
    placeholder: string,
    label: string,
    isYellow?: boolean
}

interface AddFormPopupProps<T extends FormValues> {
    form: T,
    setForm: Dispatch<SetStateAction<T>>,
    open: boolean,
    setOpen: (value: boolean) => void,
    title: string,
    fields: FieldConfig<T>[]
    onSubmit: () => void
}

export const AddFormPopup = <T extends FormValues>({open, setOpen, title, form, setForm, fields, onSubmit}: AddFormPopupProps<T>) => {

    return (
        <div 
            className={styles.overlay}
            style={open ? {display: "flex"} : {display: "none"}}    
            onClick={() => {
                setOpen(false)
            }}
        >
            <div
                className={styles.container}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation()
                }}
            >
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}>Fill in the fields below to create a new item.</p>
                </div>

                <div className={styles.fields}>
                    {fields.map(field => (
                        <CustomInput
                            key={String(field.name)}
                            placeholder={field.placeholder}
                            value={form[field.name]}
                            label={field.label}
                            isYellow={field.isYellow}
                            onChange={(e) => {
                                setForm(prev => ({...prev, [field.name]: e.target.value}))
                            }}
                        />
                    ))}
                </div>

                <div className={styles.actions}>
                    <AddButton 
                        text="Save"
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </div>

    )
}
