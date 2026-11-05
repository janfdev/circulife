import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrailStatusBoard from "@/components/TrailStatusBoard";
import CampaignActionSection from "@/components/CampaignActionSection";
import { TRAIL_SEEDS } from "@/lib/constants";
import { Flame, ShieldAlert, PhoneCall, Radio, CheckCircle, ArrowRight } from "lucide-react";
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

      {/* 3. Conservation Action Initiatives (BagUI-Inspired Bento Grid Block) */}
      <CampaignActionSection />

      {/* 4. Ecological Defense Dispatch CTA Block (Inspired by BagUI CTA & Dispatch Patterns) */}
      <section className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border relative overflow-hidden">
        {/* Subtle radial glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,rgba(27,196,131,0.18),transparent)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-3xl border border-primary-foreground/15 bg-primary/40 backdrop-blur-sm p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-4 text-center lg:text-left max-w-3xl">
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 border-emerald-400/30 rounded-md px-3 py-1 gap-1.5">
                    <Radio className="h-3.5 w-3.5 animate-pulse" aria-hidden="true" />
                    <span>Sistem Siaga Bencana Karhutla & Darurat Hutan</span>
                  </Badge>
                  <span className="text-xs font-mono text-primary-foreground/70 hidden sm:inline">
                    Posko Induk Kuningan & Majalengka
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-primary-foreground">
                  Melihat Titik Asap atau Perusakan Hutan di Jalur Pendakian?
                </h2>

                <p className="text-sm sm:text-base text-primary-foreground/85 leading-relaxed">
                  Laporan cepat Anda diteruskan langsung ke regu patroli Masyarakat Peduli Api (MPA) dan pos registrasi terdekat. Setiap menit sangat berharga untuk mencegah api merambat ke kanopi hutan primer puncak.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>Deteksi Koordinat GPS Otomatis</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>Tiket Audit Pelaporan Terbuka</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>Respon Lapangan 24 Jam</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0 justify-center">
                <Link
                  href="/lapor"
                  className={cn(
                    buttonVariants({ variant: "destructive", size: "lg" }),
                    "h-13 px-8 text-xs font-mono font-bold uppercase tracking-wider gap-2.5 shadow-lg rounded-xl hover:scale-[1.02] transition-transform"
                  )}
                >
                  <Flame className="h-5 w-5" aria-hidden="true" />
                  <span>Kirim Laporan Cepat Warga</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href="tel:0232613158"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "h-13 px-8 text-xs font-mono font-bold uppercase tracking-wider gap-2.5 shadow-md rounded-xl bg-background/95 text-foreground hover:bg-background border border-border"
                  )}
                >
                  <PhoneCall className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Telepon Posko : 0232-613158</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
