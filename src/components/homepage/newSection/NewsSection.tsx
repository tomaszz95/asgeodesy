import NewsList from './NewsList'

import SectionTitle from '../../../components/UI/SectionTitle'

import styles from './NewsSection.module.css'

const NewsSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle reverse={true}>Aktualności</SectionTitle>
            <NewsList />
        </section>
    )
}

export default NewsSection
