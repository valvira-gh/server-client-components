'use client';
import { useRouter } from 'next/navigation';
import styles from './lib.module.css';

export const NavLink: React.FC = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push('/dashboard')}
      className={styles.link}
    >
      Data Fetching
    </button>
  );
};
