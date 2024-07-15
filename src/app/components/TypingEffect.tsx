'use client'

import React, { useState, useEffect } from 'react';

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
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentString = strings[currentStringIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          timeout = setTimeout(type, delayBetweenStrings);
        } else {
          timeout = setTimeout(type, deletingSpeed);
        }
      } else {
        setCurrentText(currentString.slice(0, currentText.length + 1));
        if (currentText === currentString) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            timeout = setTimeout(type, delayBetweenStrings);
          }, delayBetweenStrings);
        } else {
          timeout = setTimeout(type, typingSpeed);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, delayBetweenStrings]);

  return (
    <span className="inline-block relative">
      {currentText}
      <span className="inline-block w-[3px] animate-blink">|</span>
    </span>
  );
};

export default TypingEffect;