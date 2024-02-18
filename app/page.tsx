import styles from "../styles/Home.module.scss";
import { ProjectStructure } from "./projectStructure";


export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.introduction}>
        <div className={styles.banner}>
          <p className={styles.title}>MORADO</p>
          <p className={styles.subtitle}>You probably need a software agency.</p>
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
          <span>You probably need a software agency.&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div className={`${styles.marquee} ${styles.delay}`}>
          <span>You probably need a software agency.&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      <ProjectStructure/>
      <ProjectStructure/>
      <ProjectStructure/>
    </main>
  );
}
