import styles from './SectionTitle.module.css'

type ComponentType = {
    children: React.ReactNode
}

const SectionTitle = ({ children }: ComponentType) => {
    return (
        <div className={styles.titleBox}>
            <h2 className={styles.title}>{children}</h2>
            <div className={styles.underline}></div>
        </div>
    )
}

export default SectionTitle
