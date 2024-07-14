import Link from 'next/link';
import styles from './ErrorPages.module.css';

export default function NotFound() {
  return (
    <main className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>404</h1>
        <p className={styles.errorMessage}>Oops! The page you're looking for doesn't exist.</p>
        <div className={styles.buttonContainer}>
          <Link href="/" className={`${styles.button} ${styles.buttonPrimary}`}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}