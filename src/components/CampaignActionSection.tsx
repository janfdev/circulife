import React from "react";
import Link from "next/link";
import { Flame, Sprout, ArrowUpRight, CheckCircle2, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CampaignActionSection() {
  return (
    <section className="py-16 sm:py-24 border-b border-border bg-background" aria-labelledby="campaign-actions-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
              Sirkularitas Ekonomi Berkelanjutan
            </Badge>
            <h2 id="campaign-actions-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-[1.2]">
              Tiga Alur Utama Pemanfaatan Sampah Terpadu
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Mengubah timbunan limbah anorganik dan organik menjadi produk bernilai guna tinggi bagi komunitas mitra dan ketahanan lingkungan.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/40 p-2.5 rounded-xl border border-border/60">
            <ShieldCheck className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <span>Kemitraan Sentra Bank Sampah & KSM Terverifikasi</span>
          </div>
        </div>

        {/* Bento Grid layout inspired by BagUI Feature blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Bento Item 1: Alur Plastik PET & Sachet (Featured Wide Block - 7 cols) */}
          <Card className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-border/80 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 overflow-hidden group">
            <CardHeader className="p-6 sm:p-8 pb-4 border-b border-border/40 bg-muted/15">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:scale-105 transition-transform">
                  <Layers className="h-6 w-6" aria-hidden="true" />
                </div>
                <Badge variant="secondary" className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                  Alur Plastik : Eco-Paving
                </Badge>
              </div>

              <CardTitle className="text-xl sm:text-2xl font-black text-foreground tracking-tight leading-snug">
                Cacahan Botol PET & Sachet Menjadi Eco-Paving Block
              </CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Botol air mineral dan kemasan sachet plastik dicacah halus, dilelehkan bersama agregat pasir, dan dicetak menjadi material perkerasan ramah lingkungan berkekuatan K-250.
              </p>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-6 space-y-6">
              {/* Telemetry Impact Stat Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/30 border border-border/60 text-center font-mono">
                <div>
                  <span className="block text-lg sm:text-2xl font-black text-foreground tabular-nums">42.800+</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground uppercase font-bold tracking-wider">Paving Terproduksi</span>
                </div>
                <div className="border-x border-border/60">
                  <span className="block text-lg sm:text-2xl font-black text-primary tabular-nums">1.2 kg</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground uppercase font-bold tracking-wider">Plastik per Buah</span>
                </div>
                <div>
                  <span className="block text-lg sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">K-250</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground uppercase font-bold tracking-wider">Standar Tekan Uji</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Diolah oleh Sentra Daur Ulang KSM Berkah & Jaringan Bank Sampah Nasional.</span>
              </div>
            </CardContent>

            <CardFooter className="p-4 sm:p-6 px-6 sm:px-8 border-t border-border/60 bg-muted/10 flex items-center justify-between">
              <Link
                href="/galeri"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "h-10 px-5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 shadow-sm"
                )}
              >
                <span>Lihat Galeri & Katalog Produk</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <span className="text-xs font-mono text-muted-foreground">Realisasi 2026</span>
            </CardFooter>
          </Card>

          {/* Bento Item 2: Alur Logam Kaleng Gas (5 cols) */}
          <Card className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border/80 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 overflow-hidden group">
            <CardHeader className="p-6 sm:p-8 pb-4 border-b border-border/40 bg-muted/15">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20 group-hover:scale-105 transition-transform">
                  <Flame className="h-6 w-6" aria-hidden="true" />
                </div>
                <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md text-amber-700 dark:text-amber-400 border-amber-500/30">
                  Alur Logam : Upcycling
                </Badge>
              </div>

              <CardTitle className="text-xl font-black text-foreground tracking-tight leading-snug">
                Upcycling Kaleng Logam Jadi Tungku Biomassa & Wadah
              </CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Mencegah bahaya peledakan kaleng gas bekas di tempat pembuangan dengan mentransformasi kaleng kosong menjadi kompor biomassa ultralight dan wadah serbaguna.
              </p>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-6 space-y-4">
              <ul className="space-y-2.5 text-xs text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>Dekontaminasi sisa gas bertekanan di drop-point sentral</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>Fabrikasi perforated ventilation untuk efisiensi biomassa 300%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>1.920 unit tungku ultralight didistribusikan ke penggiat alam</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter className="p-4 sm:p-6 px-6 sm:px-8 border-t border-border/60 bg-muted/10 flex items-center justify-between">
              <Link
                href="/pantau"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "h-10 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 border-border/80"
                )}
              >
                <span>Kalkulasi Kaleng Logam</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <span className="text-xs font-mono text-muted-foreground">Efisiensi 88%</span>
            </CardFooter>
          </Card>

          {/* Bento Item 3: Alur Organik Biokonversi Kasgot (Full Width 12 cols) */}
          <Card className="lg:col-span-12 rounded-2xl border border-border/80 bg-gradient-to-r from-card via-card to-primary/5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Sprout className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="default" className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-primary text-primary-foreground">
                      Program Unggulan
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">Tukar Sampah Jadi Bibit & Poin</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                    Kompos Bio-Kasgot & Penukaran Sampah dengan Bibit Tanaman
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
                    Setiap 5 kg sampah terpilah yang disetorkan ke drop-point dapat langsung ditukarkan dengan 1 bibit tanaman siap tanam atau produk daur ulang. Sampah organik difermentasi bersama kasgot maggot BSF untuk menyuburkan persemaian tanaman komunitas.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/lapor"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "h-11 px-5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl gap-2 shadow-sm"
                  )}
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span>Setor Sampah & Klaim Reward</span>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
