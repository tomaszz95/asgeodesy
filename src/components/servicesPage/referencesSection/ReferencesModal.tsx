import Image, { StaticImageData } from 'next/image'

import { useEffect } from 'react'

import styles from './ReferencesModal.module.css'

type ImageType = {
    url: StaticImageData
    alt: string
}

type ComponentType = {
    image: ImageType
    closeModal: () => void
    images: ImageType[]
    currentIndex: number
    onImageHandler: (value: number) => void
}

const ReferencesModal = ({ image, closeModal, images, currentIndex, onImageHandler }: ComponentType) => {
    const showNextImage = (): void => {
        const nextIndex = (currentIndex + 1) % images.length
        onImageHandler(nextIndex)
    }

    const showPrevImage = (): void => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length
        onImageHandler(prevIndex)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                showNextImage()
            } else if (e.key === 'ArrowLeft') {
                showPrevImage()
            } else if (e.key === 'Escape') {
                closeModal()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentIndex, images.length])

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={closeModal}></div>
            <Image src={image.url} alt={image.alt} width={900} height={1100} className={styles.modalImage} />
            <button className={styles.closeButton} onClick={closeModal}>
                X
            </button>
            <button className={styles.prevButton} onClick={showPrevImage}>
                &lt;
            </button>
            <button className={styles.nextButton} onClick={showNextImage}>
                &gt;
            </button>
        </div>
    )
}
export default ReferencesModal
