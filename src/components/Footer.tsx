import React from "react";
import Link from "next/link";
import { ShieldAlert, PhoneCall, Trees, MapPin, Heart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card text-foreground">
      {/* Emergency Strip with generous padding */}
      <div className="border-b border-destructive/20 bg-destructive/10 px-4 sm:px-6 lg:px-8 py-3.5 dark:bg-destructive/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 font-semibold text-destructive">
            <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Posko Siaga Darurat Karhutla Balai TNGC (24 Jam) : 0232-613158</span>
          </div>
          <a
            href="tel:0232613158"
            className={cn(buttonVariants({ variant: "destructive", size: "sm" }), "h-10 px-4 gap-2 font-bold shadow-sm rounded-xl")}
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            <span>Panggil Posko Darurat</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          {/* Col 1: Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Trees className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="text-lg font-black tracking-tight">CIREMAI GUARD</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Platform digital edukasi, mitigasi karhutla, dan partisipasi publik untuk menjaga kelestarian ekosistem Taman Nasional Gunung Ciremai (3.078 mdpl), Jawa Barat.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Kuningan & Majalengka, Jawa Barat, Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigation & Services */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Kanal Layanan Konservasi
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/lapor" className="transition-colors hover:text-primary">
                  Lapor Cepat Indikasi Asap & Kebakaran
                </Link>
              </li>
              <li>
                <Link href="/edukasi" className="transition-colors hover:text-primary">
                  Panduan Mitigasi & SOP Rimba Bebas Api
                </Link>
              </li>
              <li>
                <Link href="/konservasi" className="transition-colors hover:text-primary">
                  Ensiklopedia Flora & Fauna Endemik Ciremai
                </Link>
              </li>
              <li>
                <Link href="/pantau" className="transition-colors hover:text-primary">
                  Pemantauan Cuaca & Direktori Posko Lapangan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Pos Lapangan Resmi */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              4 Pos Jalur Pendakian Resmi
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Palutungan</p>
                <p className="text-muted-foreground mt-0.5">Cisantana, Kuningan</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Apuy</p>
                <p className="text-muted-foreground mt-0.5">Argamukti, Majalengka</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Linggarjati</p>
                <p className="text-muted-foreground mt-0.5">Cilimus, Kuningan</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Jalur Sadarehe</p>
                <p className="text-muted-foreground mt-0.5">Rajagaluh, Majalengka</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 sm:my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row font-mono">
          <p className="tabular-nums">
            &copy; 2026 CIREMAI GUARD : Kolaborasi Masyarakat Peduli Api & Generasi Muda Pelestari Hutan.
          </p>
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <span>Peduli Hutan Ciremai</span>
            <Heart className="h-3.5 w-3.5 fill-current text-destructive" aria-hidden="true" />
            <span>Untuk Generasi Mendatang</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
