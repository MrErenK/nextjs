import React from 'react';
import useTyped from '../hooks/useTyped';

interface TypingEffectProps {
  strings: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ strings }) => {
  const el = useTyped({ strings });

  return <span ref={el} />;
};

export default TypingEffect;