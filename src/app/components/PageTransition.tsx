'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loading from './Loading';
import styles from './PageTransition.module.css';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsEntered(false);
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setIsEntered(true);
    }, 20);

    return () => clearTimeout(loadingTimeout);
  }, [pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`${styles.pageTransition} ${isEntered ? styles.pageTransitionEnter : ''}`}>
      {children}
    </div>
  );
}