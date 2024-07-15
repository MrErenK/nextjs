import { Metadata } from 'next'
import styles from './About.module.css'
import dynamic from 'next/dynamic'
import ThemeToggle from '../components/ThemeToggle'

const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export const metadata: Metadata = {
  title: 'MrErenK - About Me',
  description: 'About MrErenK.',
}

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.mainContent}>
        <div className={`${styles.content} ${styles.fadeIn}`}>
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.introduction}>
            <h2>Hello,</h2>
            <h3 title="As you can see everywhere">I&apos;m Eren.</h3>
          </div>
          <p className={styles.description}>
            I am a newbie developer working on exciting projects. My interests include Web development, AOSP (Android Open Source Project), Custom Kernel development, and more.
          </p>
        </div>
      </div>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
      <Footer />
    </div>
  )
}