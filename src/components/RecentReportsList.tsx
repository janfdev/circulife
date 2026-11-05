"use client";

import React, { useState } from "react";
import { WasteDropReport } from "@/types";
import { MapPin, Clock, Search, ShieldCheck, FileText, Recycle, Layers, Sprout, Flame } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RecentReportsListProps {
  reports: WasteDropReport[];
}

export default function RecentReportsList({ reports }: RecentReportsListProps) {
  const [filterType, setFilterType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = reports.filter((r) => {
    // Category filter
    if (filterType !== "ALL") {
      if (r.wasteCategory !== filterType && r.incidentType !== filterType) {
        return false;
      }
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchId = r.id.toLowerCase().includes(q);
      const matchLoc = r.locationDetail.toLowerCase().includes(q);
      const matchTrail = r.trail.toLowerCase().includes(q);
      const matchDesc = r.description.toLowerCase().includes(q);
      if (!matchId && !matchLoc && !matchTrail && !matchDesc) {
        return false;
      }
    }

    return true;
  });

  const getStatusBadge = (status: WasteDropReport["status"]) => {
    switch (status) {
      case "PENDING":
        return {
          label: "Menunggu Penimbangan",
          variant: "secondary" as const,
          cls: "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
        };
      case "INVESTIGATING":
        return {
          label: "Proses Pencacahan / Olah",
          variant: "outline" as const,
          cls: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300",
        };
      case "VERIFIED":
        return {
          label: "Terverifikasi di Posko",
          variant: "secondary" as const,
          cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
        };
      case "RESOLVED":
        return {
          label: "Produk Selesai Daur Ulang",
          variant: "outline" as const,
          cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        };
      default:
        return {
          label: "Tercatat",
          variant: "outline" as const,
          cls: "",
        };
    }
  };

  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case "PLASTIC_PET":
        return { label: "Plastik PET", cls: "bg-primary/10 text-primary border-primary/20" };
      case "GAS_CANISTER":
        return { label: "Kaleng Gas", cls: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20" };
      case "ORGANIC":
        return { label: "Sampah Organik", cls: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20" };
      default:
        return { label: "Campur / Lainnya", cls: "bg-muted text-muted-foreground border-border" };
    }
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-muted border border-border">
          <Button
            type="button"
            variant={filterType === "ALL" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("ALL")}
            className="h-8 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            Semua Setoran ({reports.length})
          </Button>
          <Button
            type="button"
            variant={filterType === "PLASTIC_PET" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("PLASTIC_PET")}
            className="h-8 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            Plastik PET
          </Button>
          <Button
            type="button"
            variant={filterType === "GAS_CANISTER" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("GAS_CANISTER")}
            className="h-8 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            Kaleng Gas
          </Button>
          <Button
            type="button"
            variant={filterType === "ORGANIC" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("ORGANIC")}
            className="h-8 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            Organik
          </Button>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nomor tiket atau lokasi..."
            className="h-9 pl-9 pr-3 text-xs rounded-xl"
          />
        </div>
      </div>

      {/* Reports Feed */}
      {filteredReports.length === 0 ? (
        <Card className="border-dashed p-12 text-center shadow-none rounded-2xl">
          <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">Tidak Ada Catatan Setoran Sampah</p>
          <p className="text-xs text-muted-foreground mt-1">
            {searchQuery
              ? `Tidak ditemukan data setoran dengan kata kunci "${searchQuery}". Periksa nomor tiket.`
              : "Belum ada catatan setoran sampah untuk kategori ini."}
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredReports.map((report) => {
            const status = getStatusBadge(report.status);
            const catBadge = getCategoryBadge(report.wasteCategory);

            return (
              <Card
                key={report.id}
                className="p-5 shadow-sm transition-all hover:border-primary/50 space-y-3 rounded-2xl bg-card"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-black text-foreground tabular-nums tracking-wide">
                      {report.id}
                    </span>
                    <Badge variant={status.variant} className={`text-[11px] font-mono font-bold uppercase tracking-wider ${status.cls}`}>
                      {status.label}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`text-[11px] font-mono font-semibold uppercase ${catBadge.cls}`}>
                      {catBadge.label}
                    </Badge>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground tabular-nums font-mono">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      <span>{report.timestamp}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground mb-1">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span>
                      {report.locationDetail} (Pos Jalur {report.trail})
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {report.description}
                  </p>
                </div>

                {report.adminNote && (
                  <div className="rounded-xl bg-muted/50 p-3 border border-border/60 text-xs">
                    <span className="font-bold text-foreground mb-0.5 flex items-center gap-1 font-mono text-[11px] uppercase">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <span>Verifikasi Posko Registrasi :</span>
                    </span>
                    <p className="text-muted-foreground leading-normal">{report.adminNote}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
