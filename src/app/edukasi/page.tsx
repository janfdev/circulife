import React from "react";
import SopGuidelines from "@/components/SopGuidelines";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import { QUIZ_SEEDS } from "@/lib/constants";
import { BookOpen, Flame } from "lucide-react";
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
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Pusat Edukasi Mitigasi Kebakaran Hutan</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
            Edukasi Rimba Bebas Api & Kuis Kesiapsiagaan
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Menghilangkan potensi kebakaran hutan di Gunung Ciremai dimulai dari kesadaran setiap individu. Pahami standar operasional prosedur rimba dan uji kesiapan Anda sebelum melangkah ke jalur pendakian.
          </p>
        </div>

        {/* 1. SOP Guidelines Section */}
        <section aria-labelledby="sop-section">
          <SopGuidelines />
        </section>

        {/* 2. Interactive Quiz Section */}
        <section className="pt-10 border-t border-border" aria-labelledby="quiz-section">
          <div className="mb-8 space-y-2">
            <Badge variant="outline" className="mb-1 text-xs font-bold uppercase tracking-wider text-primary border-primary/30">
              Uji Pemahaman Rimba
            </Badge>
            <h2 id="quiz-section" className="text-2xl sm:text-3xl font-black text-foreground">
              Kuis Kesiapsiagaan Karhutla & Etika Konservasi
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Jawab pertanyaan seputar mitigasi bencana kebakaran dan keselamatan di lereng Ciremai. Dapatkan sertifikasi simbolis Duta Siaga Rimba.
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
              Menemukan Pelanggaran Api di Jalur Pendakian?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Laporkan segera melalui formulir siaga karhutla agar dapat ditertibkan regu posko.
            </p>
          </div>
          <Link
            href="/lapor"
            className={cn(buttonVariants({ variant: "destructive", size: "lg" }), "h-12 px-6 text-xs font-bold gap-2.5 shadow-sm shrink-0 rounded-xl")}
          >
            <Flame className="h-4 w-4" aria-hidden="true" />
            <span>Buka Formulir Lapor</span>
          </Link>
        </Card>
      </div>
    </div>
  );
}
