'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div 
      className={`${styles.toggleWrapper} ${theme === 'dark' ? styles.dark : ''}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className={styles.toggleButton}>
        <span className={styles.toggleIcon}>
          {theme === 'light' ? '☀️' : '🌙'}
        </span>
      </div>
    </div>
  )
}