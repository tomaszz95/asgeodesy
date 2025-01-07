'use client'

import Image, { StaticImageData } from 'next/image'

import { useEffect, useRef, useState } from 'react'

import styles from './OfferItem.module.css'

type ComponentType = {
    children: React.ReactNode
    title: string
    icon: StaticImageData
    color: string
}

const OfferItem = ({ children, title, icon, color }: ComponentType) => {
    const [isVisible, setIsVisible] = useState(false)
    const itemRef = useRef<HTMLLIElement | null>(null)
    const lastScrollY = useRef(0)

    useEffect(() => {
        let timeout: NodeJS.Timeout

        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const itemPosition = itemRef.current!.offsetTop - 1100

            if (Math.abs(scrollPosition - lastScrollY.current) >= 50 && itemPosition !== undefined) {
                if (scrollPosition > itemPosition) {
                    setIsVisible(true)
                }
                lastScrollY.current = scrollPosition
            }
        }

        const throttledScroll = () => {
            if (timeout) clearTimeout(timeout)

            timeout = setTimeout(handleScroll, 50)
        }

        window.addEventListener('scroll', throttledScroll)

        return () => {
            window.removeEventListener('scroll', throttledScroll)
            if (timeout) clearTimeout(timeout)
        }
    }, [])

    return (
        <li
            ref={itemRef}
            className={`${styles.offerItem} ${color === 'blue' ? styles.blue : color === 'purple' ? styles.purple : styles.pink} ${
                isVisible ? styles.animate : 'hidden'
            }`}
        >
            <Image src={icon} alt="" />
            <h3>{title}</h3>
            <p>{children}</p>
        </li>
    )
}

export default OfferItem
