"use client";

import { useState } from "react";

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
    description:
      "Host for ROMs, kernels, and other developers' work. Send me a private message on telegram to receive an api key.",
    url: "https://storage.erensprojects.web.tr",
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
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="projects-title" className="mb-12">
        <h2 id="projects-title" className="sr-only">
          My Projects and Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} buttonText="Visit" />
          ))}
        </div>
      </section>

      <section aria-labelledby="telegram-title" className="mb-12">
        <h2
          id="telegram-title"
          className="text-xl sm:text-2xl font-bold text-center mb-8 text-[var(--title-color)]"
        >
          Telegram Channels/Groups
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {telegramLinks.map((link, index) => (
            <LinkCard key={index} link={link} buttonText="Join" />
          ))}
        </div>
      </section>
    </div>
  );
}
