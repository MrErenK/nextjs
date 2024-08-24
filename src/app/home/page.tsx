import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "MrErenK - Home",
  description: "Welcome to MrErenK's personal website.",
};

// Dynamically import client-side components
const MovingBackground = dynamic(
  () => import("@/components/MovingBackground"),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-bg-color -z-10" />,
  },
);
const TypingEffect = dynamic(() => import("@/components/TypingEffect"), {
  ssr: false,
  loading: () => <span>I&apos;m Eren.</span>,
});

// Client-side only component for fade-in effect
const FadeInEffect = dynamic(
  () => import("@/components/FadeInEffect").then((mod) => mod.FadeInEffect),
  { ssr: false },
);

// Import ScrollLock component
const ScrollLock = dynamic(() => import("@/components/ScrollLock"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ScrollLock />
      <FadeInEffect>
        <div className="min-h-screen md:fixed md:inset-0 flex flex-col">
          <MovingBackground imageUrl="/space.jpg" />
          <div className="flex-1 flex items-center justify-center p-5">
            <div className="z-10">
              <div className="text-center p-5 bg-black bg-opacity-50 rounded-3xl max-w-full shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                  Hello,
                  <br />
                  <TypingEffect
                    strings={[
                      "I'm Eren.",
                      "You can call me MrErenK.",
                      "I'm a newbie developer",
                      "living in Türkiye.",
                    ]}
                    baseTypingSpeed={80}
                    baseDeletingSpeed={25}
                    delayBetweenStrings={1200}
                    maxDeletionChars={2}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </FadeInEffect>
    </>
  );
}
