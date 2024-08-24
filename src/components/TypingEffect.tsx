"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  strings: string[];
  baseTypingSpeed?: number;
  baseDeletingSpeed?: number;
  delayBetweenStrings?: number;
  maxDeletionChars?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  baseTypingSpeed = 100,
  baseDeletingSpeed = 50,
  delayBetweenStrings = 1000,
  maxDeletionChars = 5, // Maximum number of characters to delete at once
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullTextRef = useRef("");

  useEffect(() => {
    const calculateSpeed = (baseSpeed: number, textLength: number): number => {
      const minSpeed = baseSpeed * 0.5;
      const maxSpeed = baseSpeed * 1.5;
      const speedRange = maxSpeed - minSpeed;
      const maxLength = Math.max(...strings.map((s) => s.length));

      const speed = maxSpeed - speedRange * (1 - textLength / maxLength);
      return Math.max(minSpeed, Math.min(maxSpeed, speed));
    };

    const calculateDeletionChars = (textLength: number): number => {
      // Calculate number of chars to delete based on remaining text length
      return Math.max(
        1,
        Math.min(maxDeletionChars, Math.floor(textLength / 5)),
      );
    };
    let timeout: NodeJS.Timeout;

    const updateText = () => {
      const currentString = strings[currentStringIndex];

      if (isDeleting) {
        if (displayedText.length > 0) {
          const charsToDelete = calculateDeletionChars(displayedText.length);
          setDisplayedText((prev) => prev.slice(0, -charsToDelete));
          const speed = calculateSpeed(baseDeletingSpeed, displayedText.length);
          timeout = setTimeout(updateText, speed);
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          fullTextRef.current = "";
          timeout = setTimeout(updateText, delayBetweenStrings);
        }
      } else {
        if (fullTextRef.current.length < currentString.length) {
          fullTextRef.current = currentString.slice(
            0,
            fullTextRef.current.length + 1,
          );
          setDisplayedText(fullTextRef.current);
          const speed = calculateSpeed(baseTypingSpeed, currentString.length);
          timeout = setTimeout(updateText, speed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            timeout = setTimeout(updateText, delayBetweenStrings);
          }, delayBetweenStrings);
        }
      }
    };

    timeout = setTimeout(updateText, baseTypingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentStringIndex,
    isDeleting,
    strings,
    baseTypingSpeed,
    baseDeletingSpeed,
    delayBetweenStrings,
    displayedText,
    maxDeletionChars,
  ]);

  return (
    <span className="inline-block relative">
      {displayedText}
      <span className="inline-block w-[3px] animate-blink">|</span>
    </span>
  );
};

export default TypingEffect;
