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
import CircularCtaSection from "@/components/blocks/cta-ex-2";
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

      {/* 8. Circular Animated Motion CTA Section (@bagui/cta-2) */}
      <CircularCtaSection />
    </div>
  );
}
