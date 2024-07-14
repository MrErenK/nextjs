import { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Navbar from './components/Navbar';
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MrErenK - Personal WebSite',
  description: 'Personal website for MrErenK.',
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/icons/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/icons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/icons/favicon-16x16.png' },
    { rel: 'manifest', url: '/icons/site.webmanifest' },
    { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#5bbad5' },
    { rel: 'shortcut icon', url: '/icons/favicon.ico' },
  ],
  other: {
    'msapplication-TileColor': '#da532c',
    'msapplication-config': '/icons/browserconfig.xml',
    'theme-color': '#ffffff',
    'msapplication-tap-highlight': 'no',
  },
  viewport: 'width=device-width,initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body className={inter.className} style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <main className="flex-grow relative">
              {children}
            </main>
          </Providers>
        </div>
      </body>
    </html>
  )
}