import React from "react";
import SpeciesDirectory from "@/components/SpeciesDirectory";
import RestorationTracker from "@/components/RestorationTracker";
import { SPECIES_SEEDS } from "@/lib/constants";
import { TreePine, Sprout, ShieldCheck } from "lucide-react";

export default function KonservasiPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 text-forest-800 dark:bg-forest-900/60 dark:text-forest-200 mb-2">
            <TreePine className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Keanekaragaman Hayati & Restorasi Lingkungan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Konservasi Ekosistem & Spesies Endemik Gunung Ciremai
          </h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
            Gunung Ciremai merupakan benteng keanekaragaman hayati pulau Jawa dengan ratusan jenis flora dan fauna endemik yang bergantung pada kelestarian hutan primer dan savana lereng.
          </p>
        </div>

        {/* 1. Species Directory Section */}
        <section aria-labelledby="species-heading">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
              Ensiklopedia Flora & Fauna
            </span>
            <h2 id="species-heading" className="text-2xl font-black text-foreground">
              Katalog Spesies Terlindungi Prioritas
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Mengenal lebih dekat satwa kunci dan vegetasi alami penjaga keseimbangan ekologi TNGC.
            </p>
          </div>
          <SpeciesDirectory speciesList={SPECIES_SEEDS} />
        </section>

        {/* 2. Ecosystem Restoration Section */}
        <section className="pt-8 border-t border-border" aria-labelledby="restoration-heading">
          <RestorationTracker />
        </section>
      </div>
    </div>
  );
}
