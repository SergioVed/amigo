import styles from "./index.module.css"

interface SearchInputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

export const SearchInput = ({
    value,
    onChange,
    placeholder = "Search teachers by name or description...",
}: SearchInputProps) => {
    return (
        <label className={styles.container}>
            <img 
                src={require("../../public/icons/toolBar/search.png")}
                className={styles.icon}
            />

            <input
                className={styles.input}
                type="search"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                aria-label="Search teachers"
            />
        </label>
    )
}
