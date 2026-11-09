import React from "react";
import SpeciesDirectory from "@/components/SpeciesDirectory";
import RestorationTracker from "@/components/RestorationTracker";
import CircularProductCatalog from "@/components/CircularProductCatalog";
import { SPECIES_SEEDS } from "@/lib/constants";
import { Recycle, TreePine, Sparkles, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function KonservasiPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-border pb-8 space-y-3">
          <Badge variant="secondary" className="gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-1">
            <Recycle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Ekonomi Sirkular & Konservasi Lingkungan</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
            Katalog Produk Olahan Sampah & Konservasi Terpadu
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Mengubah sampah anorganik terpilah menjadi material konstruksi jalan setapak ramah lingkungan, pupuk persemaian bibit penghijauan, dan produk upcycling bernilai tambah tinggi.
          </p>
        </div>

        {/* 1. Circular Product Catalog Section */}
        <section aria-labelledby="circular-heading">
          <div className="mb-8 space-y-2">
            <Badge variant="outline" className="mb-1 text-xs font-bold uppercase tracking-wider text-primary border-primary/30">
              Waste-to-Value Hub
            </Badge>
            <h2 id="circular-heading" className="text-2xl sm:text-3xl font-black text-foreground">
              Produk Olahan Daur Ulang Mandiri Komunitas
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Katalog resmi produk hasil daur ulang sampah terpilah yang diproduksi oleh KSM mitra sirkularitas di sentra pengolahan komunitas.
            </p>
          </div>
          <CircularProductCatalog />
        </section>

        {/* 2. Species Directory Section */}
        <section className="pt-10 border-t border-border" aria-labelledby="species-heading">
          <div className="mb-8 space-y-2">
            <Badge variant="outline" className="mb-1 text-xs font-bold uppercase tracking-wider text-primary border-primary/30">
              Flora & Fauna yang Dilindungi
            </Badge>
            <h2 id="species-heading" className="text-2xl sm:text-3xl font-black text-foreground">
              Ekosistem Asli yang Kita Lindungi dari Ancaman Sampah
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Sampah plastik dan kaleng mengancam habitat satwa endemik seperti Elang Jawa dan Macan Tutul. Kenali mereka dan jaga rumah mereka.
            </p>
          </div>
          <SpeciesDirectory speciesList={SPECIES_SEEDS} />
        </section>

        {/* 3. Ecosystem Restoration Section */}
        <section className="pt-10 border-t border-border" aria-labelledby="restoration-heading">
          <RestorationTracker />
        </section>
      </div>
    </div>
  );
}
