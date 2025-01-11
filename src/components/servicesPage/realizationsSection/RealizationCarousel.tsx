'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'

import sliderItems from '../../../constants/sliderItems'

import styles from './RealizationCarousel.module.css'

const RealizationCarousel = () => {
    return (
        <div className={styles.carouselContainer}>
            <Swiper
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                speed={1000}
                modules={[Navigation, Autoplay]}
                className={styles.carousel}
            >
                {sliderItems.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slide}>
                            <Image src={image.url} alt={image.alt} className={styles.image} priority />
                            <div className={styles.caption}>
                                <p>{image.caption}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default RealizationCarousel
