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
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <Badge variant="outline" className="mb-2 text-xs font-bold uppercase tracking-wider text-primary border-primary/30">
          Program Pemulihan Ekosistem
        </Badge>
        <h2 className="text-2xl font-black text-foreground">
          Peta Perkembangan Restorasi Lahan Bekas Karhutla
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Pantauan nyata reboisasi pohon endemik di 3 zona rehabilitasi kritis Balai Taman Nasional Gunung Ciremai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {zones.map((z) => (
          <Card
            key={z.id}
            className="flex flex-col justify-between shadow-sm transition-all hover:border-primary/50"
          >
            <div>
              <CardHeader className="pb-3 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-[11px] font-bold uppercase tracking-wider">
                    Kabupaten {z.regency}
                  </Badge>
                  <span className="text-xs font-bold text-primary tabular-nums">
                    {z.progressPercent}% Pulih
                  </span>
                </div>

                <CardTitle className="text-base font-bold text-foreground leading-snug">
                  {z.name}
                </CardTitle>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{z.elevation}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                {/* Progress bar */}
                <div className="space-y-1.5">
                  <Progress value={z.progressPercent} className="h-2" />
                  <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                    <span className="tabular-nums">{z.plantedTrees.toLocaleString("id-ID")} pohon</span>
                    <span className="tabular-nums">Target: {z.targetTrees.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                {/* Tree tags */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-1.5">
                    Bibit Endemik Ditanam:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {z.speciesUsed.map((spec, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant="outline"
                        className="px-2 py-0.5 text-[11px] font-medium"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {z.notes}
                </p>
              </CardContent>
            </div>

            <CardFooter className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{z.status}</span>
              </span>
              <span className="text-muted-foreground font-mono tabular-nums">{z.totalAreaHa} Ha</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Adoption Callout */}
      <Card className="border-primary/30 bg-primary/5 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "h-10 px-5 text-xs font-bold shadow-sm shrink-0")}
          >
            Kunjungi Laman Resmi Balai TNGC
          </a>
        </div>
      </Card>
    </div>
  );
}
