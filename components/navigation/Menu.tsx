import React from 'react';
import styles from "../../styles/Navigation.module.scss";
import Link from 'next/link';
export const Menu = () => {
    return  (
        <div className={styles.menu}>
            <div className={styles.menuContent}>
                <Link href={"/"} className={styles.link}>
                    Home
                </Link>
                <Link href={"/contact"} className={styles.link}>
                    Contact
                </Link>
                <Link href={"/contact"} className={styles.link}>
                    Projects
                </Link>
            </div>
        </div>
    )
}
