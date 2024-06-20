import Terminal from "@/components/Terminal";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        rushil_patel:$ <span className={styles.help}> type "help" to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href="https://rushilpatel.me/" target="_blank" rel="noreferrer">
          NORMAL WEBSITE
        </a>
      </p>
      <Terminal />
    </div>
  );
}
