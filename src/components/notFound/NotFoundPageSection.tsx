import Image from 'next/image'
import Link from 'next/link'

import NotFoundImage from '../.././../public/photos/404.jpg'

import styles from './NotFoundPageSection.module.css'

const NotFoundPageSection = () => {
    return (
        <section className={styles.section}>
            <Image src={NotFoundImage} alt="Zdjęcie zamkniętych drzwi - nie odnaleziono strony" priority />
            <h3>Oops!</h3>
            <p>Wygląda na to, że strona której szukasz nie istnieje!</p>
            <Link href="/" aria-label='Link do strony głównej'>Przejdź do strony głównej</Link>
        </section>
    )
}

export default NotFoundPageSection
