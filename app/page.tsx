import React from 'react';
import styles from "../styles/Home.module.scss";
import { ProjectStructure } from "./projectStructure";
import { ProjectsDetails } from "@/database/ProjectDetails";


export default function Home() {

  return (
    <main className={styles.home}>

      <div className={styles.header}>
        <p className={styles.title}>MORADO</p>
      </div>


      <div className={styles.introduction}>
        <div className={styles.banner}>
          <p className={styles.subtitle}>You probably need a software team.</p>
          <p>You want your brand to stand out.</p><br />
          <p>In a world where AI is making every company feel the same, you dream of a brand that’s so well-loved it becomes a part of daily conversations, effortlessly moving from smartphone screens to lively discussions at dinner tables everywhere.</p><br />
          <p>In a world where AI is making every company feel the same, you dream of a brand that’s so well-loved it becomes a part of daily conversations, effortlessly moving from smartphone screens to lively discussions at dinner tables everywhere.</p>
        </div>

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

      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <span>You probably need a software team.&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div className={`${styles.marquee} ${styles.delay}`}>
          <span>You probably need a software team.&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      {
        ProjectsDetails.map((project) =>
          <ProjectStructure key={project.id} project={project} />
        )
      }

    </main>
  );
}
