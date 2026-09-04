"use client";

/**
 * Purpose: Hero system-architecture diagram showing ERP as the hub of ops systems.
 * Props: className, labels (localized node/legend copy).
 * Reusability: Home hero (and any page that needs the same architecture visual).
 */

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/get-dictionary";

type NodeId = keyof Dictionary["diagram"]["nodes"];

type NodeLayout = {
  id: NodeId;
  x: number;
  y: number;
  w: number;
  h: number;
  active?: boolean;
  hub?: boolean;
};

const LAYOUT: NodeLayout[] = [
  { id: "finance", x: 72, y: 236, w: 108, h: 72 },
  { id: "supply", x: 292, y: 72, w: 108, h: 72, active: true },
  { id: "core", x: 278, y: 220, w: 136, h: 88, hub: true },
  { id: "plant", x: 292, y: 388, w: 108, h: 72, active: true },
  { id: "people", x: 500, y: 148, w: 118, h: 72, active: true },
  { id: "customer", x: 500, y: 312, w: 118, h: 72 },
];

const HUB = { cx: 346, cy: 264 };
const SPOKES = [
  { id: "to-finance", d: "M238 264 H180" },
  { id: "to-supply", d: "M346 220 V144" },
  { id: "to-plant", d: "M346 308 V388" },
  { id: "to-people", d: "M414 240 L500 184" },
  { id: "to-customer", d: "M414 288 L500 348" },
];

export function ErpDiagram({
  className,
  labels,
}: {
  className?: string;
  labels: Dictionary["diagram"];
}) {
  const reduce = useReducedMotion();

  return (
    <figure
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 flex w-full max-w-[780px] items-center justify-end",
        className
      )}
      aria-labelledby="erp-diagram-caption"
    >
      <figcaption id="erp-diagram-caption" className="sr-only">
        {labels.caption}
      </figcaption>

      <motion.svg
        className="h-auto w-[min(100%,720px)] translate-x-4 opacity-90 sm:translate-x-0 sm:opacity-100 lg:-translate-x-2"
        viewBox="0 0 720 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="erpFadeLeft" x1="0" y1="0" x2="0.38" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="erpLeftFade">
            <rect width="720" height="560" fill="url(#erpFadeLeft)" />
          </mask>
          <filter id="erpNodeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.08" />
          </filter>
          <filter id="erpHubShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.18" />
          </filter>
        </defs>

        <g mask="url(#erpLeftFade)">
          {SPOKES.map((spoke, i) => (
            <motion.path
              key={spoke.id}
              d={spoke.d}
              stroke="#94A3B8"
              strokeWidth="1.75"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 + i * 0.06 }}
            />
          ))}

          <circle cx={HUB.cx} cy={HUB.cy} r="78" fill="#0369A1" fillOpacity="0.06" />

          {LAYOUT.map((node, i) => {
            const copy = labels.nodes[node.id];
            const delay = 0.28 + i * 0.05;
            if (node.hub) {
              return (
                <motion.g
                  key={node.id}
                  filter="url(#erpHubShadow)"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay }}
                >
                  <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="14" fill="#0F172A" />
                  <text
                    x={node.x + node.w / 2}
                    y={node.y + 34}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontFamily="var(--font-manrope), Manrope, sans-serif"
                    fontSize="11"
                    fontWeight="600"
                    letterSpacing="0.08em"
                  >
                    {copy.domain.toUpperCase()}
                  </text>
                  <text
                    x={node.x + node.w / 2}
                    y={node.y + 56}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="var(--font-manrope), Manrope, sans-serif"
                    fontSize="18"
                    fontWeight="700"
                  >
                    {copy.system}
                  </text>
                </motion.g>
              );
            }

            return (
              <motion.g
                key={node.id}
                filter="url(#erpNodeShadow)"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay }}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  rx="12"
                  fill="#FFFFFF"
                  stroke={node.active ? "#BAE6FD" : "#E2E8F0"}
                  strokeWidth="1.5"
                />
                <text
                  x={node.x + node.w / 2}
                  y={node.y + 28}
                  textAnchor="middle"
                  fill={node.active ? "#0369A1" : "#64748B"}
                  fontFamily="var(--font-manrope), Manrope, sans-serif"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0.06em"
                >
                  {copy.domain.toUpperCase()}
                </text>
                <text
                  x={node.x + node.w / 2}
                  y={node.y + 48}
                  textAnchor="middle"
                  fill="#0F172A"
                  fontFamily="var(--font-manrope), Manrope, sans-serif"
                  fontSize="13"
                  fontWeight="600"
                >
                  {copy.system}
                </text>
                {node.active && (
                  <circle cx={node.x + node.w - 14} cy={node.y + 14} r="4.5" fill="#0284C7" />
                )}
              </motion.g>
            );
          })}

          <g transform="translate(500, 460)">
            <circle cx="6" cy="0" r="4.5" fill="#0284C7" />
            <text
              x="18"
              y="4"
              fill="#64748B"
              fontFamily="var(--font-manrope), Manrope, sans-serif"
              fontSize="11"
              fontWeight="500"
            >
              {labels.integrated}
            </text>
            <rect x="100" y="-6" width="12" height="12" rx="3" fill="#FFFFFF" stroke="#E2E8F0" />
            <text
              x="120"
              y="4"
              fill="#64748B"
              fontFamily="var(--font-manrope), Manrope, sans-serif"
              fontSize="11"
              fontWeight="500"
            >
              {labels.adjacent}
            </text>
          </g>
        </g>
      </motion.svg>
    </figure>
  );
}
