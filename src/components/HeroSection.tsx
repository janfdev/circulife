import React from "react";
import Link from "next/link";
import { Recycle, PackageCheck, Mountain, AlertCircle, ArrowDown, Calculator, MapPin, Sparkles } from "lucide-react";
import { TNGC_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,68,54,0.12),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status Hub Strip */}
        <div className="mb-8 inline-flex items-center gap-2">
          <Badge
            variant="outline"
            className="gap-2.5 border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-950 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono tracking-wide">SENTRA SIRKULAR GUNUNG : PILAH, SETOR & OLAH SAMPAH TNGC</span>
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Recycle className="h-4 w-4 text-primary animate-pulse" aria-hidden="true" />
                <span>Pusat Pemanfaatan Sampah Gunung 3.078 mdpl</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
                Ubah Sampah Pendakian Menjadi Nilai Nyata Bagi Lereng Ciremai
              </h1>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Platform sirkular terpadu pemanfaatan sampah anorganik dan organik di Taman Nasional Gunung Ciremai. Dari botol plastik menjadi paving block ramah lingkungan, kaleng gas menjadi tungku ultralight, dan sisa makanan menjadi kompos persemaian bibit Saninten.
            </p>

            {/* Direct Specific CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/lapor"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-13 px-7 text-sm font-bold shadow-sm inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <PackageCheck className="h-5 w-5" aria-hidden="true" />
                <span>Setor Sampah & Tukar Bibit</span>
              </Link>
              <Link
                href="/pantau"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-13 px-7 text-sm font-bold inline-flex items-center justify-center gap-2.5 rounded-xl border-primary/30 hover:bg-primary/5"
                )}
              >
                <Calculator className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Hitung Nilai & Dampak Sampah</span>
              </Link>
            </div>

            {/* Geo-Location Footprint */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>Kuningan : Pos Palutungan & Linggarjati</span>
              </span>
              <span className="text-border">|</span>
              <span>Majalengka : Pos Apuy & Sadarehe</span>
              <span className="text-border">|</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">4 Drop-Point Aktif</span>
            </div>
          </div>

          {/* Factual Information & Visual Silhouette Card */}
          <div className="lg:col-span-5">
            <Card className="shadow-lg border-border/80 bg-card/95 backdrop-blur-sm overflow-hidden rounded-2xl ring-1 ring-border">
              {/* Header */}
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-border space-y-0 bg-muted/30">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
                      Metrik Daur Ulang TNGC
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">Akumulasi Sirkular Komunitas</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5">
                  Realisasi 2026
                </Badge>
              </CardHeader>

              <CardContent className="p-6 sm:p-7 space-y-6">
                {/* Visual Elevation Profile Silhouette */}
                <div className="rounded-xl border border-border/60 bg-muted/40 p-4 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-muted-foreground uppercase">
                    <span>Zona Sirkular Sampah Terpadu</span>
                    <span className="text-primary font-bold">Puncak 3.078 mdpl</span>
                  </div>

                  {/* SVG Elevation Vector */}
                  <svg
                    viewBox="0 0 360 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-18 text-primary"
                    aria-label="Siluet Kontur Elevasi Jalur Daur Ulang Ciremai"
                    role="img"
                  >
                    <defs>
                      <linearGradient id="ciremaiGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    <line x1="10" y1="72" x2="350" y2="72" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
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
                    <circle cx="180" cy="12" r="3.5" fill="currentColor" />
                    <circle cx="180" cy="12" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <text x="180" y="8" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      3.078 M
                    </text>
                  </svg>

                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground px-1">
                    <span>Drop-Point Palutungan</span>
                    <span>TITO Audit Puncak</span>
                    <span>Drop-Point Apuy</span>
                  </div>
                </div>

                {/* 4 Factual Metrics */}
                <div className="grid grid-cols-2 gap-3.5 text-left">
                  <div className="rounded-xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Sampah Terolah
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                      14.2
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Ton Sampah TITO</span>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Eco-Paving Block
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                      3.800+
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Buah Diproduksi</span>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Kaleng Gas Diolah
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                      1.920
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Unit Tungku & Asbak</span>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Sentra Olah Desa
                    </span>
                    <span className="text-sm font-bold text-foreground block mt-1 leading-snug">
                      4 Bank Sampah
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Kuningan & Majalengka</span>
                  </div>
                </div>

                {/* Callout Notice */}
                <Alert className="border-emerald-300/50 bg-emerald-500/10 text-emerald-950 dark:border-emerald-900/50 dark:text-emerald-200 rounded-xl p-4">
                  <AlertCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <AlertDescription className="text-xs leading-relaxed font-medium text-emerald-950 dark:text-emerald-200 ml-2">
                    Seluruh sampah terpilah yang disetorkan ke drop point posko dapat ditukar langsung dengan bibit pohon Saninten dan poin bank sampah komunitas.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 sm:mt-20 flex items-center justify-center">
          <a
            href="#jalur-status"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-2.5 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
            )}
          >
            <span>Periksa Kapasitas Drop-Point 4 Pos Registrasi</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-primary" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
