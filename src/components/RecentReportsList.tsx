"use client";

import React, { useState } from "react";
import { FireReport } from "@/types";
import { MapPin, Clock, Search, ShieldCheck, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RecentReportsListProps {
  reports: FireReport[];
}

export default function RecentReportsList({ reports }: RecentReportsListProps) {
  const [filterType, setFilterType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = reports.filter((r) => {
    // Type filter
    if (filterType === "FIRE" && r.incidentType !== "SMOKE" && r.incidentType !== "ACTIVE_FIRE") {
      return false;
    }
    if (filterType === "LITTER" && r.incidentType !== "LITTER_DUMP") {
      return false;
    }
    if (filterType === "LOGGING" && r.incidentType !== "ILLEGAL_LOGGING") {
      return false;
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

  const getStatusBadge = (status: FireReport["status"]) => {
    switch (status) {
      case "PENDING":
        return {
          label: "Menunggu Verifikasi",
          variant: "secondary" as const,
          cls: "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
        };
      case "INVESTIGATING":
        return {
          label: "Investigasi Lapangan",
          variant: "outline" as const,
          cls: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300",
        };
      case "VERIFIED":
        return {
          label: "Terverifikasi / Ditangani",
          variant: "secondary" as const,
          cls: "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300",
        };
      case "RESOLVED":
        return {
          label: "Selesai / Terkendali",
          variant: "outline" as const,
          cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        };
    }
  };

  const getSeverityBadge = (severity: FireReport["severity"]) => {
    switch (severity) {
      case "LOW":
        return { label: "Rendah", variant: "secondary" as const, cls: "text-muted-foreground" };
      case "MEDIUM":
        return { label: "Sedang", variant: "outline" as const, cls: "border-amber-500/30 text-amber-800 dark:text-amber-300" };
      case "HIGH":
        return { label: "Tinggi", variant: "destructive" as const, cls: "" };
      case "CRITICAL":
        return { label: "Kritis", variant: "destructive" as const, cls: "font-black tracking-wide" };
    }
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-muted border border-border">
          <Button
            type="button"
            variant={filterType === "ALL" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("ALL")}
            className="h-8 text-xs font-bold uppercase tracking-wider"
          >
            Semua Laporan ({reports.length})
          </Button>
          <Button
            type="button"
            variant={filterType === "FIRE" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("FIRE")}
            className="h-8 text-xs font-bold uppercase tracking-wider"
          >
            Asap / Api
          </Button>
          <Button
            type="button"
            variant={filterType === "LITTER" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("LITTER")}
            className="h-8 text-xs font-bold uppercase tracking-wider"
          >
            Sampah
          </Button>
          <Button
            type="button"
            variant={filterType === "LOGGING" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType("LOGGING")}
            className="h-8 text-xs font-bold uppercase tracking-wider"
          >
            Perusakan
          </Button>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nomor tiket atau lokasi..."
            className="h-9 pl-9 pr-3 text-xs"
          />
        </div>
      </div>

      {/* Reports Feed */}
      {filteredReports.length === 0 ? (
        <Card className="border-dashed p-12 text-center shadow-none">
          <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">Tidak Ada Laporan yang Cocok</p>
          <p className="text-xs text-muted-foreground mt-1">
            {searchQuery
              ? `Tidak ditemukan laporan dengan kata kunci "${searchQuery}". Coba periksa nomor tiket.`
              : "Belum ada laporan untuk kategori ini saat ini."}
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredReports.map((report) => {
            const status = getStatusBadge(report.status);
            const severity = getSeverityBadge(report.severity);

            return (
              <Card
                key={report.id}
                className="p-5 shadow-sm transition-all hover:border-primary/50 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-black text-foreground tabular-nums tracking-wide">
                      {report.id}
                    </span>
                    <Badge variant={status.variant} className={`text-[11px] font-bold uppercase tracking-wider ${status.cls}`}>
                      {status.label}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={severity.variant} className={`text-[11px] font-semibold uppercase ${severity.cls}`}>
                      Ancaman: {severity.label}
                    </Badge>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground tabular-nums">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      <span>{report.timestamp}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground mb-1">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span>
                      {report.locationDetail} (Jalur {report.trail})
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {report.description}
                  </p>
                </div>

                {report.adminNote && (
                  <div className="rounded-lg bg-muted/50 p-3 border border-border/60 text-xs">
                    <span className="font-bold text-foreground mb-0.5 flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <span>Catatan Posko Balai :</span>
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
