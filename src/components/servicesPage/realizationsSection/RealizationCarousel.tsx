'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'

import Slider1 from '../../../../public/photos/slider1.jpg'
import Slider2 from '../../../../public/photos/slider2.jpg'
import Slider3 from '../../../../public/photos/slider3.jpg'
import Slider4 from '../../../../public/photos/slider4.jpg'

import styles from './RealizationCarousel.module.css'

const images = [
    {
        url: Slider1,
        alt: 'Zdjęcie mostu kolejowego w trakcie budowy. W tle mierzący geodeta oraz auta budowlane oraz drzewa w oddali',
        caption: 'Obsługa budowy mostu kolejowego w Wiśnicy',
    },
    {
        url: Slider2,
        alt: 'Zdjęcie kopuły sufitu Luwru we Francji na tle nocnego nieba i pięknego pałacu',
        caption: 'Obsługa budowy Luwru  w Paryżu',
    },
    {
        url: Slider3,
        alt: 'Zdjęcie pięknego gotyckiego korytarza z licznymi kolumnami z prawej strony i starymi ścianami z lewej.',
        caption: 'Obsługa budowy części Uniwersytetu Cambridge',
    },
    {
        url: Slider4,
        alt: 'Zdjęcie wnętrza nowoczesnego budynku, z lewej niebieskie niebo z prawej nowoczesna architektura i ściany',
        caption: 'Obsługa budowy drapacza chmur w Dubaju',
    },
]

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
                {images.map((image, index) => (
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
