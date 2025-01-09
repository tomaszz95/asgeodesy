'use client'

import { useState } from 'react'
import Image from 'next/image'

import ReferencesModal from './ReferencesModal'

import referencesItems from '../../../contants/referencesItems'

import styles from './ReferencesBox.module.css'

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
            {referencesItems.map((image, index) => (
                <Image
                    key={index}
                    src={image.photo}
                    alt={image.alt}
                    width={180}
                    height={220}
                    className={styles.image}
                    onClick={() => openModal(index)}
                />
            ))}

            {currentImageIndex !== null && (
                <ReferencesModal
                    image={referencesItems[currentImageIndex]}
                    closeModal={closeModal}
                    images={referencesItems}
                    currentIndex={currentImageIndex}
                    onImageHandler={setCurrentImageIndex}
                />
            )}
        </div>
    )
}

export default ReferencesBox
