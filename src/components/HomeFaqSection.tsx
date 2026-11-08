"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CIRCULIFE_FAQS } from "@/lib/constants";
import { HelpCircle, ChevronDown, CheckCircle2, MessageSquareText, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomeFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq-section"
      className="py-16 sm:py-24 border-t border-border/80 bg-background relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge
              variant="outline"
              className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30"
            >
              Pertanyaan yang Sering Diajukan
            </Badge>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-4xl font-black text-foreground tracking-tight leading-tight"
            >
              Transparansi Operasional & Informasi Sirkular CircuLife
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Jawaban terbuka mengenai standar teknis paving block K-250, prosedur penimbangan digital di drop-point, serta mekanisme penukaran reward.
            </p>
          </div>

          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-11 px-5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 border-border/80 text-foreground hover:bg-muted self-start md:self-auto shrink-0"
            )}
          >
            <MessageSquareText className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>Tanya Tim Teknis</span>
          </Link>
        </div>

        {/* Accordion List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3.5">
            {CIRCULIFE_FAQS.map((faq, index) => {
              const faqId = faq.id || `faq-${index + 1}`;
              const isOpen = openFaqId === faqId;
              const itemNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

              return (
                <Card
                  key={faqId}
                  className={cn(
                    "rounded-2xl border transition-all duration-200 overflow-hidden",
                    isOpen
                      ? "border-primary/50 shadow-md bg-card ring-1 ring-primary/20"
                      : "border-border/80 bg-card/70 hover:border-border hover:bg-card"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faqId)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${faqId}`}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="font-mono text-xs font-bold text-primary mt-1 shrink-0">
                        {itemNumber}.
                      </span>
                      <span className="text-base sm:text-lg font-black text-foreground tracking-tight leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200",
                        isOpen
                          ? "bg-primary text-primary-foreground rotate-180"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-content-${faqId}`}
                      role="region"
                      className="px-5 sm:px-6 pb-6 pt-0 border-t border-border/40 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-11 sm:pl-14"
                    >
                      <div className="pt-3 flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Side Callout Box: Bantuan Langsung */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="p-6 rounded-2xl border border-primary/30 bg-primary/10 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
                <HelpCircle className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-foreground">
                  Punya Pertanyaan Khusus untuk Komunitas Anda?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Kami menyediakan sesi sosialisasi daring dan pendampingan lapangan gratis bagi pengurus RT/RW, sekolah, dan kelompok pemuda yang ingin membangun drop-point mandiri.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "w-full h-10 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 shadow-xs bg-primary text-primary-foreground hover:bg-primary/90 justify-center"
                  )}
                >
                  <span>Ajukan Konsultasi Mitra</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Card>

            <div className="p-4 rounded-xl border border-border/60 bg-muted/30 text-[11px] font-mono text-muted-foreground space-y-1">
              <span className="font-bold text-foreground block">Hotline Bantuan Cepat:</span>
              <span>Telepon: (0232) 879-1123</span>
              <span className="block">Senin - Minggu: 07:00 - 18:00 WIB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
