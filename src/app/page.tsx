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
      <section className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <Badge variant="outline" className="text-xs font-bold uppercase tracking-wider text-primary-foreground border-primary-foreground/30">
                Sistem Siaga Bencana Kebakaran Hutan & Lahan
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Melihat Kepulan Asap atau Indikasi Perusakan Hutan?
            </h2>
            <p className="text-sm text-primary-foreground/80 max-w-2xl leading-relaxed">
              Kirimkan laporan cepat melalui aplikasi web CIREMAI GUARD atau hubungi saluran telepon darurat posko balai. Setiap detik sangat berharga untuk mencegah api menjalar ke kanopi hutan primer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/lapor"
              className={cn(buttonVariants({ variant: "destructive", size: "lg" }), "h-11 px-5 text-sm font-bold gap-2 shadow-sm")}
            >
              <Flame className="h-4 w-4" aria-hidden="true" />
              <span>Buat Laporan Cepat Warga</span>
            </Link>
            <a
              href="tel:0232613158"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-11 px-5 text-sm font-bold gap-2 shadow-sm")}
            >
              <PhoneCall className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
              <span>Telpon Posko (0232-613158)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
