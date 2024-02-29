import React from 'react';
import styles from "../styles/Home.module.scss";
import { ProjectStructure } from "./projectStructure";
import { ProjectsDetails } from "@/database/ProjectDetails";


export default function Home() {

  return (
    <main className={styles.home}>
{/*       <div className={styles.header}>
        <p className={styles.title}>MORADO</p>
        <div className={styles.arrow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </div>
      </div> */}

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
