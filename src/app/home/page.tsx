import { Metadata } from "next";
import MovingBackground from "@/components/MovingBackground";
import TypingEffect from "@/components/TypingEffect";
import { FadeInEffect } from "@/components/FadeInEffect";
import ScrollLock from "@/components/ScrollLock";

export const metadata: Metadata = {
  title: "MrErenK - Home",
  description: "Welcome to MrErenK's personal website.",
};

export default function Home() {
  return (
    <>
      <ScrollLock />
      <FadeInEffect>
        <div className="min-h-screen md:fixed md:inset-0 flex flex-col">
          <MovingBackground imageUrl="/space.jpg" />
          <main className="flex-1 flex items-center justify-center p-5">
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
          </main>
        </div>
      </FadeInEffect>
    </>
  );
}
