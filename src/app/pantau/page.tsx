import React from "react";
import WeatherRiskCalculator from "@/components/WeatherRiskCalculator";
import HotlineDirectory from "@/components/HotlineDirectory";
import { Activity, ShieldCheck, Flame } from "lucide-react";
import Link from "next/link";

export default function PantauPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 text-forest-800 dark:bg-forest-900/60 dark:text-forest-200 mb-2">
            <Activity className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Pusat Pemantauan Resiko Karhutla Real-Time</span>
          </div>
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
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-6 dark:border-red-900/60 dark:bg-red-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
              <Flame className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-950 dark:text-red-100">
                Melihat Kepulan Asap Mencurigakan Saat di Lereng?
              </h3>
              <p className="text-xs text-red-800 dark:text-red-300 mt-0.5 leading-relaxed">
                Jangan dekati sumber api. Ambil posisi aman berlawanan arah angin dan kirimkan laporan darurat seketika melalui sistem warga kami.
              </p>
            </div>
          </div>

          <Link
            href="/lapor"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-xs font-bold text-white shadow-sm hover:bg-red-700 shrink-0"
          >
            <span>Kirim Laporan Lapangan Sekarang</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
