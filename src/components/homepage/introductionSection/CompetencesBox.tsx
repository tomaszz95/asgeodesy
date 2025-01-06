import Image from 'next/image'
import Link from 'next/link'

import SectionTitle from '../../../components/UI/SectionTitle'

import CompetencesImage from '../../../../public/photos/info.jpg'

import styles from './CompetencesBox.module.css'

const CompetencesBox = () => {
    return (
        <div className={styles.box}>
            <SectionTitle>Usługi</SectionTitle>
            <div className={styles.contentBox}>
                <div className={styles.textBox}>
                    <p>
                        Oferujemy<b> kompleksowe usługi z zakresu geodezji klasycznej oraz geodezji inżynieryjnej </b>
                        dla dużych firm budowlanych, małych inwestorów oraz osób prywatnych. Sporządzamy mapy do celów
                        projektowych, wykonujemy pomiary powykonawcze i tyczymy obiekty budowlane.
                    </p>
                    <p>
                        W zakres naszych kompetencji wchodzą również
                        <b>
                            {' '}
                            podziały nieruchomości, wznowienia znaków granicznych, czy geodezyjna obsługa inwestycji.{' '}
                        </b>
                        Wykonujemy zlecenia głównie na terenie całego województwa śląskiego, świętokrzyskiego oraz
                        części małopolskiego i opolskiego.
                    </p>
                    <Link href="/uslugi" aria-label="Idź do strony o usługach" className={styles.link}>
                        Sprawdź naszą ofertę
                    </Link>
                </div>
                <Image src={CompetencesImage} alt="Geodeta obsługujący sprzęt mierniczy na tle toczącej się budowy" />
            </div>
        </div>
    )
}

export default CompetencesBox
