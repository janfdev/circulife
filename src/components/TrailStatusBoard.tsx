import React from "react";
import Link from "next/link";
import { TrailCondition } from "@/types";
import { MapPin, Mountain, AlertTriangle, ShieldCheck, Clock } from "lucide-react";

interface TrailStatusBoardProps {
  trails: TrailCondition[];
}

export default function TrailStatusBoard({ trails }: TrailStatusBoardProps) {
  return (
    <section className="py-12 bg-muted/40 border-y border-border" aria-labelledby="trail-status-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 text-forest-800 dark:bg-forest-900/60 dark:text-forest-200 mb-2">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Pantauan Pos Jalur Lapangan</span>
            </div>
            <h2 id="trail-status-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Status 4 Jalur Pendakian Resmi Ciremai
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Informasi langsung kondisi jalur resmi Taman Nasional Gunung Ciremai beserta tingkat kerawanan karhutla per posko.
            </p>
          </div>
          <Link
            href="/pantau"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline self-start md:self-auto"
          >
            <span>Buka Dashboard Cuaca Selengkapnya</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trails.map((trail) => {
            const isOpen = trail.openStatus === "OPEN";
            const isRestricted = trail.openStatus === "RESTRICTED";

            const isHighRisk = trail.fireRiskLevel === "TINGGI" || trail.fireRiskLevel === "EKSTREM";

            return (
              <div
                key={trail.id}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                        isOpen
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                          : isRestricted
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
                          : "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                      {isOpen ? "Jalur Dibuka" : isRestricted ? "Jalur Terbatas" : "Jalur Ditutup"}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isHighRisk
                          ? "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
                      <span>Resiko: {trail.fireRiskLevel}</span>
                    </span>
                  </div>

                  {/* Title & Regency */}
                  <h3 className="text-lg font-bold text-foreground mb-1">{trail.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span>Kabupaten {trail.regency}</span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 text-xs border-y border-border/60 py-2.5 mb-3 bg-muted/20 rounded px-2">
                    <div>
                      <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Panjang Trek</span>
                      <span className="font-bold text-foreground tabular-nums">{trail.lengthKm} km</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Elevasi</span>
                      <span className="font-bold text-foreground tabular-nums">{trail.elevationRange}</span>
                    </div>
                  </div>

                  {/* Notes */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {trail.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    <span>{trail.lastUpdated}</span>
                  </div>
                  <Link
                    href={`/lapor?trail=${trail.id}`}
                    className="font-bold text-primary hover:underline"
                  >
                    Lapor di Jalur Ini
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
