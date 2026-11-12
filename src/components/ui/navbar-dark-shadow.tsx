"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

export interface NavbarDarkShadowProps {
  children?: React.ReactNode;
  className?: string;
  threshold?: number;
  banner?: React.ReactNode;
  brand?: React.ReactNode;
  desktopNav?: React.ReactNode;
  actions?: React.ReactNode;
  mobileMenu?: React.ReactNode;
  mobileMenuOpen?: boolean;
}

/**
 * NavbarDarkShadow
 * Tactile ridge-and-groove shadow system inspired by Aceternity UI.
 * Features auto-shrink responsive docking on scroll with hardware-accelerated transitions.
 */
export function NavbarDarkShadow({
  children,
  className,
  threshold = 30,
  banner,
  brand,
  desktopNav,
  actions,
  mobileMenu,
  mobileMenuOpen = false,
}: NavbarDarkShadowProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof latest === "number") {
      setIsScrolled(latest > threshold);
    }
  });

  // Fallback passive listener for reliable cross-browser and test environment support
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        isScrolled ? "pt-2 sm:pt-3 pb-1" : "pt-0 pb-0",
        className
      )}
    >
      {/* Dynamic Announcement Banner with smooth collapse on scroll */}
      {banner && (
        <div
          className={cn(
            "w-full transition-all duration-300 ease-out origin-top",
            isScrolled
              ? "max-h-0 opacity-0 overflow-hidden pointer-events-none -translate-y-2"
              : "max-h-20 opacity-100 translate-y-0"
          )}
          aria-hidden={isScrolled}
        >
          {banner}
        </div>
      )}

      {/* Nav Container with Adaptive Resizing & Aceternity Tactile Ridge & Groove Dark Shadow */}
      <div
        className={cn(
          "mx-auto transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "max-w-5xl px-3 sm:px-6"
            : "max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            isScrolled
              ? "h-13 sm:h-14 px-4 sm:px-6 rounded-2xl sm:rounded-full bg-background/85 dark:bg-neutral-950/85 backdrop-blur-xl border border-border/70 dark:border-white/15 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_12px_32px_-8px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.8),inset_0_-1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_-1px_0_0_rgba(0,0,0,0.6)] ring-1 ring-primary/10"
              : "h-16 sm:h-18 px-0 rounded-none border-b border-border/80 bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-none"
          )}
        >
          {/* Brand Slot */}
          <div className="flex items-center transition-transform duration-200">
            {brand}
          </div>

          {/* Desktop Nav Slot */}
          {desktopNav && (
            <div className="hidden md:flex items-center gap-1">
              {desktopNav}
            </div>
          )}

          {/* Actions Slot (CTA button, theme toggle, mobile toggle) */}
          <div className="flex items-center gap-2">
            {actions}
          </div>
        </div>
      </div>

      {/* Children override if provided directly */}
      {children}

      {/* Mobile Menu Drawer with matching tactile dark shadow */}
      {mobileMenuOpen && mobileMenu && (
        <div
          data-testid="mobile-menu"
          className="mx-auto mt-2 max-w-[calc(100vw-2rem)] sm:max-w-lg max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border/80 dark:border-white/15 bg-card/95 dark:bg-neutral-950/95 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.15),inset_0_-1px_0_0_rgba(0,0,0,0.6)] backdrop-blur-xl md:hidden animate-in slide-in-from-top-2 duration-200"
        >
          {mobileMenu}
        </div>
      )}
    </header>
  );
}
