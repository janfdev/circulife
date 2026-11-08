"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Recycle,
  Layers,
  Flame,
  Sprout,
  Droplets,
  Coins,
  ShieldCheck,
  PackageCheck,
  ArrowRight,
  TrendingUp,
  Sparkles,
  TreePine,
  Factory,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MaterialType = "PLASTIC_PET" | "METAL_CANISTER" | "ORGANIC_FOOD" | "USED_OIL";

interface MaterialMeta {
  id: MaterialType;
  label: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultKg: number;
  maxKg: number;
  colorCls: string;
  badgeCls: string;
  targetProduct: string;
  unitOutput: string;
  calculateOutput: (kg: number) => {
    productVal: string;
    productName: string;
    co2eAvoidedKg: string;
    points: number;
    equivalentDescription: string;
  };
}

const MATERIALS: MaterialMeta[] = [
  {
    id: "PLASTIC_PET",
    label: "Botol Plastik PET & Sachet",
    shortName: "Plastik PET",
    icon: Layers,
    defaultKg: 25,
    maxKg: 200,
    colorCls: "text-emerald-500",
    badgeCls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
    targetProduct: "Eco-Paving Block K-250",
    unitOutput: "Buah Paving",
    calculateOutput: (kg) => {
      const pavingCount = Math.max(1, Math.round(kg * 0.8));
      const co2e = (kg * 1.75).toFixed(1);
      const points = kg * 10;
      const treesEquivalent = Math.max(1, Math.round(Number(co2e) / 22));
      return {
        productVal: `${pavingCount} Buah`,
        productName: "Eco-Paving Block K-250",
        co2eAvoidedKg: co2e,
        points,
        equivalentDescription: `Setara daya serap fotosintesis ${treesEquivalent} bibit pohon dewasa per tahun.`,
      };
    },
  },
  {
    id: "METAL_CANISTER",
    label: "Kaleng Logam & Tabung Gas",
    shortName: "Kaleng Logam",
    icon: Flame,
    defaultKg: 10,
    maxKg: 100,
    colorCls: "text-amber-500",
    badgeCls: "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
    targetProduct: "Tungku Biomassa & Asbak Saku",
    unitOutput: "Unit Alat",
    calculateOutput: (kg) => {
      const stoveCount = Math.max(1, Math.round(kg / 0.6));
      const co2e = (kg * 2.8).toFixed(1);
      const points = kg * 25;
      const canistersSafe = Math.max(1, Math.round(kg / 0.25));
      return {
        productVal: `${stoveCount} Unit`,
        productName: "Tungku Biomassa Ultralight",
        co2eAvoidedKg: co2e,
        points,
        equivalentDescription: `Mencegah potensi peledakan ${canistersSafe} kaleng gas sisa bertekanan di TPA.`,
      };
    },
  },
  {
    id: "ORGANIC_FOOD",
    label: "Sisa Makanan Dapur & Buah Sayur",
    shortName: "Limbah Organik",
    icon: Sprout,
    defaultKg: 40,
    maxKg: 300,
    colorCls: "text-lime-600",
    badgeCls: "border-lime-500/30 bg-lime-500/10 text-lime-800 dark:text-lime-300",
    targetProduct: "Pupuk Kompos Kasgot BSF",
    unitOutput: "Kg Pupuk",
    calculateOutput: (kg) => {
      const kasgotKg = (kg * 0.35).toFixed(1);
      const co2e = (kg * 0.95).toFixed(1);
      const points = kg * 5;
      const seedlingSubsidized = Math.max(1, Math.round(points / 50));
      return {
        productVal: `${kasgotKg} kg`,
        productName: "Pupuk Kasgot Kaya NPK",
        co2eAvoidedKg: co2e,
        points,
        equivalentDescription: `Menghidupi ${seedlingSubsidized} bibit tanaman revegetasi dengan nutrisi organik.`,
      };
    },
  },
  {
    id: "USED_OIL",
    label: "Minyak Jelantah Dapur (UCO)",
    shortName: "Minyak Jelantah",
    icon: Droplets,
    defaultKg: 15,
    maxKg: 150,
    colorCls: "text-teal-500",
    badgeCls: "border-teal-500/30 bg-teal-500/10 text-teal-800 dark:text-teal-300",
    targetProduct: "Biodiesel Nabati Sirkular",
    unitOutput: "Liter Biodiesel",
    calculateOutput: (kg) => {
      const biodieselLiters = (kg * 0.88).toFixed(1);
      const co2e = (kg * 2.5).toFixed(1);
      const points = kg * 15;
      const cleanWaterSavedLiters = (kg * 1000).toLocaleString("id-ID");
      return {
        productVal: `${biodieselLiters} Liter`,
        productName: "Biodiesel Kompresi Ramah Emisi",
        co2eAvoidedKg: co2e,
        points,
        equivalentDescription: `Melindungi ${cleanWaterSavedLiters} liter air tanah dan saluran dari cemaran lemak jenuh.`,
      };
    },
  },
];

export default function WasteImpactSimulator() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType>("PLASTIC_PET");
  const [wasteAmountKg, setWasteAmountKg] = useState<number>(25);

  const currentMeta = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];
  const output = currentMeta.calculateOutput(wasteAmountKg);

  const handleMaterialChange = (newMat: MaterialType) => {
    setSelectedMaterial(newMat);
    const meta = MATERIALS.find((m) => m.id === newMat);
    if (meta) {
      setWasteAmountKg(meta.defaultKg);
    }
  };

  const presetValues = [10, 25, 50, 100];

  return (
    <section
      id="simulator-dampak"
      className="py-16 sm:py-24 border-t border-border/80 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
      aria-labelledby="simulator-heading"
    >
      {/* Background radial soft aura */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge
            variant="outline"
            className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30"
          >
            Instrumen Telemetri Sirkularitas
          </Badge>

          <h2
            id="simulator-heading"
            className="text-2xl sm:text-4xl font-black text-foreground tracking-tight leading-tight"
          >
            Simulasi Dampak & Konversi Nilai Sampah Anda
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Pilih jenis material sampah yang Anda kumpulkan dari rumah atau komunitas, geser volume timbangan, dan saksikan proyeksi produk bernilai guna serta ekuivalen reduksi emisi karbon yang dihasilkan.
          </p>
        </div>

        {/* Interactive Console Card */}
        <Card className="rounded-3xl border border-border/80 bg-card/95 shadow-xl overflow-hidden ring-1 ring-border/80 glow-card">
          {/* Top Material Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border/70 bg-muted/40 p-2 gap-2">
            {MATERIALS.map((mat) => {
              const Icon = mat.icon;
              const isSelected = mat.id === selectedMaterial;
              return (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => handleMaterialChange(mat.id)}
                  className={cn(
                    "flex items-center gap-2.5 p-3 rounded-2xl text-left transition-all cursor-pointer",
                    isSelected
                      ? "bg-card shadow-sm border border-border text-foreground font-bold ring-1 ring-primary/30"
                      : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold truncate">{mat.shortName}</span>
                    <span className="text-[10px] text-muted-foreground font-mono truncate block">
                      {mat.targetProduct}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Control Column: Sliders & Preset */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Material Terpilih:
                  </span>
                  <Badge variant="outline" className={cn("text-xs font-mono font-bold px-2.5 py-0.5", currentMeta.badgeCls)}>
                    {currentMeta.label}
                  </Badge>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground">
                  Berapa berat sampah yang ingin disetorkan?
                </h3>
              </div>

              {/* Big Number Weight Display & Range Slider */}
              <div className="p-6 rounded-2xl border border-border/80 bg-muted/30 space-y-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-muted-foreground uppercase font-bold">
                    Estimasi Timbangan
                  </span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-4xl sm:text-5xl font-black text-foreground tabular-nums">
                      {wasteAmountKg}
                    </span>
                    <span className="text-base text-muted-foreground font-bold">kg</span>
                  </div>
                </div>

                {/* Range Input Slider */}
                <div className="space-y-2">
                  <input
                    type="range"
                    min="5"
                    max={currentMeta.maxKg}
                    step="5"
                    value={wasteAmountKg}
                    onChange={(e) => setWasteAmountKg(Number(e.target.value))}
                    className="w-full h-2.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={`Jumlah setoran ${currentMeta.label} dalam kilogram`}
                  />
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>5 kg</span>
                    <span>Maksimal {currentMeta.maxKg} kg</span>
                  </div>
                </div>

                {/* Preset Fast Selection Pills */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold">
                    Preset:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {presetValues.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setWasteAmountKg(val)}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs font-mono cursor-pointer transition-colors border",
                          wasteAmountKg === val
                            ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                            : "border-border/80 hover:bg-muted text-muted-foreground"
                        )}
                      >
                        {val} kg
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Kalkulasi diverifikasi berdasarkan standar emisi EPA WARM & uji laboratorium K-250.</span>
              </div>
            </div>

            {/* Right Output Column: Live Telemetry Cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Primary Product Output Card */}
                <div className="p-5 sm:p-6 rounded-2xl border border-primary/40 bg-primary/10 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-primary">
                    <span className="uppercase tracking-wider">Hasil Produk Sirkular</span>
                    <Factory className="h-4 w-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-foreground font-mono tabular-nums">
                    {output.productVal}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    {output.productName}
                  </p>
                </div>

                {/* 2. Carbon Avoided Metric Card */}
                <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="uppercase tracking-wider">Reduksi Karbon CO₂e</span>
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-foreground font-mono tabular-nums">
                    {output.co2eAvoidedKg}{" "}
                    <span className="text-sm font-normal text-muted-foreground">kg CO₂e</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Emisi gas rumah kaca dicegah dari TPA.
                  </p>
                </div>

                {/* 3. Reward Points Earned */}
                <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    <span className="uppercase tracking-wider">Poin Insentif Warga</span>
                    <Coins className="h-4 w-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-foreground font-mono tabular-nums">
                    +{output.points.toLocaleString("id-ID")}{" "}
                    <span className="text-sm font-normal text-muted-foreground">Poin</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Dapat ditukar bibit pohon atau produk daur ulang.
                  </p>
                </div>

                {/* 4. Ecological Equivalency Note */}
                <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                    <span className="uppercase tracking-wider">Ekuivalen Ekologis</span>
                    <TreePine className="h-4 w-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                    {output.equivalentDescription}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/lapor"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "h-12 px-6 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 shadow-md bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                  )}
                >
                  <PackageCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Jadwalkan Setor di Drop-Point</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>

                <Link
                  href="/galeri"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 px-6 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 border-border/80 text-foreground hover:bg-muted"
                  )}
                >
                  <span>Katalog Produk</span>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
