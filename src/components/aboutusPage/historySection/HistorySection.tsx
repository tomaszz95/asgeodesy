import SectionTitle from '../../../components/UI/SectionTitle'
import HistoryBox from './HistoryBox'

import styles from './HistorySection.module.css'

const HistorySection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle>Historia i rozwój</SectionTitle>
            <HistoryBox />
        </section>
    )
}

export default HistorySection
