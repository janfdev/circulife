"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Flame, BookOpen, Trees, Radio, Menu, X } from "lucide-react";

interface NavbarProps {
  currentPath?: string;
}

const NAV_ITEMS = [
  { href: "/", label: "Beranda", icon: ShieldCheck },
  { href: "/lapor", label: "Lapor Cepat", icon: Flame, alertHighlight: true },
  { href: "/edukasi", label: "Edukasi Karhutla", icon: BookOpen },
  { href: "/konservasi", label: "Konservasi", icon: Trees },
  { href: "/pantau", label: "Pantau Cuaca", icon: Radio },
];

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Elevation */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-800 text-white shadow-sm dark:bg-forest-700">
            <ShieldCheck className="h-6 w-6 text-emerald-300" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-foreground sm:text-lg">
              CIREMAI GUARD
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground tabular-nums">
              Puncak 3.078 mdpl : TNGC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi Utama">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.href;

            if (item.alertHighlight) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`ml-2 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:ring-2 ${
                    isActive
                      ? "bg-red-600 text-white shadow-sm"
                      : "bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-900/50"
                  }`}
                >
                  <Icon className="h-4 w-4 text-red-600 dark:text-red-400" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:ring-2 ${
                  isActive
                    ? "bg-forest-800 text-white dark:bg-forest-700"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 opacity-75" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle (Min Tap Target 44px) */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          data-testid="mobile-menu"
          className="border-b border-border bg-card px-4 pb-6 pt-3 shadow-lg md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Navigasi Mobile">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex h-12 items-center gap-3 rounded-lg px-4 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-forest-800 text-white dark:bg-forest-700"
                      : item.alertHighlight
                      ? "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
