import SectionTitle from '../../../components/UI/SectionTitle'
import ReferencesBox from './ReferencesBox'

import styles from './ReferencesSection.module.css'

const ReferencesSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle reverse={true}>NASZE REFERENCJE</SectionTitle>
            <ReferencesBox />
        </section>
    )
}

export default ReferencesSection
