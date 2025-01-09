import Header from '../../components/header/Header'
import OfferSection from '../../components/servicesPage/offerSection/OfferSection'
import RealizationsSection from '../../components/servicesPage/realizationsSection/RealizationsSection'
import ReferencesSection from '../../components/servicesPage/referencesSection/ReferencesSection'

export const metadata = {
    title: 'ASGeodezja | Rodzaje usług geodezyjnych',
    description:
        'Dokładny spis usług geodezyjnych przeprowadzanych przez firmę ASGeodezja. Mapy do celów projektowych, pomiary powykonawcze, podziały i wznowienia.',
}

const ServicesPage = () => {
    return (
        <main>
            <Header text="ASGeodezja - rodzaje świadczonych usług geodezyjnych" site="services" />
            <OfferSection />
            <ReferencesSection />
            <RealizationsSection />
        </main>
    )
}

export default ServicesPage
