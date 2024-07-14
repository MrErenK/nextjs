'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Swal from 'sweetalert2';
import styles from './Stuff.module.css';
import ThemeToggle from '../components/ThemeToggle';

export default function Stuff() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      Swal.fire({
        icon: 'success',
        title: 'Server IP Copied!',
        text: 'The server IP has been copied to the clipboard.',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => {
      console.error('Unable to copy to clipboard', err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unable to copy to clipboard. Please try again.'
      });
    });
  };

  const links = [
    { title: 'My GitHub account', description: 'Find all my repos and projects here.', url: 'https://github.com/MrErenK' },
    { title: 'Cloud storage', description: 'Host for ROMs, kernels, and other developers\' work.', url: 'https://drive.erensprojects.web.tr' },
    { title: 'Self-hosted git', description: 'For private or WIP repos.', url: 'https://git.erensprojects.web.tr' },
    { title: 'Self-hosted bin', description: 'For pasting logs and other stuff.', url: 'https://bin.erensprojects.web.tr' },
  ];

  const telegramLinks = [
    { title: 'My Telegram', description: 'My personal Telegram account.', url: 'https://telegram.me/Mr_ErenK' },
    { title: 'Test group', description: 'For testing new stuff.', url: 'https://t.me/erensdump_t' },
    { title: 'Discussion group', description: 'Discuss my projects and more.', url: 'https://t.me/erensdump_d' },
    { title: 'Updates channel', description: 'For project updates and announcements.', url: 'https://t.me/erensdump_u' },
  ];

  if (!mounted) return null;

  return (
    <div className={`${styles.stuffPage} style={{ backgroundColor: 'var(--bg-color)'`}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
      <h1 className={styles.title}>My Stuff</h1>
      <p className={styles.subtitle}>Here you can find the projects I'm working on.</p>
      
      <div className={styles.linksGrid}>
        {links.map((link, index) => (
          <div key={index} className={styles.linkCard}>
            <h3>{link.title}</h3>
            <p>{link.description}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.button}>Go</a>
          </div>
        ))}
      </div>

      <div className={styles.mcServer}>
        <h3>My MC Server (Survival)</h3>
        <p>Click below to copy the server IP:</p>
        <button onClick={() => copyToClipboard('mc.erensprojects.web.tr')} className={styles.button}>
          {copied ? 'Copied!' : 'Copy IP'}
        </button>
      </div>

      <h2 className={styles.sectionTitle}>Telegram Channels/Groups</h2>
      <div className={styles.linksGrid}>
        {telegramLinks.map((link, index) => (
          <div key={index} className={styles.linkCard}>
            <h3>{link.title}</h3>
            <p>{link.description}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.button}>Go</a>
          </div>
        ))}
      </div>
    </div>
  );
}