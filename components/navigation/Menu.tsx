import React from 'react';
import styles from "../../styles/Navigation.module.scss";

interface MenuInterface {
    visible: boolean
}

export const Menu = ({
    visible
}: MenuInterface) => {
    return visible && (
        <div className={styles.menu}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <h3>Home</h3>
                <h3>Contact</h3>
                <h3>Projects</h3>
            </div>
        </div>
    )
}
