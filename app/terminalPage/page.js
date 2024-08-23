import Terminal from "@/components/Terminal";
import styles from "./Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        {/* <a className={styles.button} href="https://rushilpatel.me/" target="_blank">
          Simplified Portfolio View 
        </a> */}
        <a className={styles.button} href="/simple">Go to Simple Resume Style Page View [↗]</a>
        {/* <Link className={styles.button} href="/simple">
            Go to Simple Page
        </Link> */}
      </div>
      <h1>
        rushil_patel:$ <span className={styles.help}> type <strong style={{color: "white"}}>"help"</strong> to start</span>
      </h1>
      {/* <p>
        Visit{" "}
        <a href="https://rushilpatel.me/" target="_blank" rel="noreferrer">
          SIMPLIFIED PORTFOLIO VIEW
        </a>
      </p> */}
      <Terminal />
    </div>
  );
}
