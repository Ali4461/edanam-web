"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
}: {
  words: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const parts = words.split(" ");

  return (
    <motion.h1
      className={cn("font-display tracking-tight text-foreground", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : 0.035 },
        },
      }}
    >
      {parts.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.28em]"
          variants={{
            hidden: { opacity: 0, y: reduce ? 0 : 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: "easeOut" },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
