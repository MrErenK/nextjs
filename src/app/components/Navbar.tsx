'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/home" className={styles.navbarLogo}>
          MrErenK
        </Link>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          {isOpen ? '✕' : '☰'}
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {['home', 'stuff', 'about', 'contact'].map((link) => (
            <li key={link} className={styles.navItem}>
              <Link
                href={`/${link}`}
                className={styles.navLinks}
                onClick={toggleNavbar}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;