import React from 'react';
import styles from "../../styles/Navigation.module.scss";
import Link from 'next/link';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.message}>
                <h3 className={styles.title}>You probable need a software team.</h3>
                <Link
                    href={"#"}
                    className={`${styles.button} button tertiary mb-small`}
                >
                    Send Message
                </Link>
            </div>
            <div className={styles.companyInformation}>
                <h3>Morado</h3>
                <p>Monterrey, N.L. Mexico</p>
            </div>
            <div className={styles.background_noiseFooter}></div>
        </div>
    )
}
