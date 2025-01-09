import { Montserrat } from 'next/font/google'

import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'

import '../styles/globals.css'

const montserrat = Montserrat({
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    variable: '--font-roboto',
})

export const metadata = {
    title: 'ASGeodezja | Usługi geodezyjne',
    description:
        'Świadczymy najwyższej jakości usługi geodezyjne - mapy, inwentaryzacje, wytyczenia, podziały. Oferujemy atrakcyjne ceny, rzetelność i pełny profesjonalizm.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={montserrat.className}>
            <body>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
