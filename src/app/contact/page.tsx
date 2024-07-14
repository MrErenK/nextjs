import { Metadata } from 'next'
import styles from './Contact.module.css'
import ContactForm from './ContactForm'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Contact Me - MrErenK',
  description: 'Get in touch with MrErenK',
}

export default function Contact() {
  return (
    <div className={`${styles.contactPage}`}>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Me</h1>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}