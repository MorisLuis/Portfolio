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

            <div 
            className={project.orientation === 'Vertical' ? `${styles.vertical}` : styles.videoContainer}

            >
                <video
                    className={styles.video}
                    autoPlay
                    muted
                    preload="none"
                >
                    {/* <source src={`./${project.video}`} /> */}
                    <source src="/mapasac-inventario.mp4" type="video/mp4" />

                </video>
            </div>
        </div>
    )
}
