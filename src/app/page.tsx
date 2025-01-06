import Header from '../components/header/Header'
import IntroductionSection from '../components/homepage/introductionSection/IntroductionSection'

const Homepage = () => {
    return (
        <main>
            <Header
                text="ASGeodezja - kompleksowe usługi geodezyjne, pomiary terenowe i opracowanie dokumentacji"
                site="homepage"
            />
            <IntroductionSection />
        </main>
    )
}

export default Homepage
