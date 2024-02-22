import styles from './ui.module.css';
import Link from 'next/link';
import NavLink from './NavLink';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.linkEl}>
          <Link href={`/`}>Home</Link>
        </li>
        <li className={styles.linkEl}>
          <Link href={`/data-fetching`}>Data Fetching</Link>
        </li>
        <li className={styles.linkEl}>
          <Link href={`/data-fetching`}>Data Fetching</Link>
        </li>
      </ul>

      <hr className={styles.navHr} />
      <div className={styles.navWrapper}>
        <NavLink />
      </div>
    </nav>
  );
};

export default Nav;