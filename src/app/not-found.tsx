import NotFoundPageSection from '../components/notFound/NotFoundPageSection'

export const metadata = {
    title: 'ASGeodezja | Nie odnaleziono',
    description:
        'Świadczymy najwyższej jakości usługi geodezyjne - mapy, inwentaryzacje, wytyczenia, podziały. Oferujemy atrakcyjne ceny, rzetelność i pełny profesjonalizm.',
}

const NotFoundPage = () => {
    return (
        <main>
            <NotFoundPageSection />
        </main>
    )
}

export default NotFoundPage
