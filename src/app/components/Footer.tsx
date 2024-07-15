'use client'

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;