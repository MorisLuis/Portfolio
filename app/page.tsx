"use client"

import React, { useState } from 'react';
import { ProjectStructure } from "./projectStructure";
import { Modal } from '@/components/Modal';
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { useSetState } from 'react-use';

export interface ProjectInterface {
  name: string;
  video: number;
  details: string;
  link: string;
  id: number;
  orientation: "Vertical" | "Horizontal",
  gif: string;
  moreVideos?: number[]
}


const Projects: ProjectInterface[] = [
  {
    name: 'SICRE',
    video: 1049936890,
    details: 'CRM',
    link: 'private',
    id: 1,
    orientation: 'Horizontal',
    gif: '/Sicre.gif'
  },
  {
    name: 'Olei Software',
    video: 1049936910,
    details: 'Retail, E-Commerce',
    link: 'https://oleiweb-git-demo2-morisluis-projects.vercel.app/login',
    id: 2,
    orientation: 'Horizontal',
    gif: '/OleiSoftware.gif'
  },
  {
    name: 'Olei CRM',
    video: 1049936897,
    details: 'Retail, E-Commerce',
    link: 'private',
    id: 3,
    orientation: 'Horizontal',
    gif: '/OleiCRM.gif'
  },
  {
    name: 'Mapasac',
    video: 1050103254,
    details: 'Retail, E-Commerce',
    link: 'private',
    id: 4,
    orientation: 'Vertical',
    gif: '/mapasac-restaurantes.gif',
    moreVideos: [
      1050103254,
      1049938083,
      1050104581
    ]
  }
]


export default function Home() {

  const [videoOpen, setVideoOpen] = useState(false);
  const [projectSelected, setProjectSelected] = useState<ProjectInterface>();
  const [sliderVideos, setSliderVideos] = useState<number>(0)

  const onclose = () => {
    setVideoOpen(false)
  }

  const handleNextVideo = () => {
    const moreVideos = projectSelected?.moreVideos;
    if (!moreVideos) return;

    setSliderVideos((prevIndex) => (prevIndex + 1) % moreVideos.length);
  };

  const handleBackVideo = () => {
    const moreVideos = projectSelected?.moreVideos;
    if (!moreVideos) return;

    setSliderVideos((prevIndex) => (prevIndex - 1 + moreVideos.length) % moreVideos.length);
  };


  const currentVideo = projectSelected?.moreVideos
    ? projectSelected.moreVideos[sliderVideos]
    : projectSelected?.video;

  const sliderVisible = projectSelected?.moreVideos


  return (
    <main className={styles.home}>

      <div className={styles.content}>
        {
          Projects.map((project) =>
            <ProjectStructure
              project={project}
              key={project.id}
              openVideo={() => setVideoOpen(true)}
              onSelectVideo={(product: ProjectInterface) => {
                setProjectSelected(product)
                if (product.moreVideos) {
                  setSliderVideos(0)
                }
              }}
            />
          )
        }
      </div>

      <Modal
        handleClose={onclose}
        visible={videoOpen}
        transparent={projectSelected?.orientation === 'Vertical'}
      >
        <div className={styles.ProjectModal}>
          {sliderVisible && <div className={`${styles.slide} ${styles.left}`} onClick={handleBackVideo}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </div>
          }
          <div className={projectSelected?.orientation === 'Vertical' ? styles.VerticalModal : styles.videoContainer}>
            <iframe
              src={`https://player.vimeo.com/video/${currentVideo}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479dnt=1`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="mapasac-ventas"
            />
          </div>
          {sliderVisible && <div className={`${styles.slide} ${styles.right}`} onClick={handleNextVideo}>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>}
        </div>
      </Modal>
    </main>
  );
}
