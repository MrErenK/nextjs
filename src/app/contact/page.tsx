import { Metadata } from "next";
import ContactForm from "./ContactForm";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { FadeInEffect } from "@/components/FadeInEffect";

export const metadata: Metadata = {
  title: "Contact Me - MrErenK",
  description: "Get in touch with MrErenK",
};

export default function Contact() {
  return (
    <FadeInEffect>
      <div className="min-h-screen flex flex-col bg-bg-color text-text-color transition-colors duration-300">
        <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header>
        <main className="flex-1 p-8 flex flex-col items-center">
          <h1 className="text-4xl text-center mb-8 text-primary">Contact Me</h1>
          <ContactForm />
        </main>
        <Footer />
      </div>
    </FadeInEffect>
  );
}
