"use client";

import React, { useState } from "react";
import { calculateFireRisk } from "@/lib/reportUtils";
import { Wind, Thermometer, Droplets, Sun, AlertTriangle, RefreshCw, Gauge } from "lucide-react";

export default function WeatherRiskCalculator() {
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
          bg: "bg-red-600",
          text: "text-red-600 dark:text-red-400",
          badge: "bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-200",
          bar: "bg-red-600",
        };
      case "TINGGI":
        return {
          bg: "bg-amber-600",
          text: "text-amber-600 dark:text-amber-400",
          badge: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200",
          bar: "bg-amber-600",
        };
      case "SEDANG":
        return {
          bg: "bg-yellow-500",
          text: "text-yellow-600 dark:text-yellow-400",
          badge: "bg-yellow-100 text-yellow-900 border-yellow-300 dark:bg-yellow-950/60 dark:text-yellow-200",
          bar: "bg-yellow-500",
        };
      default:
        return {
          bg: "bg-emerald-600",
          text: "text-emerald-600 dark:text-emerald-400",
          badge: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200",
          bar: "bg-emerald-600",
        };
    }
  };

  const colors = getRiskColor(riskResult.level);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      <div className="border-b border-border pb-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-xl font-bold text-foreground">
              Simulator Indeks Kerawanan Karhutla Lereng
            </h2>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase">
            Model Estimasi
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Kalkulasi dinamis indeks kemudahan kebakaran berdasarkan kelembapan serasah dan angin lereng Ciremai.
        </p>
      </div>

      {/* Preset Quick Selectors */}
      <div className="mb-6 flex flex-wrap gap-2 items-center">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Skenario Cuaca :
        </span>
        <button
          type="button"
          onClick={() => applyPreset(18, 85, 8, 0)}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors"
        >
          Kondisi Basah Pagi
        </button>
        <button
          type="button"
          onClick={() => applyPreset(28, 50, 18, 7)}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors"
        >
          Kemarau Normal
        </button>
        <button
          type="button"
          onClick={() => applyPreset(36, 22, 38, 21)}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-red-300 bg-red-50 text-red-900 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200 hover:bg-red-100 transition-colors"
        >
          Kemarau Ekstrem Puncak
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Temperature */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor="temp-input" className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                <Thermometer className="h-4 w-4 text-red-500" aria-hidden="true" />
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
          <div className="rounded-xl border border-border bg-muted/30 p-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Skor Kerawanan
                </span>
                <span className={`text-xs font-black uppercase px-2.5 py-1 rounded-full border ${colors.badge}`}>
                  Tingkat Kerawanan: {riskResult.level}
                </span>
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
                <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full ${colors.bar} rounded-full transition-all duration-300`}
                    style={{ width: `${riskResult.score}%` }}
                    role="progressbar"
                    aria-valuenow={riskResult.score}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="rounded-lg bg-card p-4 border border-border text-xs leading-relaxed space-y-1">
              <span className="font-bold text-foreground block flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>Rekomendasi Lapangan :</span>
              </span>
              <p className="text-muted-foreground">
                {riskResult.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
