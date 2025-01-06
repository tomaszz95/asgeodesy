import Image from 'next/image'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

import Logo from '../../../public/photos/logo.png'

import styles from './Navigation.module.css'
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/">
                    <Image src={Logo} alt="Logo firmy ASGeodezja" priority />
                </Link>
                <MobileNav />
                <DesktopNav />
            </div>
        </nav>
    )
}

export default Navigation
