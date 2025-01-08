'use client'

import { useState } from 'react'
import Image from 'next/image'

import ReferencesModal from './ReferencesModal'

import References1 from '../../../../public/photos/ref1.jpg'
import References2 from '../../../../public/photos/ref2.jpg'
import References3 from '../../../../public/photos/ref3.jpg'

import styles from './ReferencesBox.module.css'

const images = [
    { url: References1, alt: 'List referencyjny od firmy X' },
    { url: References2, alt: 'List referencyjny od firmy Y' },
    { url: References3, alt: 'List referencyjny od firmy Z' },
]

const ReferencesBox = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

    const openModal = (index: number): void => {
        setCurrentImageIndex(index)
    }

    const closeModal = (): void => {
        setCurrentImageIndex(null)
    }

    return (
        <div className={styles.container}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    width={180}
                    height={220}
                    className={styles.image}
                    onClick={() => openModal(index)}
                />
            ))}

            {currentImageIndex !== null && (
                <ReferencesModal
                    image={images[currentImageIndex]}
                    closeModal={closeModal}
                    images={images}
                    currentIndex={currentImageIndex}
                    onImageHandler={setCurrentImageIndex}
                />
            )}
        </div>
    )
}

export default ReferencesBox
