import React from "react";
import WeatherRiskCalculator from "@/components/WeatherRiskCalculator";
import HotlineDirectory from "@/components/HotlineDirectory";
import { Activity, Recycle, PackageCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PantauPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-border pb-8 space-y-3">
          <Badge variant="secondary" className="gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-1">
            <Recycle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Kalkulator Sirkular & Pemantauan Lingkungan</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
            Hitung Nilai Sampah, Reduksi Emisi & Pantau Iklim Lereng
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Hitung potensi konversi sampah botol plastik dan sisa makanan menjadi paving block serta pupuk kompos, sekaligus pantau indeks kekeringan dan cuaca lereng Ciremai.
          </p>
        </div>

        {/* 1. Simulator Indeks Nilai Sampah & Cuaca */}
        <section aria-labelledby="calculator-heading">
          <WeatherRiskCalculator />
        </section>

        {/* 2. Hotline Directory Section */}
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
                Membawa Turun Sampah dari Jalur Pendakian Ciremai?
              </h3>
              <AlertDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Timbang dan catat setoran sampah Anda di pos registrasi terdekat. Tukarkan dengan bibit pohon Saninten atau sertifikat pendaki lestari.
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
