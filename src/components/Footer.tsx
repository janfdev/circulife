import React from "react";
import Link from "next/link";
import { ShieldAlert, PhoneCall, Trees, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card text-foreground">
      {/* Emergency Strip */}
      <div className="border-b border-border/80 bg-red-600/10 px-4 py-3 dark:bg-red-950/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-semibold text-red-700 dark:text-red-400">
            <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Posko Siaga Darurat Karhutla Balai TNGC (24 Jam) : 0232-613158</span>
          </div>
          <a
            href="tel:0232613158"
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-red-600 px-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-red-700 focus-visible:ring-2"
          >
            <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Panggil Posko Darurat</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Col 1: Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-forest-800 text-white">
                <Trees className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              </div>
              <span className="text-base font-extrabold tracking-tight">CIREMAI GUARD</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Platform digital edukasi, mitigasi karhutla, dan partisipasi publik untuk menjaga kelestarian ekosistem Taman Nasional Gunung Ciremai (3.078 mdpl), Jawa Barat.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Kuningan & Majalengka, Jawa Barat, Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigation & Services */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Kanal Layanan Konservasi
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/lapor" className="hover:text-primary transition-colors">
                  Lapor Cepat Indikasi Asap & Kebakaran
                </Link>
              </li>
              <li>
                <Link href="/edukasi" className="hover:text-primary transition-colors">
                  Panduan Mitigasi & SOP Rimba Bebas Api
                </Link>
              </li>
              <li>
                <Link href="/konservasi" className="hover:text-primary transition-colors">
                  Ensiklopedia Flora & Fauna Endemik Ciremai
                </Link>
              </li>
              <li>
                <Link href="/pantau" className="hover:text-primary transition-colors">
                  Pemantauan Cuaca & Direktori Posko Lapangan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Pos Lapangan Resmi */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
              4 Pos Jalur Pendakian Resmi
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-md border border-border p-2">
                <p className="font-bold text-foreground">Jalur Palutungan</p>
                <p className="text-muted-foreground">Cisantana, Kuningan</p>
              </div>
              <div className="rounded-md border border-border p-2">
                <p className="font-bold text-foreground">Jalur Apuy</p>
                <p className="text-muted-foreground">Argamukti, Majalengka</p>
              </div>
              <div className="rounded-md border border-border p-2">
                <p className="font-bold text-foreground">Jalur Linggarjati</p>
                <p className="text-muted-foreground">Cilimus, Kuningan</p>
              </div>
              <div className="rounded-md border border-border p-2">
                <p className="font-bold text-foreground">Jalur Sadarehe</p>
                <p className="text-muted-foreground">Rajagaluh, Majalengka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p className="tabular-nums">
            &copy; 2026 CIREMAI GUARD : Kolaborasi Masyarakat Peduli Api & Generasi Muda Pelestari Hutan.
          </p>
          <div className="flex items-center gap-1 font-medium text-foreground">
            <span>Peduli Hutan Ciremai</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-current" aria-hidden="true" />
            <span>Untuk Generasi Mendatang</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
