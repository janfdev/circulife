"use client";

import React, { useState } from "react";
import { calculateFireRisk } from "@/lib/reportUtils";
import { Wind, Thermometer, Droplets, Sun, AlertTriangle, Gauge } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
    <Card className="p-6 sm:p-8 shadow-sm">
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
          <Card className="border-border bg-muted/40 p-6 flex flex-col justify-between space-y-6 shadow-none">
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
  );
}
