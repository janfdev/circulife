"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gauge, Flame, Sparkles, RefreshCw, Droplets, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

interface BioDigesterAnatomyProps {
  className?: string;
}

export function BioDigesterAnatomy({ className }: BioDigesterAnatomyProps) {
  // Feed stage: INITIAL (Pengisian Baru), PEAK (Fermentasi Aktif), MATURE (Ekstraksi Pupuk)
  const [stage, setStage] = useState<"INITIAL" | "PEAK" | "MATURE">("PEAK");
  const [agitatorRot, setAgitatorRot] = useState<number>(45);

  // Calibration metrics based on stage
  const metrics = {
    INITIAL: {
      gasVolumeM3: 0.65,
      pressureKPa: 2.4,
      slurryFertilizerKg: 18,
      temperatureC: 32,
      methanePurity: 54,
    },
    PEAK: {
      gasVolumeM3: 1.85,
      pressureKPa: 5.8,
      slurryFertilizerKg: 45,
      temperatureC: 37,
      methanePurity: 68,
    },
    MATURE: {
      gasVolumeM3: 1.2,
      pressureKPa: 4.1,
      slurryFertilizerKg: 85,
      temperatureC: 35,
      methanePurity: 62,
    },
  }[stage];

  // Manometer Needle Angle (-120deg to +120deg for 0 - 8 kPa)
  const needleAngle = -120 + (metrics.pressureKPa / 8) * 240;

  const handleAgitatorTurn = () => {
    setAgitatorRot((prev) => (prev + 90) % 360);
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Instrument Frame Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
            Fig 2.0
          </span>
          <span className="text-sm font-bold text-foreground tracking-tight">
            The Communal Anaerobic Digester &amp; Bio-Slurry Refinery
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[11px] font-mono border-primary/30 text-primary gap-1">
            <Gauge className="h-3 w-3" />
            <span className="tabular-nums">CH4 68% Max · 8.0 kPa Safety Relief</span>
          </Badge>
        </div>
      </div>

      {/* Main Isometric Technical Card */}
      <div className="relative rounded-2xl border border-border/80 bg-card p-4 sm:p-6 shadow-xs overflow-hidden">
        {/* Architectural Dot Grid */}
        <div
          className="absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:20px_20px] text-muted-foreground/10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Isometric SVG Diagram */}
          <div className="lg:col-span-8 flex items-center justify-center">
            <svg
              viewBox="0 0 680 440"
              className="w-full max-w-[620px] h-auto overflow-visible select-none drop-shadow-sm"
              role="img"
              aria-label="Isometric illustration of communal bio-digester reactor and bio-fertilizer refinery"
            >
              <defs>
                {/* Anaerobic Reactor Slurry Gradient */}
                <linearGradient id="slurry-matrix" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14532D" />
                  <stop offset="60%" stopColor="#052E16" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                <linearGradient id="biogas-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
                </linearGradient>

                <linearGradient id="steel-chamber" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#1E293B" />
                </linearGradient>
              </defs>

              {/* 1. Base Platform on Vibration Dampeners */}
              <g id="base-foundation">
                {/* Ground Dampener Foot Flanges */}
                <ellipse cx="240" cy="390" rx="20" ry="10" fill="#334155" />
                <ellipse cx="440" cy="390" rx="20" ry="10" fill="#334155" />
                <ellipse cx="340" cy="415" rx="20" ry="10" fill="#1E293B" />

                {/* Heavy Cast-Iron Foundation Base */}
                <polygon
                  points="180,360 340,280 500,360 340,430"
                  fill="#E2E8F0"
                  stroke="#64748B"
                  strokeWidth="1.5"
                />
                <polygon
                  points="180,360 340,430 340,442 180,372"
                  fill="#94A3B8"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <polygon
                  points="340,430 500,360 500,372 340,442"
                  fill="#64748B"
                  stroke="#475569"
                  strokeWidth="1.5"
                />

                {/* Base Plate Corner Screws */}
                <circle cx="210" cy="365" r="2" fill="#475569" />
                <circle cx="470" cy="365" r="2" fill="#475569" />
                <circle cx="340" cy="420" r="2" fill="#334155" />
              </g>

              {/* 2. Main Anaerobic Digester Dome & Reactor Drum */}
              <g id="reactor-drum">
                {/* Lower Tank Shell (Cylinder) */}
                <path
                  d="M260,240 L260,340 C260,370 420,370 420,340 L420,240 Z"
                  fill="url(#steel-chamber)"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                {/* Horizontal Machined Seam Rings on Reactor Wall */}
                <path
                  d="M260,285 C260,310 420,310 420,285"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="1.2"
                />
                <path
                  d="M260,325 C260,350 420,350 420,325"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="1.2"
                />

                {/* Transparent Slurry Level Indicator Sight Window */}
                <rect x="333" y="270" width="14" height="65" rx="4" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
                <rect
                  x="335"
                  y={stage === "MATURE" ? 280 : stage === "PEAK" ? 290 : 310}
                  width="10"
                  height={stage === "MATURE" ? 53 : stage === "PEAK" ? 43 : 23}
                  rx="2"
                  fill="#22C55E"
                />
                <line x1="333" y1="285" x2="347" y2="285" stroke="#F8FAFC" strokeWidth="0.8" />
                <line x1="333" y1="305" x2="347" y2="305" stroke="#F8FAFC" strokeWidth="0.8" />

                {/* Top Dome Rim Flange */}
                <ellipse cx="340" cy="240" rx="80" ry="32" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                <ellipse cx="340" cy="238" rx="76" ry="30" fill="#475569" stroke="#64748B" strokeWidth="1" />

                {/* Bolt Circle on Flange */}
                {[...Array(8)].map((_, i) => {
                  const angle = i * (Math.PI / 4);
                  const bx = 340 + 72 * Math.cos(angle);
                  const by = 238 + 26 * Math.sin(angle);
                  return (
                    <circle key={`flange-bolt-${i}`} cx={bx} cy={by} r="1.6" fill="#CBD5E1" stroke="#0F172A" strokeWidth="0.5" />
                  );
                })}

                {/* Hemispherical Upper Dome with Gas Dome */}
                <path
                  d="M268,235 C270,165 410,165 412,235 Z"
                  fill="url(#steel-chamber)"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                <ellipse cx="340" cy="180" rx="35" ry="14" fill="#0E4436" stroke="#16A36E" strokeWidth="1.2" />
              </g>

              {/* 3. Central Agitator Shaft & Crank Handle */}
              <g id="agitator-assembly">
                {/* Vertical Bearing Neck */}
                <rect x="334" y="145" width="12" height="35" fill="#334155" stroke="#0F172A" strokeWidth="1.2" rx="2" />
                {/* Knurled Shaft Coupling */}
                <line x1="334" y1="155" x2="346" y2="155" stroke="#94A3B8" strokeWidth="1" />
                <line x1="334" y1="162" x2="346" y2="162" stroke="#94A3B8" strokeWidth="1" />

                {/* Rotatable Manual Agitator Crank */}
                <g style={{ transform: `rotate(${agitatorRot}deg)`, transformOrigin: "340px 145px", transition: "transform 0.5s ease" }}>
                  <rect x="338" y="140" width="40" height="7" rx="3" fill="#0F172A" stroke="#475569" strokeWidth="1" />
                  <circle cx="372" cy="143" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
                </g>
              </g>

              {/* 4. Left Inflow Funnel (Limbah Organik Pasar & Kasgot) */}
              <g id="inflow-hopper">
                {/* Slanted Feeder Pipe */}
                <polygon
                  points="210,165 240,150 270,260 250,270"
                  fill="#475569"
                  stroke="#1E293B"
                  strokeWidth="1.5"
                />
                {/* Top Inflow Hopper Funnel */}
                <polygon
                  points="180,140 250,110 270,145 200,175"
                  fill="#0E4436"
                  stroke="#16A36E"
                  strokeWidth="1.5"
                />
                <polygon
                  points="180,140 200,175 225,160 205,128"
                  fill="#14532D"
                  stroke="#16A36E"
                  strokeWidth="1"
                />
                {/* Waste Input Organic Particles */}
                <circle cx="215" cy="145" r="3" fill="#FACC15" />
                <circle cx="230" cy="140" r="2.5" fill="#84CC16" />
                <circle cx="222" cy="155" r="2" fill="#EAB308" />
              </g>

              {/* 5. Biogas Extraction Header & U-Tube Manometer Gauge */}
              <g id="gas-extraction">
                {/* Gas Takeoff Pipe exiting top dome */}
                <path
                  d="M340,170 L340,105 L470,105 L470,140"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Pipe Flange Rings */}
                <rect x="333" y="125" width="14" height="4" fill="#0284C7" rx="1" />
                <rect x="400" y="103" width="4" height="12" fill="#0284C7" rx="1" />

                {/* Pressure Relief Safety Valve */}
                <circle cx="430" cy="105" r="7" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
                <rect x="428" y="90" width="4" height="15" fill="#0F172A" />

                {/* Technical Manometer Dial Gauge (Live Pressure Readout) */}
                <g id="manometer-dial" transform="translate(485, 125)">
                  {/* Gauge Housing */}
                  <circle cx="25" cy="25" r="25" fill="#0F172A" stroke="#0284C7" strokeWidth="2" />
                  <circle cx="25" cy="25" r="22" fill="#F8FAFC" />

                  {/* Radial Scale Ticks */}
                  {[...Array(9)].map((_, i) => {
                    const angle = (-120 + i * (240 / 8)) * (Math.PI / 180);
                    const isMajor = i % 2 === 0;
                    const r1 = 21;
                    const r2 = isMajor ? 16 : 18;
                    const x1 = 25 + r1 * Math.cos(angle);
                    const y1 = 25 + r1 * Math.sin(angle);
                    const x2 = 25 + r2 * Math.cos(angle);
                    const y2 = 25 + r2 * Math.sin(angle);
                    return (
                      <line
                        key={`mano-tick-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={i >= 7 ? "#DC2626" : "#0F172A"}
                        strokeWidth={isMajor ? "1.4" : "0.8"}
                      />
                    );
                  })}

                  {/* Calibrated Pressure Needle */}
                  <g style={{ transform: `rotate(${needleAngle}deg)`, transformOrigin: "25px 25px", transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
                    <line x1="25" y1="25" x2="25" y2="10" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
                    <line x1="25" y1="25" x2="25" y2="29" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
                  </g>

                  <circle cx="25" cy="25" r="3" fill="#0F172A" stroke="#0284C7" strokeWidth="1" />
                  <text x="25" y="36" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#0F172A" fontFamily="monospace">
                    kPa
                  </text>
                </g>
              </g>

              {/* 6. Right Bio-Slurry Outlet Drain Valve (Pupuk Cair / Kasgot) */}
              <g id="slurry-outlet">
                {/* Horizontal Discharge Pipe */}
                <rect x="420" y="325" width="65" height="14" fill="#334155" stroke="#1E293B" strokeWidth="1.2" rx="2" />
                {/* Flange Collar */}
                <rect x="445" y="321" width="5" height="22" fill="#0E4436" stroke="#16A36E" strokeWidth="1" rx="1" />

                {/* Valve Handle Wheel */}
                <circle cx="465" cy="318" r="8" fill="#14532D" stroke="#22C55E" strokeWidth="1.5" />
                <circle cx="465" cy="318" r="3" fill="#0F172A" />

                {/* Discharge Spout & Liquid Drop */}
                <polygon points="485,325 500,325 495,350 485,350" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                <circle cx="490" cy="362" r="3.5" fill="#22C55E" opacity="0.9" />
                <circle cx="490" cy="376" r="2.5" fill="#22C55E" opacity="0.6" />
              </g>

              {/* 7. Callout Indicator Annotations */}
              <g className="text-[11px] font-mono font-bold" fill="currentColor">
                {/* Inflow Callout */}
                <line x1="160" y1="120" x2="200" y2="135" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="160" cy="120" r="3" fill="hsl(var(--primary))" />
                <text x="40" y="123" fill="hsl(var(--foreground))" className="text-[11px]">
                  1. Inflow Limbah Organik
                </text>

                {/* Reactor Callout */}
                <line x1="230" y1="280" x2="265" y2="280" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="230" cy="280" r="3" fill="hsl(var(--primary))" />
                <text x="25" y="275" fill="hsl(var(--foreground))" className="text-[11px]">
                  2. Reaktor Anaerobik Fermentasi
                </text>

                {/* Gas Extraction Callout */}
                <line x1="535" y1="95" x2="475" y2="105" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="535" cy="95" r="3" fill="hsl(var(--primary))" />
                <text x="540" y="99" fill="hsl(var(--foreground))" className="text-[11px]">
                  3. Bio-Gas CH4 Extraction
                </text>

                {/* Slurry Outlet Callout */}
                <line x1="530" y1="365" x2="495" y2="340" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="530" cy="365" r="3" fill="hsl(var(--primary))" />
                <text x="535" y="370" fill="hsl(var(--foreground))" className="text-[11px]">
                  4. Keran Bio-Slurry Kasgot
                </text>
              </g>
            </svg>
          </div>

          {/* Interactive Rig Telemetry & Operational Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-border/80 bg-background/80 p-4 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                <span className="text-xs font-mono font-bold uppercase text-muted-foreground">
                  Konsol Reaktor Biogas
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  METANOGENESIS OPTIMAL
                </span>
              </div>

              {/* Feed & Fermentation Stage Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Siklus Anaerobik</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(["INITIAL", "PEAK", "MATURE"] as const).map((s) => {
                    const label = s === "INITIAL" ? "Pengisian Baru" : s === "PEAK" ? "Fermentasi Aktif" : "Panen Slurry";
                    const isSelected = stage === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setStage(s)}
                        className={cn(
                          "px-2 py-1.5 text-[11px] font-bold rounded-lg border transition-all cursor-pointer text-center",
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary shadow-xs"
                            : "bg-muted/60 text-muted-foreground border-border hover:bg-muted"
                        )}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Metric Readouts */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="rounded-xl border border-border/60 bg-muted/30 p-2.5">
                  <span className="text-[10px] text-muted-foreground block font-sans">Produksi Biogas CH4</span>
                  <span className="text-sm font-bold text-foreground tabular-nums">
                    {metrics.gasVolumeM3} m³/hari
                  </span>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/30 p-2.5">
                  <span className="text-[10px] text-muted-foreground block font-sans">Tekanan Manometer</span>
                  <span className="text-sm font-bold text-foreground tabular-nums">
                    {metrics.pressureKPa} kPa
                  </span>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/30 p-2.5">
                  <span className="text-[10px] text-muted-foreground block font-sans">Pupuk Bio-Slurry</span>
                  <span className="text-sm font-bold text-foreground tabular-nums">
                    {metrics.slurryFertilizerKg} L/siklus
                  </span>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/30 p-2.5">
                  <span className="text-[10px] text-muted-foreground block font-sans">Suhu Inti Mesofilik</span>
                  <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
                    {metrics.temperatureC}°C
                  </span>
                </div>
              </div>

              {/* Manual Agitator Interactive Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleAgitatorTurn}
                className="w-full text-xs font-bold gap-2 cursor-pointer border-dashed"
              >
                <RefreshCw className="h-3.5 w-3.5 text-primary" />
                <span>Putar Poros Agitator (Kocok Substrat)</span>
              </Button>

              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Bioreaktor ini mengolah limbah basah organik menjadi bahan bakar memasak warga serta pupuk organik cair bermutu tinggi tanpa menghasilkan bau menyengat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioDigesterAnatomy;
