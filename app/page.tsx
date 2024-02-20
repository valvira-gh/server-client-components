import styles from "./page.module.css";
import ServerSide from "./server-component/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Server & Client Components</h1>
      <ServerSide />
    </main>
  );
}
