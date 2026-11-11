"use client";

import React from "react";
import Link from "next/link";
import { CircuLifeMark } from "@/components/CircuLifeLogo";
import {
  PackageCheck,
  MapPin,
  Layers,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-border/70 bg-background">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <CircuLifeMark className="h-4 w-4" />
                <span>Ekosistem Pengolahan Sampah Mandiri</span>
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
                Dari Dapur dan Warung, Menjadi Paving Block dan Pupuk Tanaman.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              CircuLife menghubungkan pemilahan sampah harian warga dengan sentra produksi komunitas. Botol plastik dicacah dan dicetak menjadi paving block K-250 untuk jalan desa, kaleng logam dirakit menjadi tungku hemat bahan bakar, dan sisa makanan diolah larva BSF menjadi kompos bernutrisi tinggi.
            </p>

            {/* Direct Specific CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Link
                href="/lapor"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-12 px-7 text-sm font-bold shadow-sm inline-flex items-center justify-center gap-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]"
                )}
              >
                <PackageCheck className="h-4 w-4" aria-hidden="true" />
                <span>Mulai Pilah &amp; Setor</span>
              </Link>
              <a
                href="#alur-sirkular"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-6 text-sm font-bold inline-flex items-center justify-center gap-2.5 rounded-full border-border/80 hover:bg-muted text-foreground transition-all"
                )}
              >
                <Layers className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Lihat Alur Daur Ulang</span>
              </a>
              <Link
                href="/konservasi"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-12 px-5 text-sm font-bold inline-flex items-center justify-center gap-2 rounded-full text-muted-foreground hover:text-foreground"
                )}
              >
                <span>Katalog Produk</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Footprint Highlights */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>24 Drop Point Warga Aktif</span>
              </span>
              <span className="text-border">|</span>
              <span>18 Kelompok Swadaya Mitra</span>
              <span className="text-border">|</span>
              <span className="text-primary font-bold">100% Mengalir ke Lingkungan</span>
            </div>
          </div>

          {/* Real Photography Showcase: Physical Evidence of Waste Transformation */}
          <div className="lg:col-span-5">
            <Card className="border border-border/80 bg-card overflow-hidden rounded-3xl shadow-xs">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src="/images/gallery/paving-pathway.jpg"
                  alt="Jalan setapak lingkungan yang telah dipasang paving block hasil daur ulang plastik PET"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  fetchPriority="high"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="outline" className="bg-card/90 backdrop-blur-md text-[11px] font-mono font-bold text-foreground border-border/60 shadow-xs">
                    Dokumentasi Fisik Lapangan
                  </Badge>
                </div>
              </div>
              <div className="p-5 space-y-3 bg-card border-t border-border/70">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Proyek Perkerasan Jalan Lingkungan</span>
                  <span className="font-bold text-primary">K-250 Teruji</span>
                </div>
                <p className="text-sm text-foreground font-medium leading-snug">
                  Jalan setapak 120 meter di RW 04 dibangun seutuhnya dari 1.200 kg botol plastik PET terpilah warga.
                </p>
                <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>Mitra: KSM Daur Ulang Mandiri</span>
                  <Link href="/galeri" className="text-primary hover:underline font-bold inline-flex items-center gap-1">
                    <span>Lihat Galeri</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-14 sm:mt-16 flex items-center justify-center">
          <a
            href="#mesin-ekstrusi"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
            )}
          >
            <span>Pelajari Mesin Pencetak &amp; Alur Pabrikasi</span>
            <ArrowDown className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}