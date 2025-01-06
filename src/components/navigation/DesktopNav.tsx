import Link from 'next/link'

import styles from './DesktopNav.module.css'

const DesktopNav = () => {
    return (
        <ul className={styles.desktopNav}>
            <li className={styles.desktopLink}>
                <Link href="/" aria-label="Link do strony głównej">
                    Strona główna
                </Link>
            </li>
            <li className={styles.desktopLink}>
                <Link href="/uslugi" aria-label="Link do strony o usługach">
                    Usługi
                </Link>
            </li>
            <li className={styles.desktopLink}>
                <Link href="/o-nas" aria-label="Link do strony o nas">
                    O nas
                </Link>
            </li>
            <li className={styles.desktopLink}>
                <Link href="/kontakt" aria-label="Link do strony kontaktowej">
                    Kontakt
                </Link>
            </li>
        </ul>
    )
}

export default DesktopNav
