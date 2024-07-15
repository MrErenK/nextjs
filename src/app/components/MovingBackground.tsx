'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './MovingBackground.module.css';

interface MovingBackgroundProps {
  imageUrl: string;
}

const MovingBackground: React.FC<MovingBackgroundProps> = React.memo(({ imageUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isStatic, setIsStatic] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      setIsStatic(mediaQuery.matches || prefersReducedMotion.matches);
    };

    handleChange(); // Set initial state
    mediaQuery.addEventListener('change', handleChange);
    prefersReducedMotion.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      prefersReducedMotion.removeEventListener('change', handleChange);
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isStatic) {
      setPosition({
        x: -e.clientX / 100,
        y: -e.clientY / 100
      });
    }
  }, [isStatic]);

  useEffect(() => {
    if (!isStatic) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isStatic, handleMouseMove]);

  return (
    <div 
      className={`${styles.backgroundContainer} ${isStatic ? styles.static : ''} ${isLoaded ? styles.loaded : ''}`}
      style={{
        transform: isStatic ? 'none' : `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <Image
        src={imageUrl}
        fill
        style={{ objectFit: 'cover' }}
        quality={85}
        priority
        onLoad={() => setIsLoaded(true)}
        alt="Background"
        sizes="100vw"
      />
    </div>
  );
});

MovingBackground.displayName = 'MovingBackground';

export default MovingBackground;