"use client";

import React, { useState } from "react";
import { WASTE_FLOW_STAGES } from "@/lib/constants";
import { WasteFlowStage } from "@/types";
import {
  Filter,
  Scale,
  Factory,
  Trees,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { WasteMachineAnatomy } from "@/components/WasteMachineAnatomy";
import { cn } from "@/lib/utils";

export default function WasteUtilizationFlow() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStage: WasteFlowStage =
    WASTE_FLOW_STAGES.find((s) => s.step === activeStep) || WASTE_FLOW_STAGES[0];

  const getStageIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Filter className="h-5 w-5" />;
      case 2:
        return <Scale className="h-5 w-5" />;
      case 3:
        return <Factory className="h-5 w-5" />;
      case 4:
        return <Trees className="h-5 w-5" />;
      default:
        return <RefreshCw className="h-5 w-5" />;
    }
  };

  return (
    <section
      id="alur-sirkular"
      className="py-16 sm:py-24 border-t border-border/80 bg-background/50 relative overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Alur Sirkularitas End-to-End</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
            Bagaimana CircuLife Mengubah Sampah Menjadi Nilai Nyata?
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Dari pemilahan awal di tangan warga, penimbangan digital presisi, pabrikasi ramah lingkungan, hingga produk sirkular bernilai ekonomi tinggi. Telusuri 4 tahap siklus tertutup berikut:
          </p>
        </div>

        {/* 4 Steps Stepper Navigation (BagUI Horizontal Stepper with Connected Rail) */}
        <div className="relative">
          {/* Subtle connecting rail behind steps on desktop */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-1/2 bg-border/60 -z-0" aria-hidden="true" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
          {WASTE_FLOW_STAGES.map((stage) => {
            const isActive = stage.step === activeStep;
            const isCompleted = stage.step < activeStep;

            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={cn(
                  "p-3.5 sm:p-5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between group",
                  isActive
                    ? "border-primary bg-card shadow-lg ring-2 ring-primary/30 glow-card"
                    : "border-border/80 bg-card/70 hover:border-primary/50 hover:bg-card"
                )}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary"
                    aria-hidden="true"
                  />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "h-8 w-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors shadow-xs",
                        isActive
                          ? "bg-primary text-primary-foreground ring-2 ring-primary/40"
                          : isCompleted
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        `0${stage.step}`
                      )}
                    </span>

                    <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground flex items-center gap-1">
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />}
                      <span>Langkah {stage.step}/4</span>
                    </span>
                  </div>

                  <div>
                    <h3
                      className={cn(
                        "text-sm sm:text-base font-bold transition-colors line-clamp-1",
                        isActive ? "text-primary" : "text-foreground"
                      )}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    {getStageIcon(stage.step)}
                    <span className="font-mono">{stage.badgeText}</span>
                  </span>
                  <ChevronRight
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      isActive ? "text-primary translate-x-0.5" : "text-muted-foreground/40"
                    )}
                  />
                </div>
              </button>
            );
          })}
          </div>
        </div>

        {/* Active Stage Detailed Bento Presentation (BagUI Presentation Card) */}
        <Card className="rounded-3xl border-border bg-card/95 shadow-xl overflow-hidden glow-card">
          <CardHeader className="p-6 sm:p-8 border-b border-border/60 bg-muted/20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                  {getStageIcon(currentStage.step)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
                      {currentStage.badgeText}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">
                      Tahap {currentStage.step} dari 4
                    </span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-black text-foreground mt-1">
                    {currentStage.title} : {currentStage.subtitle}
                  </CardTitle>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="rounded-xl h-9 px-3 text-xs font-bold"
                >
                  Sebelumnya
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  disabled={activeStep === 4}
                  onClick={() => setActiveStep((prev) => Math.min(4, prev + 1))}
                  className="rounded-xl h-9 px-3 text-xs font-bold gap-1"
                >
                  <span>Selanjutnya</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 sm:p-8 space-y-8">
            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              {currentStage.description}
            </p>

            {/* Embedded Anatomy Isometric Technical Rig (Stage 3 Highlight) */}
            {activeStep === 3 && (
              <div className="pt-2 pb-2">
                <WasteMachineAnatomy />
              </div>
            )}

            {/* 3 Pillars Bento Inside Stage */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Input Material */}
              <div className="p-5 rounded-2xl border border-border/80 bg-muted/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-muted-foreground">
                  <Filter className="h-4 w-4 text-primary" />
                  <span>1. Material Input Masuk</span>
                </div>
                <ul className="space-y-2">
                  {currentStage.inputMaterials.map((mat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground leading-snug">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transformation Process */}
              <div className="p-5 rounded-2xl border border-border/80 bg-muted/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-muted-foreground">
                  <RefreshCw className="h-4 w-4 text-primary" />
                  <span>2. Proses Transformasi</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {currentStage.transformationProcess}
                </p>
                <div className="p-2.5 rounded-xl bg-card border border-border/60 text-[11px] font-mono text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>SOP Standar KSM Teruji Lab</span>
                </div>
              </div>

              {/* Output Products & Value */}
              <div className="p-5 rounded-2xl border border-border/80 bg-muted/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-muted-foreground">
                  <Layers className="h-4 w-4 text-primary" />
                  <span>3. Produk Output Bernilai</span>
                </div>
                <ul className="space-y-2">
                  {currentStage.outputProducts.map((prod, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-bold text-foreground leading-snug">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{prod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact Metric & Social Impact Callout Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 block">
                    Dampak Nyata Lingkungan :
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-100">
                    {currentStage.impactMetric}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/25 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block">
                    Manfaat Sosial Komunitas :
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-foreground">
                    {currentStage.communityBenefit}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action Strip */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground font-mono">
                Ingin menghitung estimasi paving block & pupuk dari timbulan sampah Anda?
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="/pantau"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-xl text-xs font-bold gap-1.5 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  <Scale className="h-3.5 w-3.5" />
                  <span>Buka Simulator Sampah</span>
                </a>
                <a
                  href="/lapor"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "rounded-xl text-xs font-bold gap-1.5"
                  )}
                >
                  <span>Mulai Setor Sampah</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
