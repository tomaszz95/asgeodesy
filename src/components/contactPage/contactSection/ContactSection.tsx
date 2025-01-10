import Image from 'next/image'

import SectionTitle from '../../../components/UI/SectionTitle'
import ContactData from './ContactData'

import ContactImage from '../../../../public/photos/contact.jpg'

import styles from './ContactSection.module.css'

const ContactSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle>Kontakt</SectionTitle>
            <div className={styles.content}>
                <ContactData />
                <Image src={ContactImage} alt="Budynek - siedziba firmy" />
            </div>
        </section>
    )
}

export default ContactSection
