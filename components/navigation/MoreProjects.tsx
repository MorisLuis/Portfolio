import React from 'react'
import styles from "../../styles/Navigation.module.scss";
import Image from 'next/image';

export const MoreProjects = () => {
    return (
        <div className={styles.moreProjects}>
            <div className={styles.content}>
                <div className={styles.project}>
                    <div className={styles.image}>
                        <video
                            className={styles.video}
                            autoPlay
                            muted
                            preload="none"
                        >
                            <source src="../video1.mp4" />
                        </video>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.projectName}>Sicre CTM</p>
                        <p>Otra cosa...</p>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.image}>
                        <video
                            className={styles.video}
                            autoPlay
                            muted
                            preload="none"
                        >
                            <source src="../video1.mp4" />
                        </video>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.projectName}>Olei App</p>
                        <p>Otra cosa...</p>
                    </div>
                </div>
            </div>

            <div className={styles.background_moreProjects}></div>
        </div>
    )
}
