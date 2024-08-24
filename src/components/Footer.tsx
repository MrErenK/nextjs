"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: faGithub, url: "https://github.com/MrErenK" },
    { name: "Telegram", icon: faTelegram, url: "https://t.me/Mr_ErenK" },
  ];

  return (
    <AnimatePresence>
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-4 left-0 right-0 flex justify-center items-center z-49 px-4"
      >
        <motion.div
          animate={{
            backgroundColor: isHovered
              ? "rgba(31, 41, 55, 0.9)"
              : "rgba(31, 41, 55, 0.7)",
            backdropFilter: isHovered ? "blur(10px)" : "blur(5px)",
          }}
          transition={{ duration: 0.3 }}
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg max-w-full sm:max-w-max"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-white text-xs sm:text-sm font-medium text-center sm:text-left">
              &copy; {currentYear} MrErenK
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="text-lg sm:text-xl"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
