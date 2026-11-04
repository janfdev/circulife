import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrailStatusBoard from "@/components/TrailStatusBoard";
import CampaignActionSection from "@/components/CampaignActionSection";
import { TRAIL_SEEDS } from "@/lib/constants";
import { Flame, ShieldAlert, PhoneCall } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trail Status Board (Anchor: #jalur-status) */}
      <div id="jalur-status">
        <TrailStatusBoard trails={TRAIL_SEEDS} />
      </div>

      {/* 3. Conservation Action Initiatives */}
      <CampaignActionSection />

      {/* 4. Urgent Emergency Callout Bar */}
      <section className="bg-forest-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-forest-800">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              <span>Sistem Siaga Bencana Kebakaran Hutan & Lahan</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Melihat Kepulan Asap atau Indikasi Perusakan Hutan?
            </h2>
            <p className="text-sm text-forest-200 max-w-2xl leading-relaxed">
              Kirimkan laporan cepat melalui aplikasi web CIREMAI GUARD atau hubungi saluran telepon darurat posko balai. Setiap detik sangat berharga untuk mencegah api menjalar ke kanopi hutan primer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/lapor"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-700 focus-visible:ring-2"
            >
              <Flame className="h-4 w-4" aria-hidden="true" />
              <span>Buat Laporan Cepat Warga</span>
            </Link>
            <a
              href="tel:0232613158"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-forest-700 bg-forest-800 px-5 text-sm font-bold text-white transition-colors hover:bg-forest-700 focus-visible:ring-2"
            >
              <PhoneCall className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <span>Telpon Posko (0232-613158)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
