import { Metadata } from "next";
import StuffContent from "./StuffContent";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { FadeInEffect } from "@/components/FadeInEffect";

export const metadata: Metadata = {
  title: "My Stuff - MrErenK",
  description: "Projects and links from MrErenK",
};

export default function Stuff() {
  return (
    <FadeInEffect>
      <div className="min-h-screen flex flex-col bg-bg-color text-text-color transition-colors duration-300">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-title-color">My Stuff</h1>
          <ThemeToggle />
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          <p className="text-center mb-8 text-lg">
            Here you can find the projects I&apos;m working on.
          </p>
          <StuffContent />
        </main>
        <Footer />
      </div>
    </FadeInEffect>
  );
}
