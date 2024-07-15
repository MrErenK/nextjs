'use client'

import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function StuffContent() {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const copyToClipboard = async (text: string) => {
    if (typeof window === 'undefined') return;

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      
      Swal.fire({
        icon: 'success',
        title: 'Server IP Copied!',
        text: 'The server IP has been copied to the clipboard.',
        showConfirmButton: false,
        timer: 1500
      })
      
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Unable to copy to clipboard', err)
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unable to copy to clipboard. Please try again.'
      })
    }
  }

  const links = [
    { title: 'My GitHub account', description: 'Find all my repos and projects here.', url: 'https://github.com/MrErenK' },
    { title: 'Cloud storage', description: 'Host for ROMs, kernels, and other developers\' work.', url: 'https://drive.erensprojects.web.tr' },
    { title: 'Self-hosted git', description: 'For private or WIP repos.', url: 'https://git.erensprojects.web.tr' },
    { title: 'Self-hosted bin', description: 'For pasting logs and other stuff.', url: 'https://bin.erensprojects.web.tr' },
  ]

  const telegramLinks = [
    { title: 'My Telegram', description: 'My personal Telegram account.', url: 'https://telegram.me/Mr_ErenK' },
    { title: 'Test group', description: 'For testing new stuff.', url: 'https://t.me/erensdump_t' },
    { title: 'Discussion group', description: 'Discuss my projects and more.', url: 'https://t.me/erensdump_d' },
    { title: 'Updates channel', description: 'For project updates and announcements.', url: 'https://t.me/erensdump_u' },
  ]

  if (!mounted) return null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {links.map((link, index) => (
          <div key={index} className="p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-card-bg-color shadow-card flex flex-col min-h-[180px]">
            <h3 className="mb-2">{link.title}</h3>
            <p className="mb-4 flex-grow">{link.description}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full transition-all duration-300 cursor-pointer font-bold bg-transparent text-button-color hover:text-text-color hover:shadow-md active:shadow-none text-base">
              Go
              <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-lg text-center mb-8 transition-all duration-300 transform hover:-translate-y-1 bg-card-bg-color shadow-card">
        <h3 className="mb-2 text-title-color">My MC Server (Survival)</h3>
        <p className="mb-4">Click below to copy the server IP:</p>
        <button onClick={() => copyToClipboard('mc.erensprojects.web.tr')} className="inline-flex items-center justify-center px-6 py-3 rounded-full transition-all duration-300 cursor-pointer font-bold bg-transparent text-button-color hover:text-text-color hover:shadow-md active:shadow-none text-base">
          {copied ? 'Copied!' : 'Copy IP'}
          <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
        </button>
      </div>

      <h2 className="text-3xl text-center my-8 text-title-color">Telegram Channels/Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {telegramLinks.map((link, index) => (
          <div key={index} className="p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-card-bg-color shadow-card flex flex-col min-h-[180px]">
            <h3 className="mb-2">{link.title}</h3>
            <p className="mb-4 flex-grow">{link.description}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full transition-all duration-300 cursor-pointer font-bold bg-transparent text-button-color hover:text-text-color hover:shadow-md active:shadow-none text-base">
              Go
              <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}