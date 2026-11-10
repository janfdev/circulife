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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AnnouncementBanner } from "@/components/blocks/announcement/AnnouncementBanner";
import { NavbarDarkShadow } from "@/components/ui/navbar-dark-shadow";

interface NavbarProps {
  currentPath?: string;
}

export const NAV_ITEMS = [
  { href: "/", label: "Beranda", icon: Recycle },
  { href: "/konservasi", label: "Katalog Sirkular", icon: PackageCheck },
  { href: "/pantau", label: "Simulator Dampak", icon: Calculator },
  { href: "/edukasi", label: "Edukasi & Kuis", icon: BookOpen },
  { href: "/galeri", label: "Galeri & Artikel", icon: Info },
  { href: "/about", label: "Tentang Kami", icon: Info },
  { href: "/contact", label: "Kontak", icon: Mail },
  { href: "/lapor", label: "Setor Sampah", icon: PackageCheck, isAction: true },
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
    <NavbarDarkShadow
      banner={<AnnouncementBanner variant="interactive-ticker" />}
      mobileMenuOpen={mobileMenuOpen}
      brand={
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none group"
        >
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-card border border-border/80 shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-primary/20 transition-transform group-hover:scale-105">
            <CircuLifeMark className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-foreground sm:text-lg">
              CIRCULIFE
            </span>
            <div className="flex items-center gap-1.5">
              <Badge
                variant="outline"
                className="h-4 border-primary/30 px-1.5 py-0 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground tabular-nums font-mono"
              >
                Digital Zero Waste & Value Hub
              </Badge>
            </div>
          </div>
        </Link>
      }
      desktopNav={
        <nav className="flex items-center gap-1" aria-label="Navigasi Utama">
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
                      ? "bg-primary text-primary-foreground shadow-[0_2px_6px_rgba(16,185,129,0.35),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.4)]"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.4)] hover:shadow-[0_4px_12px_rgba(16,185,129,0.4),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.5)] active:translate-y-0.5"
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
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold tracking-wide uppercase transition-all focus-visible:ring-2 ${
                  isActive
                    ? "bg-primary/10 text-primary font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-foreground/80 hover:bg-muted/70 hover:text-foreground dark:hover:bg-white/10 dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                }`}
              >
                <Icon className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <AnimatedThemeToggler
            variant="circle"
            duration={450}
            aria-label="Toggle tema gelap atau terang"
            className="ml-1 h-9 w-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 dark:hover:bg-white/10 transition-colors border border-border/50 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] [&_svg]:h-4 [&_svg]:w-4 dark:[&_svg]:text-emerald-400"
          />
        </nav>
      }
      actions={
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
            className="h-10 w-10 rounded-xl border-border/80 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      }
      mobileMenu={
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
                    ? "bg-primary text-primary-foreground shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)]"
                    : "text-foreground hover:bg-muted/70 dark:hover:bg-white/5"
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
      }
    />
  );
}
