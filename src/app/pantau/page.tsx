import React from "react";
import WeatherRiskCalculator from "@/components/WeatherRiskCalculator";
import HotlineDirectory from "@/components/HotlineDirectory";
import { Activity, Flame } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PantauPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Pusat Pemantauan Resiko Karhutla Real-Time</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Pantau Cuaca Lereng & Hotline Darurat
          </h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
            Gunakan simulator cuaca untuk memprediksi indeks kerawanan kebakaran hutan di punggung Ciremai, serta simpan nomor kontak darurat posko balai terdekat sebelum mendaki.
          </p>
        </div>

        {/* 1. Simulator Indeks Kerawanan */}
        <section aria-labelledby="weather-calculator-heading">
          <WeatherRiskCalculator />
        </section>

        {/* 2. Hotline Directory Section */}
        <section className="pt-8 border-t border-border" aria-labelledby="hotline-heading">
          <HotlineDirectory />
        </section>

        {/* Bottom Callout */}
        <Alert className="border-destructive/30 bg-destructive/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive text-destructive-foreground">
              <Flame className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">
                Melihat Kepulan Asap Mencurigakan Saat di Lereng?
              </h3>
              <AlertDescription className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                Jangan dekati sumber api. Ambil posisi aman berlawanan arah angin dan kirimkan laporan darurat seketika melalui sistem warga kami.
              </AlertDescription>
            </div>
          </div>

          <Link
            href="/lapor"
            className={cn(buttonVariants({ variant: "destructive", size: "sm" }), "h-10 px-5 text-xs font-bold shadow-sm shrink-0")}
          >
            <span>Kirim Laporan Lapangan Sekarang</span>
          </Link>
        </Alert>
      </div>
    </div>
  );
}
