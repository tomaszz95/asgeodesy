import SectionTitle from '../../../components/UI/SectionTitle'
import TeamList from './TeamList'

import styles from './TeamSection.module.css'

const TeamSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle reverse={true}>Nasz team</SectionTitle>
            <TeamList />
        </section>
    )
}

export default TeamSection
