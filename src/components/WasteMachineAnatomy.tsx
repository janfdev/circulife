"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Layers, RefreshCw, Gauge, Zap, Flame, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface WasteMachineAnatomyProps {
  className?: string;
}

export function WasteMachineAnatomy({ className }: WasteMachineAnatomyProps) {
  const [pressureBar, setPressureBar] = useState<number>(185);
  const [tempCelsius, setTempCelsius] = useState<number>(215);
  const [shreddedFlakesKg, setShreddedFlakesKg] = useState<number>(35);
  const [activeCycle, setActiveCycle] = useState<"FEED" | "MELT" | "PRESS">("PRESS");

  // Calculations for K-250 Paving Block output
  const estimatedPavingUnits = Math.max(1, Math.round(shreddedFlakesKg * 0.8));
  const compressionRatio = (pressureBar / 200).toFixed(2);

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Instrument Frame Card Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
            Fig 1.0
          </span>
          <span className="text-sm font-bold text-foreground tracking-tight">
            The Circular Extruder & Hex-Paving Hydraulic Press Rig
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[11px] font-mono border-primary/30 text-primary gap-1">
            <Gauge className="h-3 w-3" />
            <span className="tabular-nums">220°C Thermal Matrix · 200 Bar Max</span>
          </Badge>
        </div>
      </div>

      {/* Main Isometric Visual Workspace */}
      <div className="relative rounded-2xl border border-border/80 bg-card p-4 sm:p-6 shadow-xs overflow-hidden">
        {/* Subtle architectural grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
          aria-hidden="true" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Isometric SVG Render */}
          <div className="lg:col-span-8 flex items-center justify-center">
            <svg
              viewBox="0 0 680 440"
              className="w-full max-w-[620px] h-auto overflow-visible select-none drop-shadow-sm"
              role="img"
              aria-label="Isometric illustration of PET plastic extruder and hydraulic compression press"
            >
              <defs>
                {/* Metallic Linear Gradients */}
                <linearGradient id="iso-base-plate" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--muted))" />
                  <stop offset="100%" stopColor="hsl(var(--card))" />
                </linearGradient>

                <linearGradient id="iso-steel-barrel" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4A5568" />
                  <stop offset="50%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>

                <linearGradient id="iso-thermal-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EA580C" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#C2410C" />
                </linearGradient>

                <linearGradient id="iso-paving-block" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1B4D3E" />
                  <stop offset="50%" stopColor="#22A06B" />
                  <stop offset="100%" stopColor="#0F382B" />
                </linearGradient>

                {/* Drop shadow filter for floating elements */}
                <filter id="iso-ground-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
                  <feOffset dx="0" dy="16" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.18" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Base Machine Chassis (Ground Plate) */}
              <g filter="url(#iso-ground-shadow)">
                {/* Machine Floor Silhouette */}
                <path
                  d="M 120 280 L 340 160 L 580 290 L 360 410 Z"
                  fill="hsl(var(--border))"
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                />
                {/* Top Machined Plate */}
                <path
                  d="M 120 270 L 340 150 L 580 280 L 360 400 Z"
                  fill="url(#iso-base-plate)"
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                />
                {/* Front Bevel */}
                <path
                  d="M 120 270 L 360 400 L 360 410 L 120 280 Z"
                  fill="hsl(var(--muted))"
                />
                {/* Right Bevel */}
                <path
                  d="M 360 400 L 580 280 L 580 290 L 360 410 Z"
                  fill="hsl(var(--muted))"
                  opacity="0.8"
                />
              </g>

              {/* Perimeter Ruler Calibration Ticks */}
              <g stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1">
                <line x1="160" y1="292" x2="166" y2="288" />
                <line x1="200" y1="315" x2="206" y2="311" />
                <line x1="240" y1="337" x2="246" y2="333" />
                <line x1="280" y1="359" x2="286" y2="355" />
                <line x1="320" y1="381" x2="326" y2="377" />
              </g>

              {/* 2. Plastic Shredder Hopper (Input Ingestion Funnel) */}
              <g id="hopper-assembly">
                {/* Structural Support Legs */}
                <path d="M 210 240 L 210 160" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                <path d="M 270 205 L 270 125" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

                {/* Funnel Body */}
                <polygon
                  points="180,90 280,35 320,60 220,115"
                  fill="#94A3B8"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                {/* Left Chute Wall */}
                <polygon
                  points="180,90 220,115 230,170 210,165"
                  fill="#64748B"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                {/* Front Chute Wall */}
                <polygon
                  points="220,115 320,60 270,140 230,170"
                  fill="#475569"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                {/* Shredded Flakes Inflow Marker */}
                <circle cx="250" cy="85" r="4" fill="#22A06B" />
                <circle cx="265" cy="78" r="3.5" fill="#37E598" />
                <circle cx="235" cy="92" r="3" fill="#144837" />
                <circle cx="245" cy="110" r="3.5" fill="#22A06B" />
              </g>

              {/* 3. Heated Extrusion Barrel (Thermal Transformation Chamber) */}
              <g id="barrel-assembly">
                {/* Heat Jacket Outer Shell */}
                <path
                  d="M 230 170 L 380 250 L 380 275 L 230 195 Z"
                  fill="url(#iso-steel-barrel)"
                  stroke="#1E293B"
                  strokeWidth="1.5"
                />
                {/* Thermal Heating Elements & Ring Bands */}
                <path d="M 260 186 L 260 211" stroke="url(#iso-thermal-glow)" strokeWidth="4" />
                <path d="M 290 202 L 290 227" stroke="url(#iso-thermal-glow)" strokeWidth="4" />
                <path d="M 320 218 L 320 243" stroke="url(#iso-thermal-glow)" strokeWidth="4" />
                <path d="M 350 234 L 350 259" stroke="url(#iso-thermal-glow)" strokeWidth="4" />

                {/* Heat Jacket Top Face */}
                <path
                  d="M 230 170 L 250 160 L 400 240 L 380 250 Z"
                  fill="#CBD5E1"
                  stroke="#1E293B"
                  strokeWidth="1.5"
                />
              </g>

              {/* 4. Hydraulic Press Column & Compression Piston */}
              <g id="press-assembly">
                {/* Heavy Dual Vertical Guide Columns */}
                <rect x="420" y="80" width="10" height="150" fill="#64748B" stroke="#334155" rx="2" />
                <rect x="470" y="110" width="10" height="150" fill="#475569" stroke="#334155" rx="2" />

                {/* Top Cross-Head Frame */}
                <polygon
                  points="410,80 470,45 500,60 440,95"
                  fill="#1E293B"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                <polygon
                  points="410,80 440,95 440,110 410,95"
                  fill="#334155"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                <polygon
                  points="440,95 500,60 500,75 440,110"
                  fill="#0F172A"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />

                {/* Hydraulic Cylinder Chamber (Central) */}
                <rect x="440" y="85" width="22" height="55" fill="#0E4436" stroke="#16A36E" strokeWidth="1.5" rx="3" />
                <line x1="440" y1="102" x2="462" y2="102" stroke="#22A06B" strokeWidth="2" />

                {/* Ram / Plunger Platen (Moving downwards based on pressure) */}
                <polygon
                  points="405,215 465,180 515,208 455,243"
                  fill="#334155"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                <polygon
                  points="405,215 455,243 455,255 405,227"
                  fill="#1E293B"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                <polygon
                  points="455,243 515,208 515,220 455,255"
                  fill="#0F172A"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
              </g>

              {/* 5. Hexagonal Mold Bed & Finished Eco-Paving Block K-250 */}
              <g id="molding-bed">
                {/* Mold Frame Base */}
                <polygon
                  points="400,265 470,225 530,260 460,300"
                  fill="#E2E8F0"
                  stroke="#64748B"
                  strokeWidth="1.5"
                />
                {/* Extruded Mold Well */}
                <polygon
                  points="415,268 465,238 515,268 465,298"
                  fill="#0F172A"
                  stroke="#334155"
                  strokeWidth="1.5"
                />

                {/* Finished Eco-Paving Block (Dense Recycled Plastic PET) */}
                <polygon
                  points="425,262 465,240 505,262 465,285"
                  fill="url(#iso-paving-block)"
                  stroke="#37E598"
                  strokeWidth="1.5"
                />
                <polygon
                  points="425,262 465,285 465,302 425,279"
                  fill="#0E4436"
                  stroke="#37E598"
                  strokeWidth="1.2"
                />
                <polygon
                  points="465,285 505,262 505,279 465,302"
                  fill="#144837"
                  stroke="#37E598"
                  strokeWidth="1.2"
                />
              </g>

              {/* 6. Technical Dial Gauge Instrument (Live Pressure Readout) */}
              <g id="dial-gauge" transform="translate(480, 115)">
                {/* Gauge Case */}
                <circle cx="28" cy="28" r="24" fill="#0F172A" stroke="#22A06B" strokeWidth="2" />
                <circle cx="28" cy="28" r="21" fill="#F8FAFC" />
                {/* Radial Ticks */}
                <line x1="28" y1="9" x2="28" y2="13" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="13" y1="28" x2="17" y2="28" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="43" y1="28" x2="39" y2="28" stroke="#0F172A" strokeWidth="1.5" />
                {/* Dial Needle (Rotated towards ~185 bar) */}
                <line x1="28" y1="28" x2="38" y2="15" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
                <circle cx="28" cy="28" r="3" fill="#0F172A" />
                <text x="28" y="38" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0F172A" fontFamily="monospace">
                  BAR
                </text>
              </g>

              {/* Callout Indicator Labels */}
              <g className="text-[11px] font-mono font-bold" fill="currentColor">
                {/* Hopper Callout */}
                <line x1="160" y1="60" x2="200" y2="80" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="160" cy="60" r="3" fill="hsl(var(--primary))" />
                <text x="75" y="62" fill="hsl(var(--foreground))" className="text-[11px]">
                  1. Flakes Inflow
                </text>

                {/* Thermal Barrel Callout */}
                <line x1="310" y1="170" x2="310" y2="215" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="310" cy="170" r="3" fill="hsl(var(--primary))" />
                <text x="270" y="155" fill="hsl(var(--foreground))" className="text-[11px]">
                  2. 220°C Thermal Matrix
                </text>

                {/* Mold Callout */}
                <line x1="520" y1="330" x2="475" y2="295" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="520" cy="330" r="3" fill="hsl(var(--primary))" />
                <text x="525" y="334" fill="hsl(var(--foreground))" className="text-[11px]">
                  3. Paving Block K-250
                </text>
              </g>
            </svg>
          </div>

          {/* Interactive Rig Telemetry & Controls Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-border/80 bg-background/80 p-4 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                <span className="text-xs font-mono font-bold uppercase text-muted-foreground">
                  Rig Control System
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-bold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  ACTIVE RUN
                </span>
              </div>

              {/* Cycle State Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Cycle Stage</label>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/60">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCycle("FEED");
                      setPressureBar(40);
                      setTempCelsius(180);
                    }}
                    className={cn(
                      "py-1.5 text-xs font-bold rounded-lg transition-all",
                      activeCycle === "FEED" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    1. Feed
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCycle("MELT");
                      setPressureBar(110);
                      setTempCelsius(225);
                    }}
                    className={cn(
                      "py-1.5 text-xs font-bold rounded-lg transition-all",
                      activeCycle === "MELT" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    2. Melt
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCycle("PRESS");
                      setPressureBar(195);
                      setTempCelsius(215);
                    }}
                    className={cn(
                      "py-1.5 text-xs font-bold rounded-lg transition-all",
                      activeCycle === "PRESS" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    3. Press
                  </button>
                </div>
              </div>

              {/* Input Sliders */}
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-muted-foreground">Shredded PET Feed</span>
                    <span className="font-mono font-bold">{shreddedFlakesKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={shreddedFlakesKg}
                    onChange={(e) => setShreddedFlakesKg(Number(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-muted-foreground">Hydraulic Pressure</span>
                    <span className="font-mono font-bold text-primary">{pressureBar} Bar</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={220}
                    value={pressureBar}
                    onChange={(e) => setPressureBar(Number(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Physical Output Readout Box */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 space-y-2">
                <div className="text-[11px] font-mono uppercase text-muted-foreground font-bold">
                  Yield & Metric Outcome
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[10px]">Paving Blocks</span>
                    <span className="font-bold text-foreground text-sm font-mono">
                      {estimatedPavingUnits} Buah
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px]">Compress Force</span>
                    <span className="font-bold text-foreground text-sm font-mono">
                      {compressionRatio}x Std
                    </span>
                  </div>
                </div>
                <div className="pt-1.5 border-t border-border/50 text-[11px] text-muted-foreground leading-snug">
                  Kekuatan tekan memenuhi standar <strong>K-250</strong> untuk perkerasan jalur pejalan kaki & taman warga.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasteMachineAnatomy;