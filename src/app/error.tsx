"use client";

import { useEffect } from "react";
import ErrorContent from "@/components/ErrorContent";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset?: () => void;
}) {
  useEffect(() => {
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
    <ErrorContent
      title="Oops!"
      message="Something went wrong. We're working on fixing it."
      actionButtons={[
        {
          text: "Try Again",
          onClick: handleReset,
          primary: false,
        },
        {
          text: "Back to Home",
          href: "/",
          primary: true,
        },
      ]}
    />
  );
}
