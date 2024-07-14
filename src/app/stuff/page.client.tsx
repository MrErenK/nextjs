'use client'

import { useState, useEffect } from 'react'
import styles from './Stuff.module.css'
import ThemeToggle from '../components/ThemeToggle'
import StuffContent from './StuffContent'
import Loading from '../components/Loading'

export default function StuffClient() {
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
      <StuffContent />
    </>
  )
}