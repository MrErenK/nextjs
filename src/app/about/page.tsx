'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './About.module.css';
import ThemeToggle from '../components/ThemeToggle';

export default function About() {
  const [mounted, setMounted] = useState(false);

  // useEffect to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.aboutPage}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.introduction}>
          <h2>Hello,</h2>
          <h3 title="As you can see everywhere">I'm Eren.</h3>
        </div>
        <p className={styles.description}>
          I am a newbie developer working on exciting projects. My interests include Web development, AOSP (Android Open Source Project), Custom Kernel development, and more.
        </p>
      </div>
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>
    </div>
  );
}