"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInEffectProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeInEffect({
  children,
  delay = 0,
  duration = 1,
  direction,
}: FadeInEffectProps) {
  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  const initialVariant = direction ? directionVariants[direction] : {};

  return (
    <motion.div
      initial={{ opacity: 0, ...initialVariant }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
