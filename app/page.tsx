"use client"

import React, { useState } from 'react';
import styles from "../styles/Home.module.scss";
import { ProjectStructure } from "./projectStructure";
import { Modal } from '@/components/Modal';

export interface ProjectInterface {
  name: string;
  video: number;
  details: string;
  link: string;
  id: number;
  orientation: "Vertical" | "Horizontal",
  gif: string
}


const Projects: ProjectInterface[] = [
  {
    name: 'SICRE',
    video: 1049936890,
    details: 'CRM',
    link: 'private',
    id: 1,
    orientation: 'Horizontal',
    gif: '/mapasac-restaurantes.gif'
  },
  {
    name: 'Olei Software',
    video: 1049936910,
    details: 'Retail, E-Commerce',
    link: 'https://www.oleionline.com/login',
    id: 2,
    orientation: 'Horizontal',
    gif: '/mapasac-restaurantes.gif'
  },
  {
    name: 'Olei CRM',
    video: 1049936897,
    details: 'Retail, E-Commerce',
    link: 'private',
    id: 3,
    orientation: 'Horizontal',
    gif: '/mapasac-restaurantes.gif'
  },
  {
    name: 'Mapasac',
    video: 1049938083,
    details: 'Retail, E-Commerce',
    link: 'private',
    id: 4,
    orientation: 'Vertical',
    gif: '/mapasac-restaurantes.gif'
  }
]


export default function Home() {

  const [videoOpen, setVideoOpen] = useState(false);
  const [projectSelected, setProjectSelected] = useState<ProjectInterface>()

  const onclose = () => {
    setVideoOpen(false)
  }

  return (
    <main className={styles.home}>

      <div className={styles.content}>
        {
          Projects.map((project) =>
            <ProjectStructure
              project={project}
              key={project.id}
              openVideo={() => setVideoOpen(true)}
              onSelectVideo={(product: ProjectInterface) => setProjectSelected(product)}
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
          <div className={projectSelected?.orientation === 'Vertical' ? styles.VerticalModal : styles.videoContainer}>
            <iframe
              src={`https://player.vimeo.com/video/${projectSelected?.video}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="mapasac-ventas"
            />
          </div>
        </div>
      </Modal>
    </main>
  );
}
