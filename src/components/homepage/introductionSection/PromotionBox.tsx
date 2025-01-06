import Image from 'next/image'
import Link from 'next/link'

import SectionTitle from '../../../components/UI/SectionTitle'

import PromotionImage from '../../../../public/photos/info2.jpg'

import styles from './PromotionBox.module.css'

const PromotionBox = () => {
    return (
        <div className={styles.box}>
            <SectionTitle>O nas</SectionTitle>
            <div className={styles.contentBox}>
                <Image src={PromotionImage} alt="Sprzęt geodezyjny na tle koparki oraz budowlańców gdzieś w lesie" />
                <div className={styles.textBox}>
                    <p>
                        Jesteśmy profesionalną i nowoczesną firmą geodezyjną, w której skład wchodzą geodeci uprawnieni
                        oraz liczna kadra inżynierska i techniczna z wieloletnim doświadczeniem zawodowym.{' '}
                        <b>Posiadamy najnowszy sprzęt geodezyjny, który umożliwia kompleksowe i rzetelne wykonywanie</b>{' '}
                        zleconych prac.
                    </p>
                    <p>
                        Działamy zawsze zgodnie z literą prawa, gwarantując klientom wykonanie usług na{' '}
                        <b>najwyższym poziomie, niezależnie od stopnia jej skomplikowania.</b> Oferujemy fachową
                        obsługę, stały i łatwy kontakt w razie jakichkolwiek pytań, czy wątpliwości oraz szybki czas
                        wykonywania zleceń.
                    </p>
                    <Link href="/o-nas" aria-label="Idź do strony o nas" className={styles.link}>
                        Poznaj nas
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PromotionBox
