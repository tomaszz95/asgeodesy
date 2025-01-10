import SectionTitle from '../../../components/UI/SectionTitle'

import styles from './MapSection.module.css'

const MapSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle reverse={true}>Dojazd</SectionTitle>
            <div className={styles.container}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1268.3700631871575!2d20.5257497!3d50.520402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717bf082eae3bd5%3A0xa9c1da15d636bc22!2sFontanna!5e0!3m2!1spl!2spl!4v1678887299303!5m2!1spl!2spl"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.googleMap}
                    title="Mapa z googlemaps z lokalizacją firmy"
                />
            </div>
        </section>
    )
}

export default MapSection
