"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`z-49 relative w-15 h-[30px] rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
        resolvedTheme === "dark" ? "bg-gray-700" : "bg-blue-500"
      }`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <div
        className={`absolute top-[2px] left-[2px] w-[26px] h-[26px] rounded-full transition-all duration-300 ease-in-out ${
          resolvedTheme === "dark"
            ? "bg-yellow-600 transform translate-x-[30px]"
            : "bg-yellow-300"
        }`}
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base">
          {resolvedTheme === "dark" ? "🌙" : "☀️"}
        </span>
      </div>
    </div>
  );
}
