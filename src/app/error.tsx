'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './ErrorPages.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleReset = () => {
    if (typeof reset === 'function') {
      reset();
    } else {
      // Fallback behavior if reset is not available
      window.location.reload();
    }
  };

  return (
    <main className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>Oops!</h1>
        <p className={styles.errorMessage}>Something went wrong. We're working on fixing it.</p>
        <div className={styles.buttonContainer}>
          <button 
            onClick={handleReset} 
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}