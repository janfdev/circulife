import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrailStatusBoard from "@/components/TrailStatusBoard";
import CampaignActionSection from "@/components/CampaignActionSection";
import { TRAIL_SEEDS } from "@/lib/constants";
import { Flame, ShieldAlert, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      <section className="bg-primary text-primary-foreground py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(46,229,157,0.15),transparent)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <Badge variant="outline" className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-foreground border-primary-foreground/30 rounded-md px-3 py-1">
                Sistem Siaga Bencana Kebakaran Hutan & Lahan
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.2]">
              Melihat Kepulan Asap atau Indikasi Perusakan Hutan?
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl leading-relaxed">
              Kirimkan laporan cepat melalui aplikasi web CIREMAI GUARD atau hubungi saluran telepon darurat posko balai. Setiap detik sangat berharga untuk mencegah api menjalar ke kanopi hutan primer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0 justify-center">
            <Link
              href="/lapor"
              className={cn(buttonVariants({ variant: "destructive", size: "lg" }), "h-13 px-7 text-sm font-bold gap-2.5 shadow-sm rounded-xl")}
            >
              <Flame className="h-5 w-5" aria-hidden="true" />
              <span>Buat Laporan Cepat Warga</span>
            </Link>
            <a
              href="tel:0232613158"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-13 px-7 text-sm font-bold gap-2.5 shadow-sm rounded-xl border border-white/20")}
            >
              <PhoneCall className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
              <span className="font-mono">Telpon Posko (0232-613158)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
