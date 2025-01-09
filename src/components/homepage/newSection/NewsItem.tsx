'use client'

import { useEffect, useRef, useState } from 'react'

import styles from './NewsItem.module.css'

type ComponentType = {
    children: React.ReactNode
    title: string
    date: string
    author: string
    caption: string
    direction: string
}

const NewsItem = ({ children, title, date, author, caption, direction }: ComponentType) => {
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
            className={`${styles.listItem} ${direction === 'right' ? styles.right : styles.left} ${
                isVisible ? styles.animate : 'hidden'
            }`}
        >
            <div className={styles.itemHeading}>
                <b>{date}</b>
                <b>{author}</b>
            </div>
            <h3 className={styles.listTitle}>{title}</h3>
            {children}
            <b className={styles.listCaption}>{caption}</b>
        </li>
    )
}

export default NewsItem
