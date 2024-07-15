import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import ContactForm from './ContactForm'
import ThemeToggle from '../components/ThemeToggle'

const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const FadeInEffect = dynamic(() => import('../components/FadeInEffect').then((mod) => mod.FadeInEffect), { ssr: false });

export const metadata: Metadata = {
  title: 'Contact Me - MrErenK',
  description: 'Get in touch with MrErenK',
}

export default function Contact() {
  return (
    <FadeInEffect>
      <div className="min-h-screen flex flex-col bg-bg-color text-text-color transition-colors duration-300 pb-[10vh]">
        <main className="flex-1 p-8 pt-16 flex flex-col items-center relative">
          <h1 className="text-4xl text-center mb-8 text-primary">Contact Me</h1>
          <div className="absolute top-5 right-5">
            <ThemeToggle />
          </div>
          <ContactForm />
        </main>
        <Footer />
      </div>
    </FadeInEffect>
  )
}