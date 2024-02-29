import React from 'react';
import styles from "../../../styles/Project.module.scss";
import { ImageLeftAndText } from '@/components/renders/ImageLeftAndText';
import { ImageRightAndText } from '@/components/renders/ImageRightAndText';
import { ImageCompleteAndText } from '@/components/renders/ImageCompleteAndText';
import { MoreProjects } from '@/components/navigation/MoreProjects';

const ProjectDetails = ({ params }: { params: { id: string } }) => {

    return (
        <div className={styles.ProjectDetails}>
            <div className={styles.header}>
                <h1 className={styles.title}>Sistema de Gestión y Control de Miembros</h1>
                <p className={styles.brief}>In a world where AI is making every company feel the same, you dream of a brand thats so well-loved it becomes a part of daily.</p><br />

                <button className={`${styles.button} button tertiary`}>View Demo</button>
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

            <ImageLeftAndText/>

            <ImageRightAndText/>


            <ImageCompleteAndText/>

            <MoreProjects/>

        </div>
    )
}

export default ProjectDetails;
