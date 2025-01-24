import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { ProjectInterface } from './page';
import styles from "../styles/Home.module.scss";

interface ProjectStructureInterface {
    openVideo: () => void;
    project: ProjectInterface
    onSelectVideo: (arg: ProjectInterface) => void;
}

export const ProjectStructure = ({ onSelectVideo, openVideo, project }: ProjectStructureInterface) => {
    return (
        <div className={styles.ProjectStructure}>
            <div className={styles.Information}>
                <h2 className={styles.title}>{project.name}</h2>
                <p className={styles.paragraph}>{project.details}</p>

                {
                    project.link === 'private' ?
                        <div>
                            <p>Privado</p>
                        </div>
                        :
                        <div className={styles.link}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Abrir enlace externo</a>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </div>
                }

                <div
                    className={styles.videoStart}
                    onClick={() => {
                        onSelectVideo(project);
                        openVideo()
                    }}
                >
                    <FontAwesomeIcon icon={faCirclePlay} className={styles.icon} />
                    <p>See video</p>
                </div>
            </div>

            {VimeoPlayer(project)}
        </div>
    )
}


const VimeoPlayer = (projectSelected: ProjectInterface) => {

    return (
        <div className={styles.videoWrapper}>
            <div className={projectSelected?.orientation === 'Vertical' ? styles.videoContainer__vertical : styles.videoContainer}>
                <iframe
                    src={`https://player.vimeo.com/video/${projectSelected.video}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0`}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="mapasac-ventas"
                ></iframe>

            </div>
        </div>
    );
};