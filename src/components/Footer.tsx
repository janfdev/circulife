import React from "react";
import Link from "next/link";
import { CircuLifeMark } from "@/components/CircuLifeLogo";
import { Recycle, PhoneCall, MapPin, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card text-foreground">
      {/* Information Strip with generous padding */}
      <div className="border-b border-primary/20 bg-primary/10 px-4 sm:px-6 lg:px-8 py-3.5 dark:bg-primary/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 font-semibold text-foreground">
            <Recycle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>Hotline Kemitraan & Penyetoran CircuLife (24 Jam) : 0821-2345-6789</span>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-10 px-4 gap-2 font-bold shadow-sm rounded-xl border-primary/30 text-primary")}
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            <span>Hubungi Kami</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          {/* Col 1: Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border/80 shadow-sm">
                <CircuLifeMark className="h-5 w-5" />
              </div>
              <span className="text-lg font-black tracking-tight">CIRCULIFE</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ekosistem Digital Zero Waste & Waste-to-Value Hub terintegrasi. Mengubah limbah plastik, kaleng logam, dan sisa organik menjadi eco-paving block K-250, tungku biomassa, dan pupuk kompos kasgot bernilai tinggi bagi masyarakat.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Jaringan 24 Drop Point & 18 KSM Sentral Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigation & Services */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Halaman Utama Lomba & Layanan
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Beranda (Alur Sirkular Pemanfaatan Sampah)
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  Tentang Kami (Visi, Misi & 4 Pilar CircuLife)
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="transition-colors hover:text-primary">
                  Artikel, Panduan & Galeri Transformasi Produk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  Kontak, Kemitraan & FAQ Interaktif
                </Link>
              </li>
              <li>
                <Link href="/lapor" className="transition-colors hover:text-primary">
                  Form Setor Sampah & Penukaran Reward
                </Link>
              </li>
              <li>
                <Link href="/pantau" className="transition-colors hover:text-primary">
                  Kalkulator Nilai Sampah & Reduksi Karbon
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sentra Drop Point Mitra */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Jaringan Drop Point Komunitas
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Sentra Kuningan</p>
                <p className="text-muted-foreground mt-0.5">KSM Berkah Argamukti</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Sentra Majalengka</p>
                <p className="text-muted-foreground mt-0.5">Bank Sampah Sahabat Bumi</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Sentra Cirebon</p>
                <p className="text-muted-foreground mt-0.5">Sentra Inovasi Resik</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="font-bold text-foreground">Sentra Bandung Raya</p>
                <p className="text-muted-foreground mt-0.5">KSM Eco Harmoni</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 sm:my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row font-mono">
          <p className="tabular-nums">
            &copy; 2026 CIRCULIFE : EcoDigital For Environment Web Design Competition.
          </p>
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <span>Mewujudkan Indonesia Zero Waste</span>
            <Heart className="h-3.5 w-3.5 fill-current text-primary" aria-hidden="true" />
            <span>Ekonomi Sirkular Nyata</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
