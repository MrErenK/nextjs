import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 MrErenK. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/MrErenK" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;