'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './Footer.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const FontAwesomeIcon = dynamic(
  () => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [GitHubIcon, setGitHubIcon] = useState<IconDefinition | null>(null);

  useEffect(() => {
    setIsMounted(true);
    import('@fortawesome/free-brands-svg-icons/faGithub').then((mod) => setGitHubIcon(mod.faGithub));
  }, []);

  const currentYear = new Date().getFullYear();

  if (!isMounted) {
    return null;
  }

  return (
    <footer 
      className={`${styles.footer} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.footerContent}>
        <p className={styles.copyright}>&copy; {currentYear} MrErenK</p>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/MrErenK" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            {GitHubIcon && <FontAwesomeIcon icon={GitHubIcon} className={styles.icon} />}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;