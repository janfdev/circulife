import React from "react";
import Link from "next/link";
import { TrailCondition } from "@/types";
import { MapPin, AlertTriangle, ShieldCheck, Clock, Navigation } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TrailStatusBoardProps {
  trails: TrailCondition[];
}

export default function TrailStatusBoard({ trails }: TrailStatusBoardProps) {
  return (
    <section className="py-14 sm:py-20 bg-muted/40 border-y border-border" aria-labelledby="trail-status-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Telemetri Posko Jalur Lapangan</span>
              </Badge>
            </div>
            <h2 id="trail-status-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
              Status 4 Jalur Pendakian Resmi Ciremai
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
              Informasi langsung kondisi jalur resmi Taman Nasional Gunung Ciremai beserta tingkat kerawanan karhutla per posko.
            </p>
          </div>
          <Link
            href="/pantau"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-10 px-4 font-mono font-bold uppercase tracking-wider text-xs border-primary/30 text-primary hover:bg-primary/5 self-start md:self-auto inline-flex items-center gap-2 rounded-xl")}
          >
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Buka Dashboard Cuaca Selengkapnya</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trails.map((trail) => {
            const isOpen = trail.openStatus === "OPEN";
            const isRestricted = trail.openStatus === "RESTRICTED";
            const isHighRisk = trail.fireRiskLevel === "TINGGI" || trail.fireRiskLevel === "EKSTREM";

            return (
              <Card
                key={trail.id}
                className="flex flex-col justify-between transition-all hover:border-primary/50 shadow-sm rounded-2xl overflow-hidden bg-card/95 hover:shadow-md"
              >
                <div>
                  <CardHeader className="pb-3 space-y-3 border-b border-border/60 bg-muted/20">
                    {/* Status header badges */}
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        variant={isOpen ? "outline" : isRestricted ? "secondary" : "destructive"}
                        className={`gap-1.5 px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wide rounded-md ${
                          isOpen
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                            : isRestricted
                            ? "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-300"
                            : ""
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                        {isOpen ? "Jalur Dibuka" : isRestricted ? "Jalur Terbatas" : "Jalur Ditutup"}
                      </Badge>

                      <Badge
                        variant={isHighRisk ? "destructive" : "secondary"}
                        className="gap-1 text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      >
                        <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
                        <span>Resiko: {trail.fireRiskLevel}</span>
                      </Badge>
                    </div>

                    <div>
                      <CardTitle className="text-lg font-black text-foreground tracking-tight">
                        {trail.name}
                      </CardTitle>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 font-mono">
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                        <span>Kabupaten {trail.regency}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4 space-y-4">
                    {/* Metrics HUD Panel */}
                    <div className="grid grid-cols-2 gap-2 text-xs border border-border/60 py-2.5 bg-muted/40 rounded-xl px-3 font-mono">
                      <div>
                        <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-wider">Panjang Trek</span>
                        <span className="font-bold text-foreground tabular-nums text-sm">{trail.lengthKm} km</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-wider">Elevasi</span>
                        <span className="font-bold text-foreground tabular-nums text-sm">{trail.elevationRange}</span>
                      </div>
                    </div>

                    {/* Notes */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {trail.notes}
                    </p>
                  </CardContent>
                </div>

                <CardFooter className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground bg-muted/10 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-primary" aria-hidden="true" />
                    <span className="tabular-nums">{trail.lastUpdated}</span>
                  </div>
                  <Link
                    href={`/lapor?trail=${trail.id}`}
                    className={cn(buttonVariants({ variant: "link", size: "sm" }), "h-auto p-0 font-bold text-primary hover:underline text-[11px] font-mono")}
                  >
                    Lapor di Jalur Ini
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
