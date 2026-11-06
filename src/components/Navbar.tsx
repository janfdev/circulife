"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircuLifeMark } from "@/components/CircuLifeLogo";
import {
  Recycle,
  Info,
  BookOpen,
  Mail,
  PackageCheck,
  Calculator,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface NavbarProps {
  currentPath?: string;
}

export const NAV_ITEMS = [
  { href: "/", label: "Beranda", icon: Recycle },
  { href: "/about", label: "Tentang Kami", icon: Info },
  { href: "/galeri", label: "Artikel & Galeri", icon: BookOpen },
  { href: "/contact", label: "Kontak", icon: Mail },
  { href: "/lapor", label: "Setor Sampah", icon: PackageCheck, isAction: true },
  { href: "/pantau", label: "Kalkulator Nilai", icon: Calculator },
];

export default function Navbar({ currentPath }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let pathname = "/";
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    pathname = usePathname() || "/";
  } catch {
    pathname = "/";
  }
  const activePath = currentPath ?? pathname;

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
      {/* Telemetry Strip */}
      <div className="hidden sm:block border-b border-border/60 bg-muted/40 px-4 sm:px-6 lg:px-8 py-2 text-[11px] text-muted-foreground font-mono">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>CIRCULIFE HUB : ZERO WASTE</span>
            </span>
            <span className="text-border">|</span>
            <span className="tabular-nums">184.6 TON SAMPAH TERKELOLA</span>
            <span className="text-border">|</span>
            <span className="tabular-nums">132.8 TON REDUKSI CO2e</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 text-primary" aria-hidden="true" />
              <span>24 DROP-POINT NASIONAL AKTIF</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Identity */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none group"
        >
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-card border border-border/80 shadow-sm ring-1 ring-primary/20 transition-transform group-hover:scale-105">
            <CircuLifeMark className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-foreground sm:text-lg">
              CIRCULIFE
            </span>
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="h-4 border-primary/30 px-1.5 py-0 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground tabular-nums font-mono">
                Digital Zero Waste & Value Hub
              </Badge>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Navigasi Utama">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.href;

            if (item.isAction) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`ml-2 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all focus-visible:ring-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold tracking-wide uppercase transition-all focus-visible:ring-2 ${
                  isActive
                    ? "bg-primary/10 text-primary font-extrabold"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Theme Toggle Button Desktop */}
          <AnimatedThemeToggler
            variant="circle"
            duration={450}
            aria-label="Toggle tema gelap atau terang"
            className="ml-1 h-9 w-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/50 [&_svg]:h-4 [&_svg]:w-4 dark:[&_svg]:text-emerald-400"
          />
        </nav>

        {/* Mobile menu and theme buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <AnimatedThemeToggler
            variant="circle"
            duration={450}
            aria-label="Toggle tema gelap atau terang"
            className="h-10 w-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/50 [&_svg]:h-4 [&_svg]:w-4 dark:[&_svg]:text-emerald-400"
          />

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            className="h-11 w-11 rounded-lg"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          data-testid="mobile-menu"
          className="border-b border-border bg-card px-4 pb-6 pt-3 shadow-lg md:hidden animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-2" aria-label="Navigasi Mobile">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activePath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex h-12 items-center justify-between rounded-xl px-4 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 opacity-90" aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                  {item.isAction && (
                    <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider">
                      Setor & Tukar
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
