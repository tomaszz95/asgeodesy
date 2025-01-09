'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import MobileIcon from '../../../../public/icons/mobile.png'
import EmailIcon from '../../../../public/icons/mail.png'

import styles from './TeamMemberCard.module.css'

type ComponentType = {
    name: string
    position: string
    description: string
    email: string
    phone: string
    photo: StaticImageData
}

const TeamMemberCard = ({ name, position, description, email, phone, photo }: ComponentType) => {
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
        <li className={`${styles.card} ${isVisible ? styles.animate : ''}`} ref={itemRef}>
            <h3>{name}</h3>
            <span>{position}</span>
            <p>{description}</p>
            <div className={styles.box}>
                <Image src={EmailIcon} alt="" />
                <Link href={`mailto:${email}`} aria-label={`Email do ${email}`}>
                    {email}
                </Link>
            </div>
            <div className={styles.box}>
                <Image src={MobileIcon} alt="" />
                <Link href={`tel:${phone}`} aria-label={`Telefon komórkowy do ${phone}`}>
                    {phone}
                </Link>
            </div>

            <Image src={photo} alt={name} className={styles.memberPhoto} />
        </li>
    )
}

export default TeamMemberCard
