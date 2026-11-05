import React from "react";
import { cn } from "@/lib/utils";

export interface CircuLifeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  showTag?: boolean;
}

export function CircuLifeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="CircuLife Logo Mark"
    >
      <defs>
        <linearGradient id="circulife-primary-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#105744" />
          <stop offset="50%" stopColor="#17885F" />
          <stop offset="100%" stopColor="#1BC483" />
        </linearGradient>
        <linearGradient id="circulife-accent-grad" x1="20" y1="8" x2="44" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2EE59D" />
          <stop offset="100%" stopColor="#105744" />
        </linearGradient>
      </defs>

      {/* Outer Continuous 'C' Circular Loop representing Closed-Loop Economy */}
      <path
        d="M36 12.5C32.8 9.1 28.2 7 23 7C13.6 7 6 14.6 6 24C6 33.4 13.6 41 23 41C30.6 41 37 36 39.2 29.2C39.6 28 38.6 26.8 37.3 26.8H35.8C34.8 26.8 33.9 27.4 33.6 28.3C31.8 33 27.6 36.2 22.8 36.2C16.1 36.2 10.7 30.7 10.7 24C10.7 17.3 16.1 11.8 22.8 11.8C26.5 11.8 29.7 13.4 31.9 16H27.5C26.4 16 25.5 16.9 25.5 18C25.5 19.1 26.4 20 27.5 20H37C38.1 20 39 19.1 39 18V8.5C39 7.4 38.1 6.5 37 6.5C35.9 6.5 35 7.4 35 8.5V11.4L36 12.5Z"
        fill="url(#circulife-primary-grad)"
      />

      {/* Inner Dynamic Sprout Leaf / Value Transformation Node */}
      <path
        d="M24 16C24 16 29 19 29 25C29 28.3 26.3 31 23 31C19.7 31 17 28.3 17 25C17 19 24 16 24 16Z"
        fill="url(#circulife-accent-grad)"
      />

      {/* Center Core Biocatalyst Dot */}
      <circle cx="23" cy="24.5" r="2.2" fill="#FFFFFF" />
    </svg>
  );
}

export default function CircuLifeLogo({
  className,
  size = "md",
  showWordmark = false,
  showTag = false,
}: CircuLifeLogoProps) {
  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-10 w-10 sm:h-11 sm:w-11",
    lg: "h-12 w-12 sm:h-14 sm:w-14",
    xl: "h-16 w-16 sm:h-20 sm:w-20",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-xl bg-card border border-border/80 shadow-sm transition-transform group-hover:scale-105",
          sizeMap[size]
        )}
      >
        <CircuLifeMark className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <span className="text-base font-black tracking-tight text-foreground sm:text-lg leading-tight font-sans">
            CIRCULIFE
          </span>
          {showTag && (
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground tabular-nums">
              Digital Zero Waste & Value Hub
            </span>
          )}
        </div>
      )}
    </div>
  );
}
