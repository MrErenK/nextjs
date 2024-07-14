'use client'

import { useState, useEffect } from 'react'
import styles from './Contact.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    robot: false
  })

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [showMessageError, setShowMessageError] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const { name, email, message, robot } = formData
    const hasInput = name.trim() !== '' && email.trim() !== '' && message.trim().length >= 30 && robot
    setIsButtonDisabled(!hasInput)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))

    if (name === 'message') {
      setShowMessageError(value.trim().length > 0 && value.trim().length < 30)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (e.target.name === 'message') {
      setShowMessageError(e.target.value.trim().length > 0 && e.target.value.trim().length < 30)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '', robot: false })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Your name" 
          required
          value={formData.name} 
          onChange={handleInputChange} 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="youremail@domain.tld" 
          required
          value={formData.email} 
          onChange={handleInputChange} 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={5} 
          placeholder="Your message (minimum 30 characters)" 
          required
          value={formData.message} 
          onChange={handleInputChange}
          onBlur={handleBlur}
        ></textarea>
        {showMessageError && (
          <p className={styles.errorMessage}>Please enter at least 30 characters.</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.checkbox}>
          <input 
            type="checkbox" 
            id="robot" 
            name="robot" 
            required
            checked={formData.robot} 
            onChange={handleInputChange} 
          />
          I accept that I will not be sending any spam messages.
        </label>
      </div>
      <button type="submit" className={styles.button} disabled={isButtonDisabled || status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
      {status === 'success' && <p className={styles.successMessage}>Message sent successfully!</p>}
      {status === 'error' && <p className={styles.errorMessage}>Failed to send message. Please try again.</p>}
    </form>
  )
}