import React from "react";
import Link from "next/link";
import { Flame, ShieldCheck, Mountain, AlertCircle, ArrowDown } from "lucide-react";
import { TNGC_INFO } from "@/lib/constants";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status Siaga Alert Strip */}
        <div className="mb-6 inline-flex items-center gap-2">
          <Badge
            variant="outline"
            className="gap-2 border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-900 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
            <span>STATUS SIAGA: WASPADA POTENSI KARHUTLA MUSIM KEMARAU TNGC</span>
          </Badge>
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
                className={cn(buttonVariants({ variant: "destructive", size: "lg" }), "h-12 px-6 text-sm font-bold shadow-sm inline-flex items-center gap-2.5")}
              >
                <Flame className="h-5 w-5" aria-hidden="true" />
                <span>Lapor Indikasi Titik Asap / Api</span>
              </Link>
              <Link
                href="/edukasi"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-sm font-bold inline-flex items-center gap-2.5")}
              >
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Pelajari SOP Rimba Bebas Api</span>
              </Link>
            </div>
          </div>

          {/* Factual Information Card (Anti-slop R-17: Factual TNGC Data Only) */}
          <div className="lg:col-span-5">
            <Card className="shadow-sm border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-border space-y-0">
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-primary" aria-hidden="true" />
                  <CardTitle className="font-extrabold text-sm uppercase tracking-wider text-foreground">
                    Fakta Konservasi TNGC
                  </CardTitle>
                </div>
                <Badge variant="secondary" className="text-xs font-semibold uppercase">
                  Data Resmi
                </Badge>
              </CardHeader>

              <CardContent className="pt-4">
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
                <Alert className="mt-4 border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <AlertDescription className="text-xs leading-snug font-medium text-amber-900 dark:text-amber-200">
                    Dilarang keras menyalakan api unggun, membakar sampah, atau membuang puntung rokok di seluruh jalur pendakian dan zona konservasi.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll cue to Trail Status */}
        <div className="mt-12 flex items-center justify-center">
          <a
            href="#jalur-status"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground")}
          >
            <span>Periksa Kondisi 4 Posko Jalur Pendakian</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
