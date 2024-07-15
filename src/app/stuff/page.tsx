import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import StuffContent from './StuffContent'
import ThemeToggle from '../components/ThemeToggle'

const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const FadeInEffect = dynamic(() => import('../components/FadeInEffect').then((mod) => mod.FadeInEffect), { ssr: false });

export const metadata: Metadata = {
  title: 'My Stuff - MrErenK',
  description: 'Projects and links from MrErenK',
}

export default function Stuff() {
  return (
    <FadeInEffect>
      <div className="min-h-screen flex flex-col bg-bg-color text-text-color transition-colors duration-300">
        <main className="flex-1 p-8 pt-16 pb-[15vh] overflow-y-auto relative">
          <h1 className="text-4xl text-center mb-4 text-title-color">My Stuff</h1>
          <p className="text-center mb-8">Here you can find the projects I&apos;m working on.</p>
          <div className="absolute top-5 right-5">
            <ThemeToggle />
          </div>
          <StuffContent />
        </main>
        <Footer />
      </div>
    </FadeInEffect>
  )
}