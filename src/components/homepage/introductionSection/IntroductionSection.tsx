import CompetencesBox from './CompetencesBox'
import PromotionBox from './PromotionBox'

import styles from './IntroductionSection.module.css'

const IntroductionSection = () => {
    return (
        <section className={styles.section}>
            <CompetencesBox />
            <PromotionBox />
        </section>
    )
}

export default IntroductionSection
