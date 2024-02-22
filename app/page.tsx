import styles from "./page.module.css";
import Link from 'next/link';

import ServerSide from './components/ServerSide';
import ClientSide from './components/ClientSide';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <ServerSide />
        <ClientSide />
      </div>
    </main>
  );
}
