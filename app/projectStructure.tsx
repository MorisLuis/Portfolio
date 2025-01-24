import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { ProjectInterface } from './page';
import styles from "../styles/Home.module.scss";
import Player from '@vimeo/player';
import Image from 'next/image';

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
                className={styles.videoWrapper}
            >
                <Image
                    onClick={() => {
                        onSelectVideo(project);
                        openVideo()
                    }}
                    priority
                    width={300}
                    height={300}
                    src={project.gif}
                    alt="Descripción del GIF"
                    className={project?.orientation === 'Vertical' ? styles.videoContainer__vertical : styles.videoContainer}
                />
            </div>
        </div>
    )
}


const VimeoPlayer = ({ videoId }: { videoId: number }) => {
    const playerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (playerRef.current) {
            const player = new Player(playerRef.current, {
                id: videoId,
                autoplay: true,
                loop: true,
                muted: true,
                controls: false,
            });

            player.play().catch(() => {
                console.warn(`Video ${videoId} no pudo reproducirse automáticamente.`);
            });
        }
    }, [videoId]);

    return <div ref={playerRef} className={styles.videoWrapper}></div>;
};

export default VimeoPlayer;
