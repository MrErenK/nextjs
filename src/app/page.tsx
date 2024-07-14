import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import styles from './Home.module.css'
import Loading from './components/Loading'

// Dynamically import client-side components
const MovingBackground = dynamic(() => import('./components/MovingBackground'), { 
  ssr: false,
  loading: () => <div className={styles.backgroundPlaceholder} />
})
const TypingEffect = dynamic(() => import('./components/TypingEffect'), { 
  ssr: false,
  loading: () => <span>I'm Eren.</span> // Fallback while component is loading
})

export const metadata: Metadata = {
  title: 'MrErenK - Home',
  description: 'Welcome to MrErenK\'s personal website.',
}

export default function Home() {
  return (
    <div className={`${styles.pageWrapper} ${styles.fadeIn}`}>
      <MovingBackground imageUrl="/space.jpg" />
      <div className={styles.homePage}>
        <div className={styles.heroContainer}>
          <div className={styles.content}>
            <h1 className={styles.greeting}>
              Hello,<br />
              <TypingEffect 
                strings={['I\'m Eren.', 'You can call me MrErenK.', 'I\'m a newbie developer', 'living in Turkiye.']} 
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenStrings={1000}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}