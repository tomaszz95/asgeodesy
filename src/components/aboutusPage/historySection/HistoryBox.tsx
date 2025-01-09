import Image from 'next/image'

import AboutusPhoto from '../../../../public/photos/aboutusphoto.jpg'

import styles from './HistoryBox.module.css'

const HistoryBox = () => {
    return (
        <div className={styles.historyBox}>
            <div className={styles.historyText}>
                <h3>ASGeodezja spółka z o.o.</h3>
                <p>
                    W roku 2020 została powołana przez Jana Kowalskiego do życia firma o nazwie ASGeodezja. Na
                    przestrzeni lat uformował się zespół liczący 6 osób - w tym geodeci uprawnieni, doświadczeni
                    inżynierowie i technicy geodeci.
                </p>
                <p>
                    Połączenie posiadanego najnowszego sprzętu w dziedzinie geodezji wraz z ogromnym doświadczeniem
                    kadry gwarantuje szybkie, staranne i na najwyższym poziomie wykonanie zleconych usług
                </p>
                <p>
                    Siedziba firmy znajduje się w Warszawie przy ul. Spokojnej 23, w niedalekim sąsiedztwie Powiatowej
                    Komendy Policji, Lidla oraz Netto.
                </p>
            </div>
            <Image
                src={AboutusPhoto}
                alt="Trójka geodetów znajdująca sie na budowie analizująca dokumentację. W tle budowa."
            />
        </div>
    )
}

export default HistoryBox
