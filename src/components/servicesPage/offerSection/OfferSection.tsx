import SectionTitle from '../../../components/UI/SectionTitle'
import OfferItemsList from './OfferItemsList'

import styles from './OfferSection.module.css'

const OfferSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle>Nasza Oferta</SectionTitle>
            <OfferItemsList />
        </section>
    )
}

export default OfferSection
