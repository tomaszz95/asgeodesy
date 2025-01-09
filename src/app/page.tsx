import Header from '../components/header/Header'
import IntroductionSection from '../components/homepage/introductionSection/IntroductionSection'
import NewsSection from '../components/homepage/newSection/NewsSection'
import InformationsSection from '../components/homepage/informationsSection/InformationsSection'

export const metadata = {
    title: 'ASGeodezja | Usługi geodezyjne',
    description:
        'Świadczymy najwyższej jakości usługi geodezyjne - mapy, inwentaryzacje, wytyczenia, podziały. Oferujemy atrakcyjne ceny, rzetelność i pełny profesjonalizm.',
}

const Homepage = () => {
    return (
        <main>
            <Header
                text="ASGeodezja - kompleksowe usługi geodezyjne, pomiary terenowe i opracowanie dokumentacji"
                site="homepage"
            />
            <IntroductionSection />
            <NewsSection />
            <InformationsSection />
        </main>
    )
}

export default Homepage
