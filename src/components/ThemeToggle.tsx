"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      className={`z-49 relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
        resolvedTheme === "dark" ? "bg-indigo-700" : "bg-blue-400"
      }`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-colors duration-300 ease-in-out ${
          resolvedTheme === "dark" ? "bg-indigo-200" : "bg-yellow-300"
        }`}
        animate={{
          x: resolvedTheme === "dark" ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">
          {resolvedTheme === "dark" ? "🌙" : "☀️"}
        </span>
      </motion.div>
      <span className="sr-only">
        {resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"}
      </span>
    </motion.button>
  );
}
