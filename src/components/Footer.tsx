"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false },
);

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [GitHubIcon, setGitHubIcon] = useState<IconDefinition | null>(null);

  useEffect(() => {
    setIsMounted(true);
    import("@fortawesome/free-brands-svg-icons/faGithub").then((mod) =>
      setGitHubIcon(mod.faGithub),
    );
  }, []);

  const currentYear = new Date().getFullYear();

  if (!isMounted) {
    return null;
  }

  return (
    <footer
      className={`fixed bottom-2.5 left-1/2 transform -translate-x-1/2 bg-opacity-60 bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm z-49 transition-all duration-300 ease-in-out ${isHovered ? "opacity-100 bg-opacity-80" : "opacity-70"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center gap-4">
        <p className="m-0 text-white text-sm font-medium tracking-wide">
          &copy; {currentYear} MrErenK
        </p>
        <div className="flex">
          <a
            href="https://github.com/MrErenK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            {GitHubIcon && (
              <FontAwesomeIcon
                icon={GitHubIcon}
                className="text-2xl transition-transform duration-300 hover:scale-110"
              />
            )}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
