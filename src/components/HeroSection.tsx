import React from "react";
import Link from "next/link";
import { Flame, ShieldCheck, Mountain, AlertCircle, ArrowDown } from "lucide-react";
import { TNGC_INFO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-border bg-gradient-to-b from-forest-50/60 to-background dark:from-forest-950/40 dark:to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status Siaga Alert Strip */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-900 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
          <span>STATUS SIAGA: WASPADA POTENSI KARHUTLA MUSIM KEMARAU TNGC</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Lindungi Atap Jawa Barat Dari Bahaya Kebakaran Hutan & Kerusakan Lingkungan
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Platform digital edukasi, mitigasi cepat kebakaran, dan partisipasi publik untuk menjaga kelestarian ekosistem dan keanekaragaman hayati Taman Nasional Gunung Ciremai.
            </p>

            {/* Direct Specific CTAs (Anti-slop R-15) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/lapor"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-600"
              >
                <Flame className="h-5 w-5" aria-hidden="true" />
                <span>Lapor Indikasi Titik Asap / Api</span>
              </Link>
              <Link
                href="/edukasi"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border border-border bg-card px-6 text-sm font-bold text-foreground transition-all hover:bg-muted focus-visible:ring-2"
              >
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Pelajari SOP Rimba Bebas Api</span>
              </Link>
            </div>
          </div>

          {/* Factual Information Card (Anti-slop R-17: Factual TNGC Data Only) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="font-extrabold text-sm uppercase tracking-wider text-foreground">
                    Fakta Konservasi TNGC
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase">
                  Data Resmi
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="rounded-lg bg-muted/40 p-3.5 border border-border/50">
                  <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Ketinggian Puncak
                  </span>
                  <span className="text-2xl font-black text-foreground tabular-nums">
                    {TNGC_INFO.peakElevationMeters.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xs text-muted-foreground block font-medium">mdpl (Tertinggi Jabar)</span>
                </div>

                <div className="rounded-lg bg-muted/40 p-3.5 border border-border/50">
                  <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Luas Kawasan
                  </span>
                  <span className="text-2xl font-black text-foreground tabular-nums">
                    {TNGC_INFO.totalAreaHectares.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xs text-muted-foreground block font-medium">Hektar Lindung</span>
                </div>

                <div className="rounded-lg bg-muted/40 p-3.5 border border-border/50">
                  <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Jalur Resmi
                  </span>
                  <span className="text-2xl font-black text-foreground tabular-nums">4</span>
                  <span className="text-xs text-muted-foreground block font-medium">Posko Pendakian</span>
                </div>

                <div className="rounded-lg bg-muted/40 p-3.5 border border-border/50">
                  <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Wilayah
                  </span>
                  <span className="text-sm font-extrabold text-foreground block mt-1">
                    Kuningan & Majalengka
                  </span>
                  <span className="text-xs text-muted-foreground block font-medium">Jawa Barat</span>
                </div>
              </div>

              {/* Callout Notice */}
              <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-amber-50 p-3 text-xs text-amber-900 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-200 dark:border-amber-900/50">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                <p className="leading-snug">
                  Dilarang keras menyalakan api unggun, membakar sampah, atau membuang puntung rokok di seluruh jalur pendakian dan zona konservasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue to Trail Status */}
        <div className="mt-12 flex items-center justify-center">
          <a
            href="#jalur-status"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Periksa Kondisi 4 Posko Jalur Pendakian</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
