import React from 'react';
import styles from "../../styles/Navigation.module.scss";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {


  const pathname = usePathname()
  const pathnameContact = pathname === '/contact'

    return (
        <div className={styles.footer}>
            <div className={styles.message}>
                <h3 className={styles.title}>You probable need a software team.</h3>
                {
                    !pathnameContact &&
                    <Link
                        href={"/contact"}
                        className={`${styles.button} button tertiary mb-small`}
                    >
                        Send Message
                    </Link>
                }
            </div>
            <div className={styles.companyInformation}>
                <h3>Morado</h3>
                <p>Monterrey, N.L. Mexico</p>
            </div>
            <div className={styles.background_noiseFooter}></div>
        </div>
    )
}
