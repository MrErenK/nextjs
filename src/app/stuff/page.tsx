import { Metadata } from 'next'
import styles from './Stuff.module.css'
import ThemeToggle from '../components/ThemeToggle'
import StuffContent from './StuffContent'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

export const metadata: Metadata = {
  title: 'My Stuff - MrErenK',
  description: 'Projects and links from MrErenK',
}

export default function Stuff() {
  return (
    <div className={`${styles.stuffPage}`}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>My Stuff</h1>
        <p className={styles.subtitle}>Here you can find the projects I'm working on.</p>
        <StuffContent />
      </div>
      <Footer />
      <Loading />
    </div>
  )
}