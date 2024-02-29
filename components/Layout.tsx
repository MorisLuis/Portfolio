import React from 'react'
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


            {/* This style make my header "sticky" */}
            <div style={{ height: "100%" }}>
                {children}
                <Footer />
            </div>

        </>
    )
}
