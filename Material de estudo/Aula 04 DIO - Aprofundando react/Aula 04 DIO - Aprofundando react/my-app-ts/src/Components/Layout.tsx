import { Header } from './Header'
import { Footer } from './Footer'
import { Card } from './Card'

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}