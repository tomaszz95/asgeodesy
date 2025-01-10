import Header from '../../components/header/Header'
import ContactSection from '../../components/contactPage/contactSection/ContactSection'
import MapSection from '../../components/contactPage/mapSection/MapSection'

export const metadata = {
    title: 'ASGeodezja | Kontakt',
    description: 'Informacje odnośnie dojazdu do firmy, miejsca położenie biura oraz godziny otwarcia.',
}

const ContactPage = () => {
    return (
        <main>
            <Header text="ASGeodezja - najlepsze sposoby kontaktu i godziny otwarcia firmy" site="contact" />
            <ContactSection />
            <MapSection />
        </main>
    )
}

export default ContactPage
