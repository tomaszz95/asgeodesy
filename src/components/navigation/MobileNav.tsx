'use client'

import { useState } from 'react'

import Link from 'next/link'

import styles from './MobileNav.module.css'

const MobileNav = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const changeModalStatus = () => {
        setIsMobileNavOpen((prevValue) => !prevValue)
    }

    return (
        <>
            <button
                className={`${styles.burger} ${isMobileNavOpen ? styles.active : ''}`}
                aria-label="Otwieranie nawigacji mobilnej"
                onClick={changeModalStatus}
            >
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
            </button>
            {isMobileNavOpen && (
                <ul className={styles.mobileNav}>
                    <li className={styles.mobileLink}>
                        <Link href="/" onClick={() => setIsMobileNavOpen(false)} aria-label="Link do strony głównej">
                            Strona główna
                        </Link>
                    </li>
                    <li className={styles.mobileLink}>
                        <Link
                            href="/uslugi"
                            onClick={() => setIsMobileNavOpen(false)}
                            aria-label="Link do strony o usługach"
                        >
                            Usługi
                        </Link>
                    </li>
                    <li className={styles.mobileLink}>
                        <Link href="/o-nas" onClick={() => setIsMobileNavOpen(false)} aria-label="Link do strony o nas">
                            O nas
                        </Link>
                    </li>
                    <li className={styles.mobileLink}>
                        <Link
                            href="/kontakt"
                            onClick={() => setIsMobileNavOpen(false)}
                            aria-label="Link do strony kontaktowej"
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            )}
        </>
    )
}

export default MobileNav
