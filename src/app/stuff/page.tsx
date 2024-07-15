import { Metadata } from 'next'
import styles from './Stuff.module.css'
import dynamic from 'next/dynamic'
import StuffContent from './StuffContent'
import ThemeToggle from '../components/ThemeToggle'

const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export const metadata: Metadata = {
  title: 'My Stuff - MrErenK',
  description: 'Projects and links from MrErenK',
}

export default function Stuff() {
  return (
    <div className={styles.stuffPage}>
      <main className={`${styles.content} ${styles.fadeIn}`}>
        <h1 className={styles.title}>My Stuff</h1>
        <p className={styles.subtitle}>Here you can find the projects I&apos;m working on.</p>
        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>
        <StuffContent />
      </main>
      <Footer />
    </div>
  )
}