'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './MovingBackground.module.css';

interface MovingBackgroundProps {
  imageUrl: string;
}

const MovingBackground: React.FC<MovingBackgroundProps> = ({ imageUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: -e.clientX / 100,
        y: -e.clientY / 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div 
      className={`${styles.backgroundContainer} ${isMobile ? styles.mobile : ''} ${isLoaded ? styles.loaded : ''}`}
      style={{
        transform: isMobile ? 'none' : `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <Image
        src={imageUrl}
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        onLoad={() => setIsLoaded(true)}
        alt="Background"
      />
    </div>
  );
};

export default MovingBackground;