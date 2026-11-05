import React from "react";
import Link from "next/link";
import { Recycle, PackageCheck, AlertCircle, ArrowDown, Calculator, MapPin, Sparkles, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { CIRCULIFE_INFO } from "@/lib/constants";
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
            <span className="font-mono tracking-wide">ECODIGITAL FOR ENVIRONMENT : ZERO WASTE & WASTE-TO-VALUE HUB</span>
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Recycle className="h-4 w-4 text-primary animate-pulse" aria-hidden="true" />
                <span>Ekosistem Sirkular Sampah Terintegrasi</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.18]">
                Transformasi Sampah Menjadi Nilai Nyata Bagi Lingkungan & Komunitas
              </h1>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              CircuLife menghubungkan pemilahan sampah hulu dari rumah, sekolah, dan warung dengan sentra produksi sirkular berbasis komunitas. Dari botol plastik menjadi eco-paving block K-250, kaleng logam menjadi tungku biomassa, dan limbah makanan menjadi kompos kasgot kaya nutrisi.
            </p>

            {/* Direct Specific CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Link
                href="/lapor"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-13 px-7 text-sm font-bold shadow-sm inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <PackageCheck className="h-5 w-5" aria-hidden="true" />
                <span>Setor Sampah & Tukar Reward</span>
              </Link>
              <a
                href="#alur-sirkular"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-13 px-7 text-sm font-bold inline-flex items-center justify-center gap-2.5 rounded-xl border-primary/30 hover:bg-primary/5 text-foreground"
                )}
              >
                <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Pelajari Alur Pemanfaatan</span>
              </a>
              <Link
                href="/pantau"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-13 px-5 text-sm font-bold inline-flex items-center justify-center gap-2 rounded-xl text-muted-foreground hover:text-foreground"
                )}
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                <span>Simulator Nilai</span>
              </Link>
            </div>

            {/* Footprint Highlights */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>24 Jaringan Drop Point Nasional</span>
              </span>
              <span className="text-border">|</span>
              <span>18 KSM Bank Sampah Mitra</span>
              <span className="text-border">|</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">Terverifikasi ISO Lingkungan</span>
            </div>
          </div>

          {/* Factual Information & Visual Silhouette Card */}
          <div className="lg:col-span-5">
            <Card className="shadow-lg border-border/80 bg-card/95 backdrop-blur-sm overflow-hidden rounded-3xl ring-1 ring-border">
              {/* Header */}
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-border space-y-0 bg-muted/30">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
                      Metrik Sirkularitas Nasional
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">Telemetri Real-Time CircuLife</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5">
                  Realisasi 2026
                </Badge>
              </CardHeader>

              <CardContent className="p-6 sm:p-7 space-y-6">
                {/* Visual Circular Loop Diagram */}
                <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-muted-foreground uppercase">
                    <span>Siklus Tertutup (Closed-Loop)</span>
                    <span className="text-primary font-bold">Zero Waste Target</span>
                  </div>

                  {/* SVG Circular Ecosystem Visual */}
                  <div className="py-2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 340 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-16 text-primary"
                      aria-label="Alur Siklus Tertutup CircuLife"
                      role="img"
                    >
                      <path
                        d="M 25 35 Q 90 10 170 35 T 315 35"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                        opacity="0.4"
                      />
                      <circle cx="35" cy="35" r="14" className="fill-primary/20 stroke-primary" strokeWidth="2" />
                      <text x="35" y="39" fill="currentColor" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">1.PILAH</text>

                      <circle cx="125" cy="25" r="14" className="fill-primary/20 stroke-primary" strokeWidth="2" />
                      <text x="125" y="29" fill="currentColor" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2.SETOR</text>

                      <circle cx="215" cy="45" r="14" className="fill-primary/20 stroke-primary" strokeWidth="2" />
                      <text x="215" y="49" fill="currentColor" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">3.OLAH</text>

                      <circle cx="305" cy="35" r="14" className="fill-primary/20 stroke-primary" strokeWidth="2" />
                      <text x="305" y="39" fill="currentColor" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">4.NILAI</text>
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground px-1 border-t border-border/40 pt-2">
                    <span>Pemilahan Hulu</span>
                    <span>Timbang Digital</span>
                    <span>Pabrikasi KSM</span>
                    <span>Produk Ramah</span>
                  </div>
                </div>

                {/* 4 Factual Metrics */}
                <div className="grid grid-cols-2 gap-3.5 text-left">
                  <div className="rounded-2xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Sampah Terkelola
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                      {CIRCULIFE_INFO.managedWasteTons}
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Ton Sampah Timbang</span>
                  </div>

                  <div className="rounded-2xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Eco-Paving Block
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                      {CIRCULIFE_INFO.pavingBlocksManufactured.toLocaleString("id-ID")}
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Buah Terdistribusi</span>
                  </div>

                  <div className="rounded-2xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Kompos Bio-Kasgot
                    </span>
                    <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                      {CIRCULIFE_INFO.compostProducedTons}
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Ton Nutrisi Organik</span>
                  </div>

                  <div className="rounded-2xl bg-muted/30 p-4 border border-border/60 transition-colors hover:border-primary/40">
                    <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Reduksi Emisi
                    </span>
                    <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums font-mono mt-1 block">
                      {CIRCULIFE_INFO.co2eReductionTons}
                    </span>
                    <span className="text-xs text-muted-foreground block font-medium mt-0.5">Ton CO2e Terhindar</span>
                  </div>
                </div>

                {/* Callout Notice */}
                <Alert className="border-emerald-300/50 bg-emerald-500/10 text-emerald-950 dark:border-emerald-900/50 dark:text-emerald-200 rounded-2xl p-4">
                  <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <AlertDescription className="text-xs leading-relaxed font-medium text-emerald-950 dark:text-emerald-200 ml-2">
                    Setiap 1 kg sampah terpilah yang Anda setorkan mencegah limbah mencemari lingkungan dan langsung dikonversi menjadi Poin Sirkular untuk tebus produk ramah lingkungan.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 sm:mt-20 flex items-center justify-center">
          <a
            href="#alur-sirkular"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-2.5 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
            )}
          >
            <span>Pelajari Alur 4 Tahap Transformasi Sampah</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-primary" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
