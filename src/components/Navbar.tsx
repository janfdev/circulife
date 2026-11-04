"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Flame, BookOpen, Trees, Radio, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <ShieldCheck className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-foreground sm:text-lg">
              CIREMAI GUARD
            </span>
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="h-4 border-primary/30 px-1 py-0 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground tabular-nums">
                Puncak 3.078 mdpl : TNGC
              </Badge>
            </div>
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
                      ? "bg-destructive text-destructive-foreground shadow-sm"
                      : "bg-destructive/10 text-destructive hover:bg-destructive/20 dark:bg-destructive/20 dark:text-red-300 dark:hover:bg-destructive/30"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
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
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 opacity-80" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle (Min Tap Target 44px) */}
        <div className="flex items-center md:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            className="h-11 w-11"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
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
                      ? "bg-primary text-primary-foreground"
                      : item.alertHighlight
                      ? "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-red-300"
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
