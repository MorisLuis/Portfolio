import React from 'react'
import { Header } from './navigation/Header'
import { Footer } from './navigation/Footer';

interface LayoutInterface {
    children: React.ReactNode;
}

export const Layout = ({
    children
}: LayoutInterface) => {
    return (
        <>
            <div className="background-noise"></div>

            <Header />

            <div>
                {children}
            </div>

            <Footer />
        </>
    )
}
