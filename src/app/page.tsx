import Header from '../components/header/Header'
import IntroductionSection from '../components/homepage/introductionSection/IntroductionSection'
import NewsSection from '../components/homepage/newSection/NewsSection'
import InformationsSection from '../components/homepage/informationsSection/InformationsSection'

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
