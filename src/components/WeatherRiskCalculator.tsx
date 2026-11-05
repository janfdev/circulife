"use client";

import React, { useState } from "react";
import { calculateFireRisk, calculateWasteImpact } from "@/lib/reportUtils";
import { Wind, Thermometer, Droplets, Sun, AlertTriangle, Gauge, Recycle, Layers, Sprout, Flame, Coins, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function WeatherRiskCalculator() {
  // Waste Value Simulator State
  const [plasticKg, setPlasticKg] = useState<number>(15);
  const [organicKg, setOrganicKg] = useState<number>(20);
  const [canisterCount, setCanisterCount] = useState<number>(6);

  const wasteImpact = calculateWasteImpact(plasticKg, organicKg, canisterCount);

  // Weather & Fire Risk State
  const [temp, setTemp] = useState<number>(28);
  const [humidity, setHumidity] = useState<number>(50);
  const [windSpeed, setWindSpeed] = useState<number>(20);
  const [daysWithoutRain, setDaysWithoutRain] = useState<number>(7);

  const riskResult = calculateFireRisk(temp, humidity, windSpeed, daysWithoutRain);

  const applyPreset = (t: number, h: number, w: number, d: number) => {
    setTemp(t);
    setHumidity(h);
    setWindSpeed(w);
    setDaysWithoutRain(d);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "EKSTREM":
        return {
          variant: "destructive" as const,
          cls: "border-destructive/30 bg-destructive/10 text-destructive",
          bar: "bg-destructive",
        };
      case "TINGGI":
        return {
          variant: "outline" as const,
          cls: "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
          bar: "bg-amber-600",
        };
      case "SEDANG":
        return {
          variant: "secondary" as const,
          cls: "border-yellow-500/30 bg-yellow-500/10 text-yellow-800 dark:text-yellow-300",
          bar: "bg-yellow-500",
        };
      default:
        return {
          variant: "outline" as const,
          cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
          bar: "bg-emerald-600",
        };
    }
  };

  const colors = getRiskColor(riskResult.level);

  return (
    <div className="space-y-10">
      {/* SECTION 1: Waste-to-Value & Circular Resource Calculator */}
      <Card className="p-6 sm:p-8 shadow-sm rounded-2xl border-border/80 bg-card">
        <CardHeader className="p-0 border-b border-border pb-4 mb-6 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-primary" aria-hidden="true" />
              <CardTitle className="text-xl sm:text-2xl font-black text-foreground">
                Kalkulator Nilai & Pemanfaatan Sampah Gunung
              </CardTitle>
            </div>
            <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
              Waste-to-Resource
            </Badge>
          </div>
          <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Hitung potensi produk olahan bernilai ekonomi dan reduksi karbon dari sampah yang Anda bawa turun dari Gunung Ciremai.
          </CardDescription>
        </CardHeader>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Waste Sliders */}
          <div className="lg:col-span-6 space-y-5">
            {/* Plastic PET */}
            <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 font-mono">
                  <Layers className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Botol Plastik PET & Sachet</span>
                </span>
                <span className="font-mono font-bold text-foreground tabular-nums text-sm">
                  {plasticKg} kg
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={50}
                value={plasticKg}
                onChange={(e) => setPlasticKg(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground tabular-nums font-mono">
                <span>0 kg</span>
                <span>Setara ~{Math.round(plasticKg * 20)} botol air mineral</span>
                <span>50 kg</span>
              </div>
            </div>

            {/* Organic Waste */}
            <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 font-mono">
                  <Sprout className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Sampah Organik Sisa Logistik</span>
                </span>
                <span className="font-mono font-bold text-foreground tabular-nums text-sm">
                  {organicKg} kg
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={50}
                value={organicKg}
                onChange={(e) => setOrganicKg(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground tabular-nums font-mono">
                <span>0 kg</span>
                <span>Sisa makanan & serasah camp</span>
                <span>50 kg</span>
              </div>
            </div>

            {/* Gas Canisters */}
            <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 font-mono">
                  <Flame className="h-4 w-4 text-amber-500" aria-hidden="true" />
                  <span>Kaleng Gas Portabel Bekas</span>
                </span>
                <span className="font-mono font-bold text-foreground tabular-nums text-sm">
                  {canisterCount} kaleng
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={30}
                value={canisterCount}
                onChange={(e) => setCanisterCount(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground tabular-nums font-mono">
                <span>0 kaleng</span>
                <span>Kaleng kompor lapangan kosong</span>
                <span>30 kaleng</span>
              </div>
            </div>
          </div>

          {/* Waste Output Matrix */}
          <div className="lg:col-span-6">
            <Card className="border-border bg-muted/40 p-6 rounded-xl space-y-5 shadow-none">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                  Estimasi Produk & Manfaat Sirkular
                </span>
                <Badge variant="secondary" className="text-xs font-mono font-bold uppercase px-2.5 py-0.5">
                  Output Realistis
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <span className="text-[10px] font-mono font-semibold text-muted-foreground uppercase block">
                    Eco-Paving Block
                  </span>
                  <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                    {wasteImpact.pavingBlocks} Buah
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5 block">
                    Material jalan setapak K-250
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <span className="text-[10px] font-mono font-semibold text-muted-foreground uppercase block">
                    Pupuk Kompos Matang
                  </span>
                  <span className="text-2xl font-black text-primary tabular-nums font-mono mt-1 block">
                    {wasteImpact.compostKg} kg
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5 block">
                    Nutrisi bibit pohon Saninten
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <span className="text-[10px] font-mono font-semibold text-muted-foreground uppercase block">
                    Tungku / Asbak Upcycled
                  </span>
                  <span className="text-2xl font-black text-foreground tabular-nums font-mono mt-1 block">
                    {wasteImpact.canistersUpcycled} Unit
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5 block">
                    Dari kaleng gas terdekontaminasi
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <span className="text-[10px] font-mono font-semibold text-muted-foreground uppercase block">
                    Reduksi Emisi Karbon
                  </span>
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums font-mono mt-1 block">
                    {wasteImpact.co2SavedKg} kg
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5 block">
                    CO2e tercegah ke atmosfer
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground block">
                    Nilai Ekonomi Bank Sampah Desa
                  </span>
                  <span className="text-xl font-black text-foreground tabular-nums font-mono">
                    Rp {wasteImpact.economicValueRp.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground block">
                    Poin Tukar Bibit
                  </span>
                  <span className="text-xl font-black text-primary tabular-nums font-mono">
                    {wasteImpact.seedlingPoints} Poin
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>

      {/* SECTION 2: Environmental Parameters & Weather Risk Simulator */}
      <Card className="p-6 sm:p-8 shadow-sm rounded-2xl border-border/80 bg-card">
        <CardHeader className="p-0 border-b border-border pb-4 mb-6 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-primary" aria-hidden="true" />
              <CardTitle className="text-xl font-bold text-foreground">
                Simulator Indeks Kerawanan Karhutla Lereng
              </CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs font-semibold uppercase">
              Model Estimasi
            </Badge>
          </div>
          <CardDescription className="text-xs text-muted-foreground">
            Kalkulasi dinamis indeks kemudahan kebakaran berdasarkan kelembapan serasah dan angin lereng Ciremai.
          </CardDescription>
        </CardHeader>

        {/* Preset Quick Selectors */}
        <div className="mb-6 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Skenario Cuaca :
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => applyPreset(18, 85, 8, 0)}
            className="h-8 text-xs font-semibold"
          >
            Kondisi Basah Pagi
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => applyPreset(28, 50, 18, 7)}
            className="h-8 text-xs font-semibold"
          >
            Kemarau Normal
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={() => applyPreset(36, 22, 38, 21)}
            className="h-8 text-xs font-semibold"
          >
            Kemarau Ekstrem Puncak
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Input Controls */}
          <div className="lg:col-span-7 space-y-5">
            {/* Temperature */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <label htmlFor="temp-input" className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <Thermometer className="h-4 w-4 text-destructive" aria-hidden="true" />
                  <span>Suhu Udara Lereng</span>
                </label>
                <span className="font-mono font-bold text-foreground tabular-nums text-sm">
                  {temp}°C
                </span>
              </div>
              <input
                id="temp-input"
                type="range"
                min={15}
                max={40}
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1 tabular-nums">
                <span>15°C (Sejuk)</span>
                <span>40°C (Sangat Panas)</span>
              </div>
            </div>

            {/* Humidity */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <label htmlFor="humidity-input" className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <Droplets className="h-4 w-4 text-blue-500" aria-hidden="true" />
                  <span>Kelembaban Relatif (RH)</span>
                </label>
                <span className="font-mono font-bold text-foreground tabular-nums text-sm">
                  {humidity}%
                </span>
              </div>
              <input
                id="humidity-input"
                type="range"
                min={10}
                max={100}
                value={humidity}
                onChange={(e) => setHumidity(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1 tabular-nums">
                <span>10% (Kering Ekstrem)</span>
                <span>100% (Sangat Lembab)</span>
              </div>
            </div>

            {/* Wind Speed */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <label htmlFor="wind-input" className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <Wind className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  <span>Kecepatan Angin Punggung</span>
                </label>
                <span className="font-mono font-bold text-foreground tabular-nums text-sm">
                  {windSpeed} km/jam
                </span>
              </div>
              <input
                id="wind-input"
                type="range"
                min={0}
                max={60}
                value={windSpeed}
                onChange={(e) => setWindSpeed(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1 tabular-nums">
                <span>0 km/jam (Tenang)</span>
                <span>60 km/jam (Badai Kencang)</span>
              </div>
            </div>

            {/* Days Without Rain */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <label htmlFor="days-input" className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <Sun className="h-4 w-4 text-amber-500" aria-hidden="true" />
                  <span>Hari Tanpa Hujan (Kemarau)</span>
                </label>
                <span className="font-mono font-bold text-foreground tabular-nums text-sm">
                  {daysWithoutRain} hari
                </span>
              </div>
              <input
                id="days-input"
                type="range"
                min={0}
                max={30}
                value={daysWithoutRain}
                onChange={(e) => setDaysWithoutRain(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1 tabular-nums">
                <span>0 hari (Baru Saja Hujan)</span>
                <span>30 hari (Kering Total)</span>
              </div>
            </div>
          </div>

          {/* Calculated Result Display Card */}
          <div className="lg:col-span-5">
            <Card className="border-border bg-muted/40 p-6 flex flex-col justify-between space-y-6 shadow-none rounded-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Skor Kerawanan
                  </span>
                  <Badge variant={colors.variant} className={`text-xs font-black uppercase px-2.5 py-1 ${colors.cls}`}>
                    Tingkat Kerawanan: {riskResult.level}
                  </Badge>
                </div>

                {/* Large Score Metric */}
                <div className="text-center py-4 border-y border-border/60 my-2">
                  <span className="text-5xl sm:text-6xl font-black text-foreground tabular-nums tracking-tight">
                    {riskResult.score}
                  </span>
                  <span className="text-sm font-bold text-muted-foreground block mt-1">
                    Skala Indeks 0 - 100
                  </span>
                </div>

                {/* Progress visual bar */}
                <div className="mt-4 space-y-1">
                  <Progress value={riskResult.score} className="h-3" />
                </div>
              </div>

              {/* Recommendations */}
              <Alert className="border-border bg-card text-xs leading-relaxed">
                <AlertTriangle className="h-3.5 w-3.5 text-primary" />
                <AlertDescription className="text-muted-foreground text-xs leading-relaxed">
                  <strong className="font-bold text-foreground block mb-0.5">Rekomendasi Lapangan :</strong>
                  {riskResult.recommendation}
                </AlertDescription>
              </Alert>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
