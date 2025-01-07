import OfferItem from './OfferItem'

import Icon1 from '../../../../public/icons/icon1.png'
import Icon2 from '../../../../public/icons/icon2.png'
import Icon3 from '../../../../public/icons/icon3.png'
import Icon4 from '../../../../public/icons/icon4.png'
import Icon5 from '../../../../public/icons/icon5.png'
import Icon6 from '../../../../public/icons/icon6.png'
import Icon7 from '../../../../public/icons/icon7.png'
import Icon8 from '../../../../public/icons/icon8.png'
import Icon9 from '../../../../public/icons/icon9.png'
import Icon10 from '../../../../public/icons/icon10.png'
import Icon11 from '../../../../public/icons/icon11.png'
import Icon12 from '../../../../public/icons/icon12.png'

import styles from './OfferItemsList.module.css'

const OfferItemsList = () => {
    return (
        <ul className={styles.offerList}>
            <OfferItem title="Mapy do celów projektowych" icon={Icon1} color="pink">
                Stworzenie mapy jest jednym z pierwszych etapów potrzebnych do przygotowania projektu budowlanego /
                otrzymania pozwolenia na jakąkolwiek inwestycję budowlaną.
            </OfferItem>
            <OfferItem title="Inwestaryzacje i pomiary powykonawcze" icon={Icon2} color="purple">
                Przeprowadzenie inwentaryzacji budowlanej oraz sporządzenie stosownej dokumentacji jest konieczne, by
                uzyskać decyzję na użytkowanie obiektu budowlanego.
            </OfferItem>
            <OfferItem title="Tyczenie obiektów budowlanych" icon={Icon3} color="blue">
                To przeniesienie położenia danego obiektu budowlanego (budynku, sieci uzbrojenia terenu etc.) z projektu
                na teren inwestycji. Tyczenie jest wykonywane zaraz na początku budowy.
            </OfferItem>
            <OfferItem title="Geodezyjna obsługa inwestycji" icon={Icon4} color="pink">
                Poczynając od prac przygotowawczych, poprzez organizowanie i kontrolę procesu inwestycyjnego, aż po
                końcowy odbiór inwestycji. Kompleksowa obsługa geodezyjna od A-Z.
            </OfferItem>
            <OfferItem title="Podziały nieruchomości" icon={Icon5} color="purple">
                Zespół czynności administracyjnych i technicznych umożliwiających wyodrębnienie części powierzchni
                gruntowej (działki), która następnie może stanowić odrębną nieruchomość.
            </OfferItem>
            <OfferItem title="Wznowienie znaków granicznych" icon={Icon6} color="blue">
                Procedura techniczna, która ma na celu przywrócenie fizycznego położenia punktów granicznych, zgodnie ze
                stanem wynikającym z dokumentacji geodezyjnej, która posiada moc dowodową.
            </OfferItem>
            <OfferItem title="Ustalenie przebiegu nieruchomości" icon={Icon7} color="pink">
                Odtworzenie granic nieruchomości w sytuacji, kiedy brak jest źródłowych dokumentów geodezyjnych, które
                dotyczą przedmiotowego odcinka granicy lub gdy zawarte w nich dane są niewiarygodne.
            </OfferItem>
            <OfferItem title="Rozgraniczenie nieruchomości" icon={Icon8} color="purple">
                Polega na ustaleniu przebiegu granic nieruchomości, przez określenie położenia punktów i linii
                granicznych w momencie, gdy pomiędzy właścicielami sąsiadujących ze sobą działek powstał spór graniczny.
            </OfferItem>
            <OfferItem title="Pomiary wysokościowe" icon={Icon9} color="blue">
                Zespół czynności technicznych pozwalających na precyzyjne określenie i kontrolę wysokości punktów /
                obiektów w terenie względem przyjętego poziomu odniesienia.
            </OfferItem>
            <OfferItem title="Obliczenia mas ziemnych" icon={Icon10} color="pink">
                Określanie położenia oraz wysokości hałd ziemi, kruszywa, pozostałości powstałych w toku prac
                górniczych, obliczanie ich powierzchni i objętości.
            </OfferItem>
            <OfferItem title="Sporządzanie map do celów prawnych" icon={Icon11} color="purple">
                Specjalistyczne opracowanie kartograficzne, sporządzone przez geodetę z odpowiednimi uprawnieniami
                zawodowymi, które może służyć do czynności prawnych.
            </OfferItem>
            <OfferItem title="Połączenia i scalenia nieruchomości" icon={Icon12} color="blue">
                Przekształcenie niekorzystnie ukształtowanych nieruchomości, w celu umożliwienia ich wykorzystania i
                zainwestowania zgodnie z racjonalnym gospodarowaniem terenem oraz przeznaczeniem.
            </OfferItem>
        </ul>
    )
}

export default OfferItemsList
