"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleReset = () => {
    if (typeof reset === "function") {
      reset();
    } else {
      // Fallback behavior if reset is not available
      window.location.reload();
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-bg-color">
      <div className="text-center p-10 bg-card-bg-color shadow-card rounded-2xl max-w-md w-11/12">
        <h1 className="text-4xl font-bold text-title-color mb-4">Oops!</h1>
        <p className="text-lg text-text-color mb-8">
          Something went wrong. We&apos;re working on fixing it.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleReset}
            className="px-6 py-3 font-semibold text-base text-center text-button-text bg-secondary hover:bg-secondary-hover rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 font-semibold text-base text-center text-button-text bg-primary hover:bg-primary-hover rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
