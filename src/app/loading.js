import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[var(--bg-color)] fixed top-0 left-0 z-[9999]">
      <div className="inline-block relative w-20 h-20">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="box-border block absolute w-16 h-16 m-2 border-4 border-[var(--primary-color)] rounded-full animate-spinner"
            style={{
              borderColor: 'var(--primary-color) transparent transparent transparent',
              animationDelay: `${-0.15 * (3 - index)}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}