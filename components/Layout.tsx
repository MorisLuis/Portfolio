"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';

import { Footer } from './navigation/Footer';
import { Header } from './navigation/Header';
import { Menu } from './navigation/Menu';

interface LayoutInterface {
    children: React.ReactNode;
}

const Layout = ({
    children
}: LayoutInterface) => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <html>
            <body>
                <div className="background-noise"></div>
                <Header onOpenMenu={handleOpenMenu} />
                {children}
                <Footer />
                <Menu visible={openMenu} />
            </body>
        </html>
    )
}

export default Layout;
