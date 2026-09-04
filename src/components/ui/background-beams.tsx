"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const PATHS = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
  "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
  "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
  "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
  "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
  "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
  "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
  "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  "M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475",
  "M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435",
];

export const BackgroundBeams = React.memo(function BackgroundBeams({
  className,
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  const delays = useMemo(() => PATHS.map((_, i) => (i % 5) * 0.8), []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {PATHS.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke={`url(#beam-grad-${index})`}
            strokeOpacity="0.35"
            strokeWidth="0.5"
            initial={false}
          />
        ))}
        <defs>
          {PATHS.map((_, index) => (
            <motion.linearGradient
              id={`beam-grad-${index}`}
              key={`gradient-${index}`}
              initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
              animate={
                reduce
                  ? undefined
                  : {
                      x1: ["0%", "100%"],
                      x2: ["0%", "95%"],
                      y1: ["0%", "100%"],
                      y2: ["0%", "96%"],
                    }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 12 + (index % 4),
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: delays[index],
                    }
              }
            >
              <stop stopColor="#0369A1" stopOpacity="0" />
              <stop offset="0.5" stopColor="#0369A1" stopOpacity="0.9" />
              <stop offset="1" stopColor="#0F172A" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
});
