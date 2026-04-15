import styles from "./input.module.css"

interface InputProps {
    placeholder: string
}

export const Input = ({placeholder}: InputProps) => {

    return (
        <input placeholder={placeholder}>

        </input>
    )
}