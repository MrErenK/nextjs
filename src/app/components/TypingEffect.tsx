'use client'

import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenStrings?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenStrings = 1000
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullTextRef = useRef('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const updateText = () => {
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
          timeout = setTimeout(updateText, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          fullTextRef.current = '';
          timeout = setTimeout(updateText, delayBetweenStrings);
        }
      } else {
        const currentString = strings[currentStringIndex];
        if (fullTextRef.current.length < currentString.length) {
          fullTextRef.current = currentString.slice(0, fullTextRef.current.length + 1);
          setDisplayedText(fullTextRef.current);
          timeout = setTimeout(updateText, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            timeout = setTimeout(updateText, delayBetweenStrings);
          }, delayBetweenStrings);
        }
      }
    };

    timeout = setTimeout(updateText, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentStringIndex, isDeleting, strings, typingSpeed, deletingSpeed, delayBetweenStrings, displayedText]);

  return (
    <span className="inline-block relative">
      {displayedText}
      <span className="inline-block w-[3px] animate-blink">|</span>
    </span>
  );
};

export default TypingEffect;