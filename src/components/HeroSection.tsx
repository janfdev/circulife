"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CircuLifeMark } from "@/components/CircuLifeLogo";
import {
  Recycle,
  PackageCheck,
  AlertCircle,
  ArrowDown,
  Calculator,
  MapPin,
  Sparkles,
  TrendingUp,
  Layers,
  CheckCircle2,
  Sliders,
  Activity,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { CIRCULIFE_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "simulator">("telemetry");
  const [wasteInputKg, setWasteInputKg] = useState<number>(25);

  // Calculations for live simulator
  const calculatedPaving = Math.max(1, Math.round(wasteInputKg * 0.8));
  const calculatedKasgotKg = (wasteInputKg * 0.35).toFixed(1);
  const calculatedCo2eKg = (wasteInputKg * 1.75).toFixed(1);
  const calculatedPoints = wasteInputKg * 10;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-border bg-gradient-to-b from-primary/10 via-background to-background telemetry-grid">
      {/* Background Architectural Ambient Radial Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status Hub Strip */}
        <div className="mb-8 inline-flex items-center gap-2">
          <Badge
            variant="outline"
            className="gap-2.5 border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-foreground shadow-sm backdrop-blur-md"
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
                <CircuLifeMark className="h-4 w-4" />
                <span>Ekosistem Sirkular Sampah Terintegrasi</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.18]">
                Transformasi Sampah Menjadi{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Nilai Nyata
                </span>{" "}
                Bagi Lingkungan & Komunitas
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
                  "h-13 px-7 text-sm font-bold shadow-lg shadow-primary/20 inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]"
                )}
              >
                <PackageCheck className="h-5 w-5" aria-hidden="true" />
                <span>Setor Sampah & Tukar Reward</span>
              </Link>
              <a
                href="#alur-sirkular"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-13 px-7 text-sm font-bold inline-flex items-center justify-center gap-2.5 rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-foreground transition-all"
                )}
              >
                <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Pelajari Alur Pemanfaatan</span>
              </a>
              <a
                href="#simulator-dampak"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-13 px-5 text-sm font-bold inline-flex items-center justify-center gap-2 rounded-xl text-muted-foreground hover:text-foreground"
                )}
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                <span>Simulator Nilai</span>
              </a>
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
              <span className="text-emerald-500 font-bold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Terverifikasi ISO Lingkungan</span>
              </span>
            </div>
          </div>

          {/* Precision Telemetry & Simulator Console HUD */}
          <div className="lg:col-span-5">
            <Card className="shadow-2xl border-border/80 bg-card/90 backdrop-blur-xl overflow-hidden rounded-3xl ring-1 ring-border/80 glow-card">
              {/* Header with Switcher Tabs */}
              <CardHeader className="flex flex-row items-center justify-between py-3.5 px-5 sm:px-6 border-b border-border space-y-0 bg-muted/40">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Activity className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
                      Biosphere Console
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground font-mono">Telemetri Real-Time CircuLife</p>
                  </div>
                </div>

                {/* Mode Selector Pill Buttons */}
                <div className="inline-flex rounded-lg bg-background p-1 border border-border/80 text-[11px] font-mono font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveTab("telemetry")}
                    className={cn(
                      "px-2.5 py-1 rounded-md transition-colors",
                      activeTab === "telemetry"
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Metrik Nasional
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("simulator")}
                    className={cn(
                      "px-2.5 py-1 rounded-md transition-colors flex items-center gap-1",
                      activeTab === "simulator"
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Sliders className="h-3 w-3" />
                    <span>Simulasi Cepat</span>
                  </button>
                </div>
              </CardHeader>

              <CardContent className="p-5 sm:p-6 space-y-5">
                {activeTab === "telemetry" ? (
                  <>
                    {/* Visual Circular Loop Diagram with Animated Flowing Beam */}
                    <div className="rounded-2xl border border-border/70 bg-muted/30 p-4 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-muted-foreground uppercase">
                        <span>Siklus Tertutup (Closed-Loop)</span>
                        <span className="text-primary font-bold flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                          <span>Zero Waste Target</span>
                        </span>
                      </div>

                      {/* SVG Circular Ecosystem Visual with Flowing Circuit Dash */}
                      <div className="py-2 flex items-center justify-center">
                        <svg
                          viewBox="0 0 340 70"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-16 text-primary"
                          aria-label="Alur Siklus Tertutup CircuLife"
                          role="img"
                        >
                          <defs>
                            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                            </linearGradient>
                          </defs>

                          {/* Base Track */}
                          <path
                            d="M 25 35 Q 90 10 170 35 T 315 35"
                            stroke="currentColor"
                            strokeWidth="2"
                            opacity="0.25"
                          />

                          {/* Flowing Animated Circuit Beam */}
                          <path
                            d="M 25 35 Q 90 10 170 35 T 315 35"
                            stroke="url(#flowGrad)"
                            strokeWidth="2.5"
                            className="animate-flow-dash"
                          />

                          {/* Stage Nodes */}
                          <circle cx="35" cy="35" r="14" className="fill-card stroke-primary" strokeWidth="2" />
                          <text x="35" y="39" fill="currentColor" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">1.PILAH</text>

                          <circle cx="125" cy="25" r="14" className="fill-card stroke-primary" strokeWidth="2" />
                          <text x="125" y="29" fill="currentColor" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2.SETOR</text>

                          <circle cx="215" cy="45" r="14" className="fill-card stroke-primary" strokeWidth="2" />
                          <text x="215" y="49" fill="currentColor" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">3.OLAH</text>

                          <circle cx="305" cy="35" r="14" className="fill-card stroke-primary" strokeWidth="2" />
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
                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70 transition-colors hover:border-primary/50">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Sampah Terkelola
                        </span>
                        <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                          {CIRCULIFE_INFO.managedWasteTons}
                        </span>
                        <span className="text-xs text-muted-foreground block font-medium mt-0.5">Ton Sampah Timbang</span>
                      </div>

                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70 transition-colors hover:border-primary/50">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Eco-Paving Block
                        </span>
                        <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                          {CIRCULIFE_INFO.pavingBlocksManufactured.toLocaleString("id-ID")}
                        </span>
                        <span className="text-xs text-muted-foreground block font-medium mt-0.5">Buah Terdistribusi</span>
                      </div>

                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70 transition-colors hover:border-primary/50">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Kompos Bio-Kasgot
                        </span>
                        <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                          {CIRCULIFE_INFO.compostProducedTons}
                        </span>
                        <span className="text-xs text-muted-foreground block font-medium mt-0.5">Ton Nutrisi Organik</span>
                      </div>

                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70 transition-colors hover:border-primary/50">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Reduksi Emisi
                        </span>
                        <span className="text-2xl font-black text-emerald-500 tabular-nums font-mono mt-1 block">
                          {CIRCULIFE_INFO.co2eReductionTons}
                        </span>
                        <span className="text-xs text-muted-foreground block font-medium mt-0.5">Ton CO2e Terhindar</span>
                      </div>
                    </div>

                    {/* Callout Notice */}
                    <Alert className="border-emerald-500/30 bg-emerald-500/10 text-foreground rounded-2xl p-3.5">
                      <TrendingUp className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <AlertDescription className="text-xs leading-relaxed font-medium ml-2">
                        Setiap 1 kg sampah terpilah yang Anda setorkan mencegah limbah mencemari lingkungan dan langsung dikonversi menjadi Poin Sirkular untuk tebus produk ramah lingkungan.
                      </AlertDescription>
                    </Alert>
                  </>
                ) : (
                  /* Interactive Simulator View */
                  <div className="space-y-4 animate-in fade-in-50 duration-200">
                    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-foreground">
                        <span className="text-muted-foreground">Input Sampah Terpilah:</span>
                        <span className="text-primary text-base font-black tabular-nums">{wasteInputKg} Kilogram</span>
                      </div>

                      {/* Range slider */}
                      <input
                        type="range"
                        min="5"
                        max="100"
                        step="5"
                        value={wasteInputKg}
                        onChange={(e) => setWasteInputKg(Number(e.target.value))}
                        aria-label="Input berat sampah terpilah dalam kilogram"
                        className="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
                      />

                      {/* Quick chips */}
                      <div className="flex items-center gap-2 pt-1">
                        {[10, 25, 50, 100].map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setWasteInputKg(preset)}
                            className={cn(
                              "px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-colors border",
                              wasteInputKg === preset
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card text-muted-foreground border-border hover:border-primary/50"
                            )}
                          >
                            {preset} kg
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Reactive Output Grid */}
                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Paving Block K-250
                        </span>
                        <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                          {calculatedPaving} Pcs
                        </span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">Perkerasan SNI</span>
                      </div>

                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Pupuk Kasgot
                        </span>
                        <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                          {calculatedKasgotKg} Kg
                        </span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">Biokonversi BSF</span>
                      </div>

                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Reduksi Emisi
                        </span>
                        <span className="text-2xl font-black text-emerald-500 tabular-nums font-mono mt-1 block">
                          {calculatedCo2eKg} Kg
                        </span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">CO2e Dicegah</span>
                      </div>

                      <div className="rounded-2xl bg-muted/20 p-3.5 border border-border/70">
                        <span className="block text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                          Poin Sirkular
                        </span>
                        <span className="text-2xl font-black text-primary tabular-nums font-mono mt-1 block">
                          +{calculatedPoints}
                        </span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">Siap Tebus Produk</span>
                      </div>
                    </div>

                    {/* Action in simulator */}
                    <Link
                      href="/lapor"
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "w-full h-11 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      <span>Setor {wasteInputKg} Kg Sampah & Ambil Poin</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
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
