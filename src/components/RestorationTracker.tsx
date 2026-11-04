import React from "react";
import { Sprout, CheckCircle2, TrendingUp, MapPin, HeartHandshake } from "lucide-react";

export default function RestorationTracker() {
  const zones = [
    {
      id: "pasir-batang",
      name: "Zona Restorasi Blok Pasir Batang",
      regency: "Kuningan",
      elevation: "1.200 - 1.800 mdpl",
      totalAreaHa: 120,
      plantedTrees: 14500,
      targetTrees: 18000,
      progressPercent: 82,
      speciesUsed: ["Saninten", "Rasamala", "Puspa", "Kihujan"],
      status: "Tahap Pemeliharaan Intensif",
      notes: "Kawasan pulih dari dampak kebakaran 2023. Tingkat kelangsungan hidup bibit mencapai 88%.",
    },
    {
      id: "cileutik-sadarehe",
      name: "Zona Reforestasi Blok Sadarehe-Cileutik",
      regency: "Majalengka",
      elevation: "1.400 - 2.100 mdpl",
      totalAreaHa: 85,
      plantedTrees: 9800,
      targetTrees: 14000,
      progressPercent: 68,
      speciesUsed: ["Cemara Gunung", "Pinus Merkusii", "Cantigi"],
      status: "Pengkayaan Kanopi & Penahan Longsor",
      notes: "Fokus pada lereng curam bekas savana terbakar untuk mengunci lapisan tanah vulkanik.",
    },
    {
      id: "lambosir",
      name: "Zona Pemulihan Savana Lambosir",
      regency: "Kuningan",
      elevation: "900 - 1.300 mdpl",
      totalAreaHa: 65,
      plantedTrees: 5200,
      targetTrees: 7000,
      progressPercent: 74,
      speciesUsed: ["Huru", "Kiteja", "Trembesi Lereng"],
      status: "Restorasi Koridor Satwa",
      notes: "Koridor perlintasan Surili dan satwa mamalia kecil antar blok hutan lindung.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
          Program Pemulihan Ekosistem
        </span>
        <h2 className="text-2xl font-black text-foreground">
          Peta Perkembangan Restorasi Lahan Bekas Karhutla
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Pantauan nyata reboisasi pohon endemik di 3 zona rehabilitasi kritis Balai Taman Nasional Gunung Ciremai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {zones.map((z) => (
          <div
            key={z.id}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-forest-100 text-forest-800 dark:bg-forest-900/60 dark:text-emerald-300">
                  Kabupaten {z.regency}
                </span>
                <span className="text-xs font-bold text-primary tabular-nums">
                  {z.progressPercent}% Pulih
                </span>
              </div>

              <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                {z.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{z.elevation}</span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 mb-4">
                <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${z.progressPercent}%` }}
                    role="progressbar"
                    aria-valuenow={z.progressPercent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Progres restorasi ${z.name}`}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                  <span className="tabular-nums">{z.plantedTrees.toLocaleString("id-ID")} pohon</span>
                  <span className="tabular-nums">Target: {z.targetTrees.toLocaleString("id-ID")}</span>
                </div>
              </div>

              {/* Tree tags */}
              <div className="mb-4">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-1.5">
                  Bibit Endemik Ditanam:
                </span>
                <div className="flex flex-wrap gap-1">
                  {z.speciesUsed.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] bg-muted/60 text-foreground border border-border/50"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {z.notes}
              </p>
            </div>

            <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{z.status}</span>
              </span>
              <span className="text-muted-foreground font-mono tabular-nums">{z.totalAreaHa} Ha</span>
            </div>
          </div>
        ))}
      </div>

      {/* Adoption Callout */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">
              Ingin Berpartisipasi Mengadopsi Pohon Endemik Saninten?
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Program adopsi bibit pohon dikelola bersama komunitas masyarakat desa penyangga sekitar TNGC untuk memastikan pemeliharaan bibit selama 3 tahun pertama.
            </p>
          </div>
        </div>

        <a
          href="https://tngciremai.menlhk.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-xs font-bold text-white shadow-sm hover:opacity-95 shrink-0"
        >
          Kunjungi Laman Resmi Balai TNGC
        </a>
      </div>
    </div>
  );
}
