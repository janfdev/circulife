import React from "react";
import WasteImpactSimulator from "@/components/WasteImpactSimulator";
import TrailStatusBoard from "@/components/TrailStatusBoard";
import RestorationTracker from "@/components/RestorationTracker";
import HotlineDirectory from "@/components/HotlineDirectory";
import { TRAIL_SEEDS } from "@/lib/constants";
import { Activity, Recycle, PackageCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Pantau Status & Kalkulator Sirkularitas | CircuLife",
  description: "Pantau kesiapan posko drop-point, kapasitas penyimpanan sampah, dan hitung estimasi reduksi emisi karbon secara live.",
};

export default function PantauPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-border/70 pb-8 space-y-4">
          <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30 rounded-full">
            <Recycle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Kalkulator Sirkularitas &amp; Pemantauan Real-Time</span>
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
            Hitung Nilai Sampah, Reduksi Emisi &amp; Pantau Kesiapan Sentra
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Hitung potensi konversi sampah botol plastik dan sisa makanan menjadi paving block serta pupuk kompos, sekaligus pantau indikator kapasitas dan cuaca di seluruh sentra mitra CircuLife.
          </p>
        </div>

        {/* 1. Simulator Konversi Dampak & Reduksi Karbon */}
        <section aria-labelledby="simulator-heading">
          <WasteImpactSimulator />
        </section>

        {/* 2. Status Kapasitas Drop-Point Terintegrasi */}
        <section aria-labelledby="drop-point-heading">
          <TrailStatusBoard trails={TRAIL_SEEDS} />
        </section>

        {/* 3. Tracker Restorasi Ekosistem & Pemanfaatan Pupuk Kasgot */}
        <section aria-labelledby="restoration-heading">
          <RestorationTracker />
        </section>

        {/* 4. Direktori Posko Resmi & Hotline */}
        <section className="pt-10 border-t border-border" aria-labelledby="hotline-heading">
          <HotlineDirectory />
        </section>

        {/* Bottom Callout */}
        <Alert className="border-primary/30 bg-primary/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <PackageCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-foreground">
                Membawa Timbulan Sampah Terpilah ke Drop-Point?
              </h3>
              <AlertDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Timbang dan catat setoran sampah Anda di posko registrasi terdekat. Tukarkan dengan bibit pohon penghijauan atau poin reward produk sirkular CircuLife.
              </AlertDescription>
            </div>
          </div>

          <Link
            href="/lapor"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-12 px-6 text-xs font-bold shadow-sm shrink-0 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            <span>Setor & Catat Sampah Sekarang</span>
          </Link>
        </Alert>
      </div>
    </div>
  );
}
