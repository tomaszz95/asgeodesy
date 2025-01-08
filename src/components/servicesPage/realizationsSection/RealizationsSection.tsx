import SectionTitle from '../../../components/UI/SectionTitle'
import RealizationCarousel from './RealizationCarousel'

import styles from './RealizationsSection.module.css'

const RealizationsSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle>NASZE REALIZACJE</SectionTitle>
            <RealizationCarousel />
        </section>
    )
}

export default RealizationsSection
