'use client';
import { useRouter } from 'next/navigation';
import styles from './ui.module.css';

const NavLink: React.FC = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push('/dashboard')}
      className={styles.link}
    >
      Dashboard
    </button>
  );
};

export default NavLink;
