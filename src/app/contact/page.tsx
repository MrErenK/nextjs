import { Metadata } from 'next'
import styles from './Contact.module.css'
import Footer from '../components/Footer'
import ContactClient from './page.client'

export const metadata: Metadata = {
  title: 'Contact Me - MrErenK',
  description: 'Get in touch with MrErenK',
}

export default function Contact() {
  return (
    <div className={`${styles.contactPage}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Me</h1>
        <ContactClient />
      </div>
      <Footer />
    </div>
  )
}