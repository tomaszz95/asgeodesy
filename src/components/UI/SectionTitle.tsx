import styles from './SectionTitle.module.css'

type ComponentType = {
    children: React.ReactNode
    reverse?: boolean
}

const SectionTitle = ({ children, reverse }: ComponentType) => {
    return (
        <div className={styles.titleBox}>
            <h2 className={`${styles.title} ${reverse ? styles.reverse : ''}`}>{children}</h2>
            <div className={`${styles.underline} ${reverse ? styles.reverse : ''}`}></div>
        </div>
    )
}

export default SectionTitle
