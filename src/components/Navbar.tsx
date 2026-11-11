"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircuLifeMark } from "@/components/CircuLifeLogo";
import {
  Menu,
  X,
  PackageCheck,
  ChevronDown,
  Calculator,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { NavbarDarkShadow } from "@/components/ui/navbar-dark-shadow";

export interface NavbarProps {
  currentPath?: string;
}

export const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/konservasi", label: "Produk Olahan" },
  { href: "/pantau", label: "Hitung Dampak" },
  { href: "/edukasi", label: "Panduan" },
  { href: "/galeri", label: "Dokumentasi" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
  { href: "/lapor", label: "Setor Sampah", isAction: true },
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

  const isEcosystemActive =
    activePath === "/pantau" ||
    activePath === "/edukasi" ||
    activePath === "/galeri";

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
      mobileMenuOpen={mobileMenuOpen}
      brand={
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none group"
        >
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-card border border-border/80 shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-primary/20 transition-transform group-hover:scale-105">
            <CircuLifeMark className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <span className="text-base font-black tracking-tight text-foreground sm:text-lg">
            CIRCULIFE
          </span>
        </Link>
      }
      desktopNav={
        <nav className="flex items-center gap-1.5" aria-label="Navigasi Utama">
          {/* 1. Beranda */}
          <Link
            href="/"
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              activePath === "/"
                ? "bg-primary/10 text-primary font-black"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            }`}
          >
            Beranda
          </Link>

          {/* 2. Produk Olahan */}
          <Link
            href="/konservasi"
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              activePath === "/konservasi"
                ? "bg-primary/10 text-primary font-black"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            }`}
          >
            Produk Olahan
          </Link>

          {/* 3. Dropdown Menu: Wawasan & Fitur */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer outline-none ${
                isEcosystemActive
                  ? "bg-primary/10 text-primary font-black"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              <span>Fitur &amp; Wawasan</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-60 p-2 rounded-2xl border border-border/80 bg-popover text-popover-foreground shadow-xl"
            >
              <DropdownMenuItem
                render={
                  <Link
                    href="/pantau"
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-xl transition-colors cursor-pointer w-full group/item"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors shrink-0">
                      <Calculator className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-foreground leading-tight">Hitung Dampak</span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">Kalkulator konversi limbah</span>
                    </div>
                  </Link>
                }
              />
              <DropdownMenuItem
                render={
                  <Link
                    href="/edukasi"
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-xl transition-colors cursor-pointer w-full group/item"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors shrink-0">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-foreground leading-tight">Panduan &amp; Kuis</span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">Modul pemilahan zero waste</span>
                    </div>
                  </Link>
                }
              />
              <DropdownMenuItem
                render={
                  <Link
                    href="/galeri"
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-xl transition-colors cursor-pointer w-full group/item"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors shrink-0">
                      <ImageIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-foreground leading-tight">Dokumentasi</span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">Foto transformasi fisik</span>
                    </div>
                  </Link>
                }
              />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 4. Tentang Kami */}
          <Link
            href="/about"
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              activePath === "/about"
                ? "bg-primary/10 text-primary font-black"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            }`}
          >
            Tentang
          </Link>

          {/* Action Button: Setor Sampah */}
          <Link
            href="/lapor"
            className={`ml-1.5 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activePath === "/lapor"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            <PackageCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Setor Sampah</span>
          </Link>

          {/* Theme Toggler */}
          <AnimatedThemeToggler
            variant="circle"
            duration={450}
            aria-label="Toggle tema gelap atau terang"
            className="ml-1 h-9 w-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors border border-border/80 [&_svg]:h-4 [&_svg]:w-4"
          />
        </nav>
      }
      actions={
        <div className="flex items-center gap-2 md:hidden">
          <AnimatedThemeToggler
            variant="circle"
            duration={450}
            aria-label="Toggle tema gelap atau terang"
            className="h-9 w-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/80 [&_svg]:h-4 [&_svg]:w-4"
          />

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            className="h-9 w-9 rounded-full border-border/80 shadow-xs"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
        </div>
      }
      mobileMenu={
        <nav className="flex flex-col gap-2" aria-label="Navigasi Mobile">
          {NAV_ITEMS.map((item) => {
            const isActive = activePath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex h-11 items-center justify-between rounded-xl px-4 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-muted/70"
                }`}
              >
                <span>{item.label}</span>
                {item.isAction && (
                  <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider rounded-full">
                    Aksi Warga
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