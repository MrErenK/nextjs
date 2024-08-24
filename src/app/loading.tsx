import React from "react";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export default function Loading({ size = "medium", color }: LoadingProps) {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-20 h-20",
    large: "w-28 h-28",
  };

  const spinnerSize = {
    small: "w-8 h-8",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };

  return (
    <div
      className="flex justify-center items-center h-screen w-screen bg-[var(--bg-color)] fixed top-0 left-0 z-[9999]"
      role="alert"
      aria-busy="true"
    >
      <div className={`inline-block relative ${sizeClasses[size]}`}>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`box-border block absolute ${spinnerSize[size]} m-2 border-4 rounded-full animate-spinner`}
            style={{
              borderColor: `${color || "var(--primary-color)"} transparent transparent transparent`,
              animationDelay: `${-0.15 * (3 - index)}s`,
            }}
          ></div>
        ))}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
