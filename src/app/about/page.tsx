import { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { FadeInEffect } from "@/components/FadeInEffect";
import ScrollLock from "@/components/ScrollLock";

export const metadata: Metadata = {
  title: "MrErenK - About Me",
  description: "About MrErenK.",
};

export default function About() {
  return (
    <>
      <ScrollLock />
      <FadeInEffect>
        <div className="min-h-screen md:h-screen md:overflow-y-auto flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300 ease-in-out pb-[10vh] overflow-x-hidden">
          <header className="p-4 flex justify-end">
            <ThemeToggle />
          </header>
          <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-[800px] p-4 sm:p-8 bg-[var(--content-background)] rounded-lg shadow-md mx-auto transition-colors duration-300 ease-in-out">
              <h1 className="text-2xl sm:text-4xl mb-6 text-center text-[var(--title-color)] transition-colors duration-300 ease-in-out">
                About Me
              </h1>
              <div className="mb-6">
                <h2 className="text-xl sm:text-3xl mb-2">Hello,</h2>
                <h3
                  className="text-lg sm:text-2xl text-[var(--subtitle-color)] transition-colors duration-300 ease-in-out"
                  title="As you can see everywhere"
                >
                  I&apos;m Eren.
                </h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                I am a newbie developer working on exciting projects. My
                interests include Web development, AOSP (Android Open Source
                Project), Custom Kernel development, and more.
              </p>
            </div>
          </main>
          <Footer />
        </div>
      </FadeInEffect>
    </>
  );
}
