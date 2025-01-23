"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { Footer } from './navigation/Footer';
import { Header } from './navigation/Header';

interface LayoutInterface {
    children: React.ReactNode;
}

const Layout = ({
    children
}: LayoutInterface) => {
    const [openMenu, setOpenMenu] = useState(false);
    const pathname = usePathname();

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };

    useEffect(() => {
        setOpenMenu(false)
    }, [pathname])

    return (
        <html>
            <body>
                <div className="background-noise"></div>
                <Header onOpenMenu={handleOpenMenu} openMenu={openMenu} />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default Layout;
