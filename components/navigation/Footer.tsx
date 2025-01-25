
import React from 'react';
import styles from "../../styles/Navigation.module.scss";

export const Footer = () => {

    const handleOpenNewTab = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className={styles.footer}>

            <div className={styles.companyInformation}>
                <div className={styles.bio}>
                    <h3>Morado</h3>
                    <p>Monterrey, N.L. Mexico</p>
                </div>
                <div className={styles.social}>
                    <div onClick={() => handleOpenNewTab('https://github.com/MorisLuis')}>
                        <p>G</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className={styles.background_noiseFooter}></div>
        </div>
    );
};
