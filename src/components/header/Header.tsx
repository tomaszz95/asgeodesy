import styles from './Header.module.css'

type ComponentType = {
    text: string
    site: string
}

const Header = ({ text, site }: ComponentType) => {
    const siteImage = site === 'homepage' ? styles.homepage : site === 'services' ? styles.services : styles.aboutus

    return (
        <header className={styles.header}>
            <div className={`${styles.image} ${siteImage}`}>
                <div className={styles.shadow}></div>
                <h1 className={styles.heading}>{text}</h1>
            </div>
        </header>
    )
}

export default Header
