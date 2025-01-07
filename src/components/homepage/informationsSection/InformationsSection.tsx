import SectionTitle from '../../UI/SectionTitle'
import InformationsList from './InformationsList'

import styles from './InformationsSection.module.css'

const InformationsSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle>Informacje</SectionTitle>
            <InformationsList />
        </section>
    )
}

export default InformationsSection
