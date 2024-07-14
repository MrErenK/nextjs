'use client'

import { useState, useEffect } from 'react'
import styles from './Contact.module.css'
import ContactForm from './ContactForm'
import ThemeToggle from '../components/ThemeToggle'
import Loading from '../components/Loading'

export default function ContactClient() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
      <ContactForm />
    </>
  )
}