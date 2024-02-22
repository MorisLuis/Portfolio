import React from 'react';
import styles from "../styles/Home.module.scss";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export const ProjectStructure = ({project}: any) => {
    return (
        <div className={styles.ProjectStructure}>
            <h2 className={styles.title}>Switch between accounts in one click.</h2>
            <p className={styles.paragraph}>Easily switch between test accounts using Profiles and Spaces — with different histories, passwords, and browsing data.</p>
            <Link
                href={`/project/${project.path}`}
                className={styles.link}
            >
                <p>See project</p>
                <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
            <div className={styles.videoContainer}>
                <video
                    className={styles.video}
                    autoPlay
                    muted
                    preload="none"
                >
                    <source src="./video1.mp4" />
                </video>
            </div>
        </div>
    )
}
