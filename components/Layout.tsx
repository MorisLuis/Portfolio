import React from 'react'
import { Header } from './navigation/Header'

interface LayoutInterface {
    children: React.ReactNode;
}

export const Layout = ({
    children
}: LayoutInterface) => {
    return (
        <div>
            <div className="background-noise"></div>
            <Header />
            {children}
        </div>
    )
}
