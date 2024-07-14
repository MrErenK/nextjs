'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Loading from '../components/Loading'

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), { ssr: false })

export default function AboutClient() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="absolute top-5 right-5">
      <ThemeToggle />
    </div>
  )
}