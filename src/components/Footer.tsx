import React from "react";
import Link from "next/link";
import { Recycle, PhoneCall, Trees, MapPin, Heart, Sprout } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card text-foreground">
      {/* Information Strip with generous padding */}
      <div className="border-b border-primary/20 bg-primary/10 px-4 sm:px-6 lg:px-8 py-3.5 dark:bg-primary/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 font-semibold text-foreground">
            <Recycle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>Posko Sirkular Sampah & Informasi Balai TNGC (24 Jam) : 0232-613158</span>
          </div>
          <a
            href="tel:0232613158"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-10 px-4 gap-2 font-bold shadow-sm rounded-xl border-primary/30 text-primary")}
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            <span>Panggil Posko TNGC</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          {/* Col 1: Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Trees className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="text-lg font-black tracking-tight">CIREMAI GUARD</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sentra Pemanfaatan & Sirkular Sampah Taman Nasional Gunung Ciremai (3.078 mdpl). Mengubah limbah pendakian menjadi paving block, pupuk kompos bibit Saninten, dan nilai ekonomi bagi masyarakat desa lereng Kuningan & Majalengka.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Kuningan & Majalengka, Jawa Barat, Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigation & Services */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Kanal Layanan Sirkular
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/lapor" className="transition-colors hover:text-primary">
                  Setor Sampah Terpilah & Tukar Bibit
                </Link>
              </li>
              <li>
                <Link href="/edukasi" className="transition-colors hover:text-primary">
                  SOP Pemilahan & Kuis Sirkularitas Rimba
                </Link>
              </li>
              <li>
                <Link href="/konservasi" className="transition-colors hover:text-primary">
                  Katalog Produk Olahan Daur Ulang Mandiri
                </Link>
              </li>
              <li>
                <Link href="/pantau" className="transition-colors hover:text-primary">
                  Kalkulator Nilai Sampah & Cuaca Lereng
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Pos Lapangan Resmi */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Drop Box 4 Jalur Pendakian Resmi
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Palutungan</p>
                <p className="text-muted-foreground mt-0.5">KSM Palutungan Asri</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Apuy</p>
                <p className="text-muted-foreground mt-0.5">KSM Sahabat Hutan</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Linggarjati</p>
                <p className="text-muted-foreground mt-0.5">KSM Green Camp</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Sadarehe</p>
                <p className="text-muted-foreground mt-0.5">KSM Rimba Sadarehe</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 sm:my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row font-mono">
          <p className="tabular-nums">
            &copy; 2026 CIREMAI GUARD : Kolaborasi Balai TNGC, KSM Daur Ulang Desa & Komunitas Pendaki Lestari.
          </p>
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <span>Menjaga Ciremai Zero Waste</span>
            <Heart className="h-3.5 w-3.5 fill-current text-primary" aria-hidden="true" />
            <span>Sirkular Berkelanjutan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
