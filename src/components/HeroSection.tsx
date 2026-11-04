import React from "react";
import Link from "next/link";
import { Flame, ShieldCheck, Mountain, AlertCircle, ArrowDown, Activity, Radio, MapPin } from "lucide-react";
import { TNGC_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,68,54,0.12),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status Siaga Alert Strip */}
        <div className="mb-6 inline-flex items-center gap-2">
          <Badge
            variant="outline"
            className="gap-2 border-amber-400/40 bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold text-amber-900 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="font-mono tracking-wide">STATUS SIAGA: WASPADA POTENSI KARHUTLA MUSIM KEMARAU TNGC</span>
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Radio className="h-3.5 w-3.5 text-accent animate-pulse" aria-hidden="true" />
                <span>Pusat Kendali Ekosistem Lereng Vulkanik</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.12]">
                Lindungi Atap Jawa Barat Dari Bahaya Kebakaran Hutan & Kerusakan Lingkungan
              </h1>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Platform digital edukasi, mitigasi cepat kebakaran, dan partisipasi publik untuk menjaga kelestarian ekosistem dan keanekaragaman hayati Taman Nasional Gunung Ciremai.
            </p>

            {/* Direct Specific CTAs (Anti-slop R-15) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/lapor"
                className={cn(buttonVariants({ variant: "destructive", size: "lg" }), "h-12 px-6 text-sm font-bold shadow-sm inline-flex items-center gap-2.5 rounded-xl")}
              >
                <Flame className="h-5 w-5" aria-hidden="true" />
                <span>Lapor Indikasi Titik Asap / Api</span>
              </Link>
              <Link
                href="/edukasi"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-sm font-bold inline-flex items-center gap-2.5 rounded-xl border-primary/30 hover:bg-primary/5")}
              >
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Pelajari SOP Rimba Bebas Api</span>
              </Link>
            </div>

            {/* Quick Geo-Location Telemetry Footprint */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>Kuningan : 06°53&apos;42&quot; LS</span>
              </span>
              <span className="text-border">|</span>
              <span>Majalengka : 108°24&apos;22&quot; BT</span>
              <span className="text-border">|</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">4 Pos Lapangan Siaga</span>
            </div>
          </div>

          {/* Factual Information & Visual Silhouette Card */}
          <div className="lg:col-span-5">
            <Card className="shadow-lg border-border/80 bg-card/95 backdrop-blur-sm overflow-hidden rounded-2xl ring-1 ring-border">
              {/* Telemetry Header */}
              <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-border space-y-0 bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mountain className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
                      Fakta Konservasi TNGC
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground font-mono">Telemetri Kawasan Konservasi</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-[10px] font-mono font-bold uppercase tracking-wider">
                  Data Resmi
                </Badge>
              </CardHeader>

              <CardContent className="pt-5 space-y-5">
                {/* Visual Elevation Profile Silhouette */}
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-muted-foreground uppercase">
                    <span>Profil Ketinggian Vulkanik</span>
                    <span className="text-primary font-bold">Puncak 3.078 mdpl</span>
                  </div>

                  {/* SVG Elevation Vector */}
                  <svg
                    viewBox="0 0 360 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-16 text-primary"
                    aria-label="Siluet Kontur Elevasi Gunung Ciremai"
                    role="img"
                  >
                    <defs>
                      <linearGradient id="ciremaiGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {/* Horizon line */}
                    <line x1="10" y1="72" x2="350" y2="72" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Ridge path */}
                    <path
                      d="M 10 72 L 50 68 L 100 58 L 140 40 L 180 12 L 220 38 L 270 56 L 315 67 L 350 72 Z"
                      fill="url(#ciremaiGradient)"
                    />
                    <path
                      d="M 10 72 L 50 68 L 100 58 L 140 40 L 180 12 L 220 38 L 270 56 L 315 67 L 350 72"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Peak marker */}
                    <circle cx="180" cy="12" r="3.5" fill="currentColor" />
                    <circle cx="180" cy="12" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <text x="180" y="8" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      3.078 M
                    </text>
                  </svg>

                  <div className="flex justify-between text-[9px] font-mono text-muted-foreground px-1">
                    <span>Palutungan (Kng)</span>
                    <span>Kawah Ciremai</span>
                    <span>Apuy (Mjl)</span>
                  </div>
                </div>

                {/* 4 Factual Metrics */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-xl bg-muted/30 p-3.5 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Ketinggian Puncak
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-0.5 block">
                      {TNGC_INFO.peakElevationMeters.toLocaleString("id-ID")}
                    </span>
                    <span className="text-[11px] text-muted-foreground block font-medium">mdpl (Tertinggi Jabar)</span>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-3.5 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Luas Kawasan
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-0.5 block">
                      {TNGC_INFO.totalAreaHectares.toLocaleString("id-ID")}
                    </span>
                    <span className="text-[11px] text-muted-foreground block font-medium">Hektar Lindung</span>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-3.5 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Jalur Resmi
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-0.5 block">4</span>
                    <span className="text-[11px] text-muted-foreground block font-medium">Posko Pendakian</span>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-3.5 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Wilayah
                    </span>
                    <span className="text-sm font-bold text-foreground block mt-1 leading-snug">
                      Kuningan & Majalengka
                    </span>
                    <span className="text-[11px] text-muted-foreground block font-medium">Jawa Barat</span>
                  </div>
                </div>

                {/* Callout Notice (Anti-slop R-02 compliant: no em-dash) */}
                <Alert className="border-amber-300/50 bg-amber-500/10 text-amber-900 dark:border-amber-900/50 dark:text-amber-200 rounded-xl">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <AlertDescription className="text-xs leading-snug font-medium text-amber-900 dark:text-amber-200">
                    Dilarang keras menyalakan api unggun, membakar sampah, atau membuang puntung rokok di seluruh jalur pendakian dan zona konservasi.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll cue to Trail Status */}
        <div className="mt-14 flex items-center justify-center">
          <a
            href="#jalur-status"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground")}
          >
            <span>Periksa Kondisi 4 Posko Jalur Pendakian</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-primary" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
