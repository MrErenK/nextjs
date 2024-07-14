import React from 'react';
import styles from './Loading.module.css';

// TODO: Fix global loading spinner on production builds
export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}