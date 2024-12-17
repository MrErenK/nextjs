"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navMenuRef = useRef<HTMLDivElement>(null);

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

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const links = ["home", "stuff", "about", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-20 flex justify-center items-center text-xl z-50 transition-all duration-300 ${
        scrolled ? "bg-navbar-bg-scrolled" : "bg-navbar-bg"
      } backdrop-blur-md`}
    >
      <div className="flex justify-between items-center w-full h-20 max-w-7xl px-5">
        <Link href="/home" className="text-white text-3xl cursor-pointer">
          MrErenK
        </Link>
        <button
          className="z-50 block md:hidden bg-transparent border-none text-white text-2xl cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
          onClick={toggleNavbar}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <div
          ref={navMenuRef}
          className={`md:flex items-center justify-center md:justify-end fixed md:relative top-20 md:top-0 right-0 w-3/4 sm:w-1/2 md:w-auto h-[calc(100vh-5rem)] md:h-auto overflow-y-auto md:overflow-visible bg-black bg-opacity-90 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center py-4 md:py-0">
            {links.map((link) => (
              <li key={link} className="w-full md:w-auto my-2 md:my-0 md:mx-2">
                <Link
                  href={`/${link}`}
                  className={`block md:inline-block text-white px-4 py-2 relative hover:text-primary transition-colors duration-300 group ${
                    pathname === `/${link}` ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative overflow-hidden">
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                        pathname === `/${link}` ? "w-full" : ""
                      } group-hover:w-full`}
                    ></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
