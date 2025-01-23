import React from 'react';
import styles from "../../styles/Navigation.module.scss";

export const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.companyInformation}>
                <h3>Morado</h3>
                <p>Monterrey, N.L. Mexico</p>
            </div>

            <div className={styles.background_noiseFooter}></div>
        </div>
    )
}
