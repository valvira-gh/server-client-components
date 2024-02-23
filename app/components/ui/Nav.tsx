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
          <Link href={`/photos`}>Photos</Link>
        </li>
        <li className={styles.linkEl}>
          <Link href={`/form-actions`}>Form Actions</Link>
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