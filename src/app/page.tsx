import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import WasteMachineAnatomy from "@/components/WasteMachineAnatomy";
import WasteImpactSimulator from "@/components/WasteImpactSimulator";
import WasteUtilizationFlow from "@/components/WasteUtilizationFlow";
import EnvironmentalComparisonSlider from "@/components/EnvironmentalComparisonSlider";
import CampaignActionSection from "@/components/CampaignActionSection";
import TrailStatusBoard from "@/components/TrailStatusBoard";
import HomeFaqSection from "@/components/HomeFaqSection";
import { TRAIL_SEEDS, CIRCULIFE_INFO } from "@/lib/constants";
import { Recycle, PackageCheck, PhoneCall, Radio, CheckCircle, ArrowRight, Sprout, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Biosphere Console & Mini Telemetry */}
      <HeroSection />

      {/* 1.5 Standalone Anatomy Rig Section: Direct Physical Machine Explainer */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background" id="mesin-ekstrusi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Teknologi Tepat Guna Komunitas
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Anatomi Alat Pencetak Paving &amp; Kompos Mandiri
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Mesin pres hidrolik dan tungku peleleh dirancang dengan komponen lokal yang mudah dirawat oleh kelompok warga, menghasilkan paving block standar K-250 tanpa polusi asap pekat.
            </p>
          </div>
          <WasteMachineAnatomy />
        </div>
      </section>

      {/* 2. Interactive Waste-to-Value & Carbon Reduction Simulator */}
      <WasteImpactSimulator />

      {/* 3. Interactive Waste-to-Value Utilization Flow (4-Stage Core Process) */}
      <WasteUtilizationFlow />

      {/* 4. Interactive Before-After Environmental Restoration Split Slider */}
      <EnvironmentalComparisonSlider />

      {/* 5. Conservation Action Initiatives (Bento Grid 3 Circular Pillars) */}
      <CampaignActionSection />

      {/* 6. Drop-Point & Bank Sampah Status Board (Anchor: #jalur-status) */}
      <div id="jalur-status">
        <TrailStatusBoard trails={TRAIL_SEEDS} />
      </div>

      {/* 7. Interactive Accordion FAQ & Operational Transparency */}
      <HomeFaqSection />

      {/* 8. Circular Economy Mission Dispatch CTA Block */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-3xl border border-primary-foreground/20 bg-primary/20 p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-4 text-center lg:text-left max-w-3xl">
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 border-emerald-400/30 rounded-md px-3 py-1 gap-1.5">
                    <Radio className="h-3.5 w-3.5 animate-pulse" aria-hidden="true" />
                    <span>Inisiatif Zero Waste CircuLife Nasional</span>
                  </Badge>
                  <span className="text-xs font-mono text-primary-foreground/70 hidden sm:inline">
                    24 Drop Point & 18 KSM Sentral
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-primary-foreground">
                  Pilah Sampah Dari Rumah & Ubah Menjadi Dampak Nyata
                </h2>

                <p className="text-sm sm:text-base text-primary-foreground/85 leading-relaxed">
                  Setiap botol plastik PET, kaleng logam, dan sisa makanan yang Anda pilah dan setorkan ke CircuLife ditimbang secara digital dan dikonversi menjadi paving block jalan lingkungan, kompos kasgot bernutrisi, serta insentif reward langsung.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>Konversi Paving Block K-250 Teruji</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>Tukar Bibit & Produk Daur Ulang</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span>100% Berdayakan KSM Komunitas</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0 justify-center">
                <Link
                  href="/lapor"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "h-13 px-8 text-xs font-mono font-bold uppercase tracking-wider gap-2.5 shadow-lg rounded-xl bg-background text-foreground hover:bg-background/90 hover:scale-[1.02] transition-transform"
                  )}
                >
                  <PackageCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>Setor & Timbang Sampah</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-13 px-8 text-xs font-mono font-bold uppercase tracking-wider gap-2.5 shadow-md rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  <span>Hubungi Tim Kemitraan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
