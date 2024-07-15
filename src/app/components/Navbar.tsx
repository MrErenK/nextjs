'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navMenuRef = useRef<HTMLUListElement>(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // This effect will run when the pathname changes
    // It ensures that the active link is highlighted when the page changes
  }, [pathname]);

  const links = ['home', 'stuff', 'about', 'contact'];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <Link href="/home" className={styles.navbarLogo}>
          MrErenK
        </Link>
        <button 
          className={styles.menuIcon} 
          onClick={toggleNavbar}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <ul ref={navMenuRef} className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {links.map((link, index) => (
            <li key={link} className={styles.navItem}>
              <Link
                href={`/${link}`}
                className={`${styles.navLinks} ${pathname === `/${link}` ? styles.active : ''}`}
                onClick={toggleNavbar}
                data-index={index}
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