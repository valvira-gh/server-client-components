import styles from './ui.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/data-fetching">Data Fetching</a>
        </li>
      </ul>
    </nav>
  );
};
