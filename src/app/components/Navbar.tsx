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
        <Link href="/" className={styles.navbarLogo}>
          MrErenK
        </Link>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          {isOpen ? '✕' : '☰'}
        </div>
        <ul className={isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLinks} onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/stuff" className={styles.navLinks} onClick={toggleNavbar}>
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLinks} onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLinks} onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;