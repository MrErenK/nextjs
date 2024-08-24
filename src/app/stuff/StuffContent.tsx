"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface LinkItem {
  title: string;
  description: string;
  url: string;
}

const links: LinkItem[] = [
  {
    title: "My GitHub account",
    description: "Find all my repos and projects here.",
    url: "https://github.com/MrErenK",
  },
  {
    title: "Cloud storage",
    description: "Host for ROMs, kernels, and other developers' work.",
    url: "https://drive.erensprojects.web.tr",
  },
  {
    title: "Self-hosted git",
    description: "For private or WIP repos.",
    url: "https://git.erensprojects.web.tr",
  },
  {
    title: "Self-hosted bin",
    description: "For pasting logs and other stuff.",
    url: "https://bin.erensprojects.web.tr",
  },
];

const telegramLinks: LinkItem[] = [
  {
    title: "My Telegram",
    description: "My personal Telegram account.",
    url: "https://telegram.me/Mr_ErenK",
  },
  {
    title: "Test group",
    description: "For testing new stuff.",
    url: "https://t.me/erensdump_t",
  },
  {
    title: "Discussion group",
    description: "Discuss my projects and more.",
    url: "https://t.me/erensdump_d",
  },
  {
    title: "Updates channel",
    description: "For project updates and announcements.",
    url: "https://t.me/erensdump_u",
  },
];

function LinkCard({
  link,
  buttonText,
}: {
  link: LinkItem;
  buttonText: string;
}) {
  return (
    <div className="p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-[var(--card-bg-color)] shadow-[var(--card-shadow)] flex flex-col justify-between border border-[var(--gray-200)] dark:border-[var(--gray-700)] h-full">
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-[var(--text-color)]">
          {link.title}
        </h3>
        <p className="mb-4 text-xs sm:text-sm text-[var(--text-color)]">
          {link.description}
        </p>
      </div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-md transition-all duration-300 cursor-pointer bg-[var(--button-bg-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-color-hover)] self-start"
      >
        {buttonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
}

export default function StuffContent() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      Swal.fire({
        icon: "success",
        title: "Server IP Copied!",
        text: "The server IP has been copied to the clipboard.",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Unable to copy to clipboard. Please try again.",
      });
    }
  };

  return (
    <>
      <section aria-labelledby="projects-title">
        <h2 id="projects-title" className="sr-only">
          My Projects and Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} buttonText="Visit" />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="mc-server"
        className="p-4 sm:p-6 rounded-xl text-center mb-8 sm:mb-12 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-[var(--card-bg-color)] shadow-[var(--card-shadow)] border border-[var(--gray-200)] dark:border-[var(--gray-700)]"
      >
        <h2
          id="mc-server"
          className="text-lg sm:text-xl font-semibold mb-2 text-[var(--title-color)]"
        >
          My MC Server (Survival)
        </h2>
        <p className="mb-3 text-xs sm:text-sm text-[var(--text-color)]">
          Click below to copy the server IP:
        </p>
        <button
          onClick={() => copyToClipboard("mc.erensprojects.web.tr")}
          className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-md transition-all duration-300 cursor-pointer bg-[var(--button-bg-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-color-hover)]"
          aria-label={copied ? "IP Copied" : "Copy Server IP"}
        >
          {copied ? "Copied!" : "Copy IP"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </section>

      <section aria-labelledby="telegram-title">
        <h2
          id="telegram-title"
          className="text-xl sm:text-2xl font-bold text-center my-6 sm:my-8 text-[var(--title-color)]"
        >
          Telegram Channels/Groups
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {telegramLinks.map((link, index) => (
            <LinkCard key={index} link={link} buttonText="Join" />
          ))}
        </div>
      </section>
    </>
  );
}
