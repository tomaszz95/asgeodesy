import styles from './InformationsList.module.css'

const InformationsList = () => {
    return (
        <ul className={styles.newsList}>
            <li className={styles.card}>
                <div className={`${styles.cardFront} ${styles.blue}`}>
                    <h3>Godziny urzędowania</h3>
                    <p>&gt;&gt;Więcej informacji</p>
                </div>

                <div className={styles.cardBack}>
                    <span>Poniedziałek: 7:00 - 15:00</span>
                    <span>Wtorek: 7:00 - 15:00</span>
                    <span>Środa: 7:00 - 16:00</span>
                    <span>Czwartek: 7:00 - 15:00</span>
                    <span>Piątek: 7:00 - 14:00</span>
                </div>
            </li>
            <li className={styles.card}>
                <div className={`${styles.cardFront} ${styles.purple}`}>
                    <h3>Praktyki zawodowe</h3>
                    <p>&gt;&gt;Więcej informacji</p>
                </div>

                <div className={styles.cardBack}>
                    <p>
                        Nasza firma oferuje możliwość zdobycia cennego doświadczenia podczas praktyk zawodowych.
                        Współpracujemy z uczelniami oraz szkołami, by pomóc młodym talentom rozwijać swoje umiejętności
                        w praktycznym środowisku.
                    </p>
                    <p>
                        Praktykanci mają szansę uczestniczyć w ciekawych projektach, które pozwalają im zdobywać wiedzę
                        oraz przygotować się do przyszłej pracy w branży. Zachęcamy do kontaktu w celu omówienia
                        szczegółów.
                    </p>
                </div>
            </li>
            <li className={styles.card}>
                <div className={`${styles.cardFront} ${styles.pink}`}>
                    <h3>Oferta pracy</h3>
                    <p>&gt;&gt;Więcej informacji</p>
                </div>
                <div className={styles.cardBack}>
                    <p>
                        Poszukujemy zaangażowanych osób, które chcą rozwijać swoją karierę w naszej firmie. Oferujemy
                        stabilne zatrudnienie, możliwość awansu oraz pracę w dynamicznym i przyjaznym zespole.
                    </p>
                    <p>
                        Nasza oferta pracy obejmuje różnorodne stanowiska w zależności od Twoich umiejętności i
                        doświadczenia. Zapewniamy szkolenia, które pomogą Ci szybko wdrożyć się w nowe obowiązki.
                        Skontaktuj się z nami, aby dowiedzieć się więcej.
                    </p>
                </div>
            </li>
        </ul>
    )
}

export default InformationsList
