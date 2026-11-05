import React from "react";
import { CheckCircle2, MapPin, HeartHandshake } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="space-y-8">
      <div className="border-b border-border pb-6 space-y-2">
        <Badge variant="outline" className="mb-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
          Program Pemulihan Ekosistem
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Peta Perkembangan Restorasi Lahan Bekas Karhutla
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Pantauan nyata reboisasi pohon endemik di 3 zona rehabilitasi kritis Balai Taman Nasional Gunung Ciremai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {zones.map((z) => (
          <Card
            key={z.id}
            className="flex flex-col justify-between shadow-sm transition-all hover:border-primary/50 rounded-2xl overflow-hidden hover:shadow-md bg-card"
          >
            <div>
              <CardHeader className="p-6 pb-4 space-y-3 border-b border-border/60 bg-muted/20">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                    Kabupaten {z.regency}
                  </Badge>
                  <span className="text-xs font-mono font-bold text-primary tabular-nums">
                    {z.progressPercent}% Pulih
                  </span>
                </div>

                <CardTitle className="text-lg font-black text-foreground leading-snug tracking-tight">
                  {z.name}
                </CardTitle>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{z.elevation}</span>
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-5 space-y-5">
                {/* Progress bar */}
                <div className="space-y-2">
                  <Progress value={z.progressPercent} className="h-2.5 rounded-full" />
                  <div className="flex justify-between text-xs text-muted-foreground font-mono">
                    <span className="tabular-nums">{z.plantedTrees.toLocaleString("id-ID")} pohon</span>
                    <span className="tabular-nums">Target: {z.targetTrees.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                {/* Tree tags */}
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground block mb-2 tracking-wider">
                    Bibit Endemik Ditanam:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {z.speciesUsed.map((spec, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant="outline"
                        className="px-2.5 py-1 text-xs font-medium rounded-md"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {z.notes}
                </p>
              </CardContent>
            </div>

            <CardFooter className="p-4 px-6 border-t border-border/60 flex items-center justify-between text-xs bg-muted/10 font-mono">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                <span>{z.status}</span>
              </span>
              <span className="text-muted-foreground tabular-nums font-bold">{z.totalAreaHa} Ha</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Adoption Callout with generous padding and margins */}
      <Card className="border-primary/30 bg-primary/5 p-8 shadow-sm rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <HeartHandshake className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-foreground">
                Ingin Berpartisipasi Menukar Poin Sirkular Menjadi Bibit Pohon?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Setiap penukaran poin sirkular disalurkan langsung ke kelompok tani hutan mitra binaan CircuLife untuk penanaman pohon pelindung mata air dan konservasi tanah.
              </p>
            </div>
          </div>

          <a
            href="https://menlhk.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-12 px-6 text-xs font-bold shadow-sm shrink-0 rounded-xl")}
          >
            Kunjungi Portal Resmi KLHK
          </a>
        </div>
      </Card>
    </div>
  );
}
