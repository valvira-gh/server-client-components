import styles from "./page.module.css";
import Link from 'next/link';

import ServerSide from './components/ServerSide';
import ClientSide from './components/ClientSide';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Server & Client Components</h1>

      <Link href={`/data-fetching`} className={styles.link}>
        Data Fetching
      </Link>

      <div className={styles.wrapper}>
        <ServerSide />
        <ClientSide />
      </div>
    </main>
  );
}
