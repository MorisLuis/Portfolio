"use client"

import React, { useState } from 'react';
import styles from "../styles/Home.module.scss";
import { ProjectStructure } from "./projectStructure";
import { Modal } from '@/components/Modal';

export interface ProjectInterface {
  name: string;
  video: string;
  details: string;
  link: string;
  id: number;
  orientation: "Vertical" | "Horizontal"
}

const Projects: ProjectInterface[] = [
  {
    name: 'SICRE',
    video: 'Sicre.mov',
    details: 'CRM',
    link: 'private',
    id: 1,
    orientation: 'Horizontal'
  },
  {
    name: 'Olei Software',
    video: 'OleiSoftware.mov',
    details: 'Retail, E-Commerce',
    link: 'https://www.oleionline.com/login',
    id: 2,
    orientation: 'Horizontal'

  },
  {
    name: 'Olei CRM',
    video: 'OleiCRM.mov',
    details: 'Retail, E-Commerce',
    link: 'private',
    id: 3,
    orientation: 'Horizontal'
  },
  {
    name: 'Mapasac',
    video: 'mapasac-inventario.mp4',
    details: 'Retail, E-Commerce',
    link: 'private',
    id: 4,
    orientation: 'Vertical'
  }
]


export default function Home() {

  const [videoOpen, setVideoOpen] = useState(false);
  const [projectSelected, setProjectSelected] = useState<ProjectInterface>()

  const onclose = () => {
    setVideoOpen(false)
  }

  console.log({ projectSelected: projectSelected?.orientation === 'Vertical' })
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
            <video
              className={styles.video}
              autoPlay
              muted
              preload="none"
              controls
            >
              <source src={`./${projectSelected?.video}`} />
            </video>
          </div>
        </div>
      </Modal>
    </main>
  );
}
