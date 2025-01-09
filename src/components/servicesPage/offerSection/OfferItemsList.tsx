import OfferItem from './OfferItem'

import offerListItems from '../../../contants/offerListItems'

import styles from './OfferItemsList.module.css'

const OfferItemsList = () => {
    return (
        <ul className={styles.offerList}>
            {offerListItems.map((item) => (
                <OfferItem title={item.title} key={item.title} icon={item.icon} color={item.color}>
                    {item.description}
                </OfferItem>
            ))}
        </ul>
    )
}

export default OfferItemsList
