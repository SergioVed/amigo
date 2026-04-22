import { AddButton } from "../AddButton"
import { CustomInput } from "../CustomInput"
import styles from "./index.module.css"
import { Dispatch, SetStateAction } from "react"

type FormValue = string | number

export interface FieldConfig<T extends object> {
    name: keyof T
    placeholder: string,
    label: string,
    isYellow?: boolean
}

interface AddFormPopupProps<T extends object> {
    form: T,
    setForm: Dispatch<SetStateAction<T>>,
    open: boolean,
    setOpen: (value: boolean) => void,
    title: string,
    fields: FieldConfig<T>[]
    onSubmit: () => void,
    children?: any
}

export const AddFormPopup = <T extends object>({open, setOpen, title, form, setForm, fields, onSubmit, children}: AddFormPopupProps<T>) => {

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
                    {fields.map(field => {
                        const fieldValue = form[field.name]
                        const inputValue: FormValue = typeof fieldValue === "number" || typeof fieldValue === "string"
                            ? fieldValue
                            : ""
                        
                        return (
                            <CustomInput
                                key={String(field.name)}
                                placeholder={field.placeholder}
                                value={inputValue}
                                label={field.label}
                                isYellow={field.isYellow}
                                type={typeof inputValue === "number" ? "number" : "text"}
                                onChange={(e) => {
                                    const nextValue = typeof fieldValue === "number"
                                        ? Number(e.target.value)
                                        : e.target.value

                                    setForm(prev => ({...prev, [field.name]: nextValue}))
                                }}
                            />
                        )
                    })}
                    {children}
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
