import React from "react";
import SopGuidelines from "@/components/SopGuidelines";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import { QUIZ_SEEDS } from "@/lib/constants";
import { BookOpen, Recycle, PackageCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function EdukasiPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-border pb-8 space-y-3">
          <Badge variant="secondary" className="gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-1">
            <BookOpen className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Pusat Edukasi Sirkularitas & Pengurangan Sampah</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
            Edukasi Zero Waste & Kuis Sirkularitas Komunitas
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Menjaga kebersihan dan kelestarian ekosistem lingkungan dimulai dari manajemen logistik mandiri. Pelajari protokol pemilahan sampah TITO dan uji wawasan Anda sebelum menyetorkan sampah.
          </p>
        </div>

        {/* 1. SOP Guidelines Section */}
        <section aria-labelledby="sop-section">
          <SopGuidelines />
        </section>

        {/* 2. Interactive Quiz Section */}
        <section className="pt-10 border-t border-border" aria-labelledby="quiz-section">
          <div className="mb-8 space-y-2">
            <Badge variant="outline" className="mb-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
              Kuis Literasi Sirkularitas
            </Badge>
            <h2 id="quiz-section" className="text-2xl sm:text-3xl font-black text-foreground">
              Kuis Pengetahuan Pengolahan Sampah & Daur Ulang
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Jawab pertanyaan seputar dekomposisi material, daur ulang limbah, dan etika konservasi lingkungan hidup. Dapatkan sertifikasi simbolis Pejuang Zero Waste CircuLife.
            </p>
          </div>

          <div className="max-w-3xl">
            <InteractiveQuiz questions={QUIZ_SEEDS} />
          </div>
        </section>

        {/* Bottom CTA to report */}
        <Card className="border-border bg-muted/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm rounded-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-black text-foreground">
              Sudah Memilah Sampah dari Rumah Anda?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Catat setoran sampah Anda di posko registrasi untuk ditukar dengan bibit pohon Saninten.
            </p>
          </div>
          <Link
            href="/lapor"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-12 px-6 text-xs font-bold gap-2.5 shadow-sm shrink-0 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            <PackageCheck className="h-4 w-4" aria-hidden="true" />
            <span>Setor Sampah Sekarang</span>
          </Link>
        </Card>
      </div>
    </div>
  );
}
