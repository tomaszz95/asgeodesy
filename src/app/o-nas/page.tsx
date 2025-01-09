import Header from '../../components/header/Header'
import HistorySection from '../../components/aboutusPage/historySection/HistorySection'
import TeamSection from '../../components/aboutusPage/teamSection/TeamSection'

export const metadata = {
    title: 'ASGeodezja | Informacje o firmie',
    description:
        'Informację odnośnie firmy ASGeodezja. Jej historia, referencje oraz realizacje, a także lista pracowników i godziny otwarcia.',
}

const AboutusPage = () => {
    return (
        <main>
            <Header text="ASGeodezja - informacje o firmie, pracownikach, realizacjach" site="aboutus" />
            <HistorySection />
            <TeamSection />
        </main>
    )
}

export default AboutusPage
