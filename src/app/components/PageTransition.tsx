'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from './Loading';
import styles from './PageTransition.module.css';

const MAX_LOADING_TIME = 300; // milliseconds

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    setIsLoading(true);

    // Set a maximum time for the loading state
    timer = setTimeout(() => {
      setIsLoading(false);
    }, MAX_LOADING_TIME);

    // Use requestAnimationFrame to check if content is ready sooner
    const checkContent = () => {
      if (document.readyState === 'complete') {
        clearTimeout(timer);
        setIsLoading(false);
      } else {
        requestAnimationFrame(checkContent);
      }
    };
    requestAnimationFrame(checkContent);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.loadingContainer}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.pageTransition}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}