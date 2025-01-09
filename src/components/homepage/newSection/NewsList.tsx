import Link from 'next/link'

import NewsItem from './NewsItem'

import styles from './NewsList.module.css'

const NewsList = () => {
    return (
        <ul className={styles.newsList}>
            <NewsItem
                title="8 rocznica firmy!"
                author="Jan Kowalski"
                date="01.04.2024"
                caption="Prezes firmy wraz z pracownikami"
                direction="right"
            >
                <p>
                    Szanowni Państwo, w dniu <b>01.04.2022 roku obchodzimy 8 rocznicę istnienia naszej firmy!</b>{' '}
                    Dziękujemy, że przez ten okres byliście z nami, dziękujemy za okazane nam zaufanie i liczymy w
                    przyszłości na więcej owocnych współprac.
                </p>
            </NewsItem>
            <NewsItem
                title="Informacja odnośnie sposobu ogrzewania budynków!"
                author="Jan Kowalski"
                date="13.12.2023"
                caption="W razie pytań prosimy o kontakt"
                direction="left"
            >
                <p>
                    Od dnia <b>01 lipca 2021</b> roku każdy właściciel i współwłaściciel nieruchomości ma obowiązek
                    złożenia deklaracji o sposobie ogrzewania budynku. Czas na zgłoszenie w wypadku już{' '}
                    <b>istniejących budynków to 12 miesięcy, a w przypadku nowych budynków tylko 14 dni.</b>
                </p>
                <p>
                    Obowiązkowemu zgłoszeniu podlegają również właściciele lokali, jeśli mają dodatkowe ogrzewanie.
                    Deklarację można złożyć w <b>wersji papierowej lub poprzez formularz</b> na stronie Głównego Urzędu
                    Nadzoru Budowlanego (CENTRALA EWIDENCJI EMISYJNOŚCI). Gminy nie będą wysyłać pism w tej sprawie, a
                    kary mogą być dotkliwe.
                </p>
            </NewsItem>
            <NewsItem
                title="Zmiany w prawie geodezyjnym!"
                author="Jan Kowalski"
                date="23.03.2023"
                caption="Pozdrawiamy serdecznie"
                direction="right"
            >
                <p>
                    Od dnia <b>31.07.2020 roku</b> wchodzi w życie znowelizowane{' '}
                    <b>prawo geodezyjne i kartograficzne.</b> Od tego dnia pieczątka urzędowa może zostać zastąpiona
                    oświadczeniem geodety pozytywnej weryfikacji operatu technicznego dla asortymentów:{' '}
                    <b>mapa do celów projektowych i geodezyjna inwentaryzacja obiektów budowlanych.</b>
                </p>
                <p>
                    Osoby, które odebrały mapę do celów projektowych lub mapy z pomiaru powykonawczego, a nie złożyły
                    jeszcze dokumentów do architektury lub PINB <b>proszone są o kontakt</b> w celu wydania mapy z
                    oświadczeniem.
                </p>
                <p>
                    Więcej informacji można uzyskać pod naszym <b>numerem telefonu: 123 456 789</b>
                </p>
            </NewsItem>
            <NewsItem
                title="Szanowni Państwo!"
                author="Jan Kowalski"
                date="01.01.2022"
                caption="Pozdrawiamy"
                direction="left"
            >
                <p>
                    Jesteśmy firmą geodezyjną pochodzącą z Pińczowa, która wykonuje swoje usługi na terenie{' '}
                    <b>województwa świętokrzyskiego, opolskiego, śląskiego i małopolskiego.</b> W zakres naszej oferty
                    wchodzą rozmaite zakresy prac - zaczynając od map do celów projektowych, poprzez pomiary
                    powykonawcze, wytyczenia, aż do podziałów nieruchomości i wznowień / ustaleń granic nieruchomości.
                </p>
                <p>
                    Aby zapoznać się dokładnie ze wszystkimi <b>wykonywanymi przez nas usługami</b> wystarczy wybrać
                    zakładkę <Link href="/uslugi">USŁUGI</Link>. By dowiedzieć się więcej o naszej firmie należy wybrać
                    zakładkę <Link href="/o-nas">O NAS</Link>.
                </p>
                <p>
                    Jeżeli chcą Państwo zlecić nam pracę geodezyjną prosimy bardzo o przygotowanie{' '}
                    <b>numeru działki lub adresu nieruchomości.</b> Zachęcamy do kontaktu{' '}
                    <b>telefonicznego lub e-mailowego </b>z jakimikolwiek pytaniami związanymi z geodezją - z miłą
                    chęcią odpowiemy na nie.
                </p>
            </NewsItem>
        </ul>
    )
}

export default NewsList
