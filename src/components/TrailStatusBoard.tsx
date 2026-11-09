import React from "react";
import Link from "next/link";
import { TrailCondition } from "@/types";
import { MapPin, AlertTriangle, ShieldCheck, Clock, Navigation, Recycle, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TrailStatusBoardProps {
  trails: TrailCondition[];
}

export default function TrailStatusBoard({ trails }: TrailStatusBoardProps) {
  return (
    <section className="py-16 sm:py-24 bg-muted/40 border-y border-border" aria-labelledby="trail-status-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 mb-1">
              <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
                <Recycle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>Drop-Point & Bank Sampah 4 Jalur</span>
              </Badge>
            </div>
            <h2 id="trail-status-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
              Status Drop-Point & Bank Sampah Terintegrasi
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Fasilitas penampungan sampah terpilah (TITO), kapasitas drop-point, serta tingkat kesiapsiagaan posko di seluruh sentra penampungan mitra komunitas.
            </p>
          </div>
          <Link
            href="/pantau"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-11 px-5 font-mono font-bold uppercase tracking-wider text-xs border-primary/30 text-primary hover:bg-primary/5 self-start md:self-auto inline-flex items-center gap-2 rounded-xl shrink-0"
            )}
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            <span>Kalkulator Nilai Sampah</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trails.map((trail) => {
            const isOpen = trail.openStatus === "OPEN";
            const isRestricted = trail.openStatus === "RESTRICTED";
            const isHighRisk = trail.fireRiskLevel === "TINGGI" || trail.fireRiskLevel === "EKSTREM";
            const fillPct = Math.min(100, Math.round((trail.wasteCollectedKg / trail.wasteCapacityKg) * 100));

            return (
              <Card
                key={trail.id}
                className="flex flex-col justify-between transition-all hover:border-primary/50 shadow-sm rounded-2xl overflow-hidden bg-card/95 hover:shadow-lg glow-card"
              >
                <div>
                  <CardHeader className="p-5 pb-4 space-y-3.5 border-b border-border/60 bg-muted/20">
                    {/* Status header badges */}
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        variant={isOpen ? "outline" : isRestricted ? "secondary" : "destructive"}
                        className={`gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wide rounded-md ${
                          isOpen
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                            : isRestricted
                            ? "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-300"
                            : ""
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                        {isOpen ? "Posko Buka" : isRestricted ? "Kapasitas Terbatas" : "Posko Tutup"}
                      </Badge>

                      <Badge
                        variant={isHighRisk ? "destructive" : "secondary"}
                        className="gap-1 text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                      >
                        <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
                        <span>Resiko: {trail.fireRiskLevel}</span>
                      </Badge>
                    </div>

                    <div>
                      <CardTitle className="text-lg font-black text-foreground tracking-tight">
                        {trail.name}
                      </CardTitle>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1.5 font-mono">
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                        <span>Kabupaten {trail.regency}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 space-y-4">
                    {/* Metrics HUD Panel */}
                    <div className="grid grid-cols-2 gap-3 text-xs border border-border/60 p-3 bg-muted/40 rounded-xl font-mono">
                      <div>
                        <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-wider">Panjang Trek</span>
                        <span className="font-bold text-foreground tabular-nums text-sm mt-0.5 block">{trail.lengthKm} km</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-wider">Elevasi</span>
                        <span className="font-bold text-foreground tabular-nums text-sm mt-0.5 block">{trail.elevationRange}</span>
                      </div>
                    </div>

                    {/* Waste Drop Point Capacity */}
                    <div className="p-3 rounded-xl border border-border/60 bg-background/80 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="flex items-center gap-1.5 text-muted-foreground font-semibold">
                          <Package className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          <span>Kapasitas Drop-Point</span>
                        </span>
                        <span className="font-bold text-foreground tabular-nums">{trail.wasteCollectedKg} / {trail.wasteCapacityKg} kg</span>
                      </div>
                      <Progress value={fillPct} className="h-1.5" />
                      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                        <span className="truncate max-w-[140px]">Mitra: {trail.partnerUnit}</span>
                        <span className={cn(
                          "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase shrink-0",
                          trail.dropPointStatus === "SIAP_TERIMA"
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                            : "bg-amber-500/10 text-amber-700 dark:text-amber-300"
                        )}>
                          {trail.dropPointStatus === "SIAP_TERIMA" ? "Siap Terima" : "Distribusi Logistik"}
                        </span>
                      </div>
                    </div>

                    {/* Notes */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {trail.notes}
                    </p>
                  </CardContent>
                </div>

                <CardFooter className="p-4 px-5 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground bg-muted/10 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    <span className="tabular-nums">{trail.lastUpdated}</span>
                  </div>
                  <Link
                    href={`/lapor?trail=${trail.id}`}
                    className={cn(buttonVariants({ variant: "link", size: "sm" }), "h-auto p-0 font-bold text-primary hover:underline text-[11px] font-mono")}
                  >
                    Setor di Posko Ini
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
