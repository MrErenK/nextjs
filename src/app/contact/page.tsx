import { Metadata } from 'next'
import styles from './Contact.module.css'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'
import ThemeToggle from '../components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Contact Me - MrErenK',
  description: 'Get in touch with MrErenK',
}

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <main className={`${styles.content} ${styles.fadeIn}`}>
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}