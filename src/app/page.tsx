'use client';

import { useState, useEffect } from 'react';
import TypingEffect from './components/TypingEffect';
import MovingBackground from './components/MovingBackground';
import styles from './Home.module.css';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${styles.pageWrapper} ${styles.fadeIn}`}>
      <MovingBackground imageUrl="/space.jpg" />
      <div className={styles.homePage}>
        <div className={styles.heroContainer}>
          <div className={styles.content}>
            <h1 className={styles.greeting}>
              Hello,<br />
              <TypingEffect 
                strings={['I\'m Eren.', 'You can call me MrErenK.', 'I\'m a newbie developer', 'living in Turkiye.']} 
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}