import { Metadata } from 'next'
import styles from './Home.module.css'
import HomeClient from './page.client'

export const metadata: Metadata = {
  title: 'MrErenK - Home',
  description: 'Welcome to MrErenK\'s personal website.',
}

export default function Home() {
  return (
    <div className={`${styles.pageWrapper} ${styles.fadeIn}`}>
      <HomeClient />
    </div>
  )
}