import React from 'react';
import styles from '../../styles/Components.module.scss';

export const ImageLeftAndText = () => {
    return (
        <div className={styles.ImageAndText}>
            <div className={styles.header}>
                <h1 className={styles.title}>Sistema de Gestión y Control de Miembros</h1>
                <p className={styles.brief}>In a world where AI is making every company feel the same, you dream of a brand that’s so well-loved it becomes a part of daily.</p><br />
            </div>

            <div className={styles.videoHeader}>
                <video
                    className={styles.video}
                    autoPlay
                    muted
                    preload="none"
                >
                    <source src="../video1.mp4" />
                </video>
            </div>
        </div>
    )
}
