import styles from './ContactData.module.css'

const ContactData = () => {
    return (
        <div className={styles.contactBox}>
            <div className={styles.contactInfo}>
                <h3>Dane kontaktowe:</h3>
                <span>ul. Spokojna 23</span>
                <span>00-000 Warszawa</span>
                <span>123 456 789</span>
                <span>asgeodezja@gmail.com</span>
            </div>
            <div className={styles.contactInfo}>
                <h3>Godziny otwarcia:</h3>
                <ul className={styles.contactInfoList}>
                    <li>
                        Poniedziałek: <span>7:00 - 15:00</span>
                    </li>
                    <li>
                        Wtorek: <span>7:00 - 15:00</span>
                    </li>
                    <li>
                        Środa: <span>7:00 - 16:00</span>
                    </li>
                    <li>
                        Czwartek: <span>7:00 - 15:00</span>
                    </li>
                    <li>
                        Piątek: <span>7:00 - 14:00</span>
                    </li>
                </ul>
            </div>
            <p>
                Niezależnie od dnia prosimy najpierw o kontakt telefoniczny! <br /> (możemy być poza biurem / w terenie)
            </p>
        </div>
    )
}

export default ContactData
