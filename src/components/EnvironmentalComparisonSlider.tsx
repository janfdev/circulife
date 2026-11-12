"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SlidersHorizontal, ArrowLeftRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function EnvironmentalComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = Math.round((clampedX / rect.width) * 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section
      id="restorasi-sebelum-sesudah"
      className="py-16 sm:py-24 border-t border-border/80 bg-background relative overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge
              variant="outline"
              className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30"
            >
              Komparasi Interaktif Dampak
            </Badge>
            <h2
              id="comparison-heading"
              className="text-2xl sm:text-4xl font-black text-foreground tracking-tight leading-tight"
            >
              Transformasi Nyata: Dari Timbunan Liar Menjadi Jalur Sirkular
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Geser tuas interaktif di bawah untuk melihat perbedaan langsung antara kawasan yang belum tertata dengan jalur konservasi yang telah menerapkan sistem sirkularitas CircuLife.
            </p>
          </div>

          {/* Quick preset buttons */}
          <div className="flex items-center gap-2 font-mono text-xs shrink-0">
            <button
              type="button"
              onClick={() => setSliderPosition(0)}
              className={cn(
                "px-3 py-1.5 rounded-lg border transition-all cursor-pointer",
                sliderPosition <= 10
                  ? "bg-amber-600/10 border-amber-500/40 text-amber-800 dark:text-amber-300 font-bold"
                  : "border-border/70 hover:bg-muted text-muted-foreground"
              )}
            >
              Kondisi Awal (0%)
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              className={cn(
                "px-3 py-1.5 rounded-lg border transition-all cursor-pointer",
                sliderPosition > 35 && sliderPosition < 65
                  ? "bg-primary/10 border-primary/40 text-primary font-bold"
                  : "border-border/70 hover:bg-muted text-muted-foreground"
              )}
            >
              50 : 50
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(100)}
              className={cn(
                "px-3 py-1.5 rounded-lg border transition-all cursor-pointer",
                sliderPosition >= 90
                  ? "bg-emerald-600/10 border-emerald-500/40 text-emerald-800 dark:text-emerald-300 font-bold"
                  : "border-border/70 hover:bg-muted text-muted-foreground"
              )}
            >
              Hasil Sirkular (100%)
            </button>
          </div>
        </div>

        {/* Visual Comparison Split Box */}
        <Card className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-sm">
          <div
            ref={containerRef}
            className="relative select-none h-[420px] sm:h-[500px] lg:h-[560px] w-full overflow-hidden cursor-ew-resize bg-muted"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            role="region"
            aria-label="Pembanding visual interaktif sebelum dan sesudah restorasi"
          >
            {/* 1. AFTER (Restorasi CircuLife) - Full Base Layer */}
            <div className="absolute inset-0 text-white flex flex-col justify-between">
              {/* Authentic Photo: Restored Mountain & Eco Trail */}
              <div className="absolute inset-0">
                <Image
                  src="/images/gallery/trail-after-restored.jpg"
                  alt="Jalur konservasi bersih dan asri hasil restorasi sirkular CircuLife"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-black/25 to-black/30 pointer-events-none" />
              </div>

              {/* After Header Tag (Right Aligned) */}
              <div className="flex justify-end relative z-10 p-6 sm:p-8">
                <div className="rounded-xl border border-emerald-400/40 bg-emerald-950/85 backdrop-blur-md px-4 py-2 space-y-1 text-right max-w-xs shadow-xl">
                  <div className="flex items-center justify-end gap-1.5 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>SESUDAH : INTERVENSI CIRCULIFE</span>
                  </div>
                  <p className="text-[11px] text-emerald-100/90 leading-tight">
                    Jalur tertata dengan Eco-Paving Block K-250, drop-box limbah terpilah, dan reboisasi pohon endemik.
                  </p>
                </div>
              </div>

              {/* After Impact Telemetry Card (Bottom Right) */}
              <div className="flex justify-end relative z-10 p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-emerald-400/30 text-center font-mono max-w-md w-full shadow-2xl">
                  <div>
                    <span className="block text-base sm:text-xl font-black text-emerald-300 tabular-nums">-94%</span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-100/80 uppercase font-semibold">Timbunan Sampah</span>
                  </div>
                  <div className="border-x border-emerald-400/20">
                    <span className="block text-base sm:text-xl font-black text-white tabular-nums">850 m²</span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-100/80 uppercase font-semibold">Eco-Paving K-250</span>
                  </div>
                  <div>
                    <span className="block text-base sm:text-xl font-black text-emerald-300 tabular-nums">+1.200</span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-100/80 uppercase font-semibold">Pohon Tertanam</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. BEFORE (Kondisi Awal) - Clipped Top Layer */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden text-stone-200 flex flex-col justify-between"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Width lock wrapper so contents don't squish */}
              <div
                className="absolute inset-y-0 left-0 flex flex-col justify-between"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}
              >
                {/* Authentic Photo: Degraded Trail Littered with Waste */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/gallery/trail-before-litter.jpg"
                    alt="Kondisi awal jalur tercemar sampah plastik dan botol berserakan"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-black/35 to-black/40 pointer-events-none" />
                </div>

                {/* Before Header Tag (Left Aligned) */}
                <div className="flex justify-start relative z-10 p-6 sm:p-8">
                  <div className="rounded-xl border border-amber-500/40 bg-stone-950/85 backdrop-blur-md px-4 py-2 space-y-1 text-left max-w-xs shadow-xl">
                    <div className="flex items-center gap-1.5 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                      <span>SEBELUM : TIMBUNAN SAMPAH LIAR</span>
                    </div>
                    <p className="text-[11px] text-stone-300 leading-tight">
                      Timbunan botol plastik sekali pakai, kaleng gas sisa tercecer, dan ancaman degradasi ekosistem lereng.
                    </p>
                  </div>
                </div>

                {/* Before Problem Stats (Bottom Left) */}
                <div className="flex justify-start relative z-10 p-6 sm:p-8">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-black/65 backdrop-blur-md border border-amber-500/30 text-center font-mono max-w-md w-full shadow-2xl">
                    <div>
                      <span className="block text-base sm:text-xl font-black text-amber-400 tabular-nums">1.450 kg</span>
                      <span className="text-[9px] sm:text-[10px] text-stone-300 uppercase font-semibold">Sampah / Bln</span>
                    </div>
                    <div className="border-x border-amber-500/20">
                      <span className="block text-base sm:text-xl font-black text-red-400 tabular-nums">TINGGI</span>
                      <span className="text-[9px] sm:text-[10px] text-stone-300 uppercase font-semibold">Resiko Bahaya Gas</span>
                    </div>
                    <div>
                      <span className="block text-base sm:text-xl font-black text-amber-300 tabular-nums">0%</span>
                      <span className="text-[9px] sm:text-[10px] text-stone-300 uppercase font-semibold">Daur Ulang</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. The Draggable Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Handle Badge */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white text-stone-900 shadow-2xl flex items-center justify-center border-2 border-primary ring-4 ring-black/30 pointer-events-auto cursor-ew-resize">
                <ArrowLeftRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Accessible Keyboard Controls & Description Bar */}
          <div className="p-4 sm:p-6 bg-muted/40 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              <span>Gunakan slider untuk mengatur proporsi tampilan ({sliderPosition}% hasil sirkular).</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-72">
              <span className="text-[10px] text-muted-foreground uppercase font-bold">Awal</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Posisi slider pembanding restorasi"
              />
              <span className="text-[10px] text-primary uppercase font-bold">Sirkular</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
