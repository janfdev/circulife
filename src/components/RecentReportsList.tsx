"use client";

import React, { useState } from "react";
import { FireReport, IncidentType } from "@/types";
import { Flame, MapPin, Clock, Search, ShieldCheck, AlertCircle, FileText } from "lucide-react";

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
          cls: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
        };
      case "INVESTIGATING":
        return {
          label: "Investigasi Lapangan",
          cls: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
        };
      case "VERIFIED":
        return {
          label: "Terverifikasi / Ditangani",
          cls: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
        };
      case "RESOLVED":
        return {
          label: "Selesai / Terkendali",
          cls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
        };
    }
  };

  const getSeverityBadge = (severity: FireReport["severity"]) => {
    switch (severity) {
      case "LOW":
        return { label: "Rendah", cls: "text-muted-foreground bg-muted" };
      case "MEDIUM":
        return { label: "Sedang", cls: "text-amber-800 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-300" };
      case "HIGH":
        return { label: "Tinggi", cls: "text-red-700 bg-red-50 dark:bg-red-950/40 dark:text-red-300" };
      case "CRITICAL":
        return { label: "Kritis", cls: "text-white bg-red-600 font-bold" };
    }
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-muted/60 border border-border">
          <button
            type="button"
            onClick={() => setFilterType("ALL")}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
              filterType === "ALL" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Semua Laporan ({reports.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType("FIRE")}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
              filterType === "FIRE" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Asap / Api
          </button>
          <button
            type="button"
            onClick={() => setFilterType("LITTER")}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
              filterType === "LITTER" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sampah
          </button>
          <button
            type="button"
            onClick={() => setFilterType("LOGGING")}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
              filterType === "LOGGING" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Perusakan
          </button>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nomor tiket atau lokasi..."
            className="w-full h-9 rounded-lg border border-border bg-background pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Reports Feed */}
      {filteredReports.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">Tidak Ada Laporan yang Cocok</p>
          <p className="text-xs text-muted-foreground mt-1">
            {searchQuery
              ? `Tidak ditemukan laporan dengan kata kunci "${searchQuery}". Coba periksa nomor tiket.`
              : "Belum ada laporan untuk kategori ini saat ini."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredReports.map((report) => {
            const status = getStatusBadge(report.status);
            const severity = getSeverityBadge(report.severity);

            return (
              <div
                key={report.id}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-black text-foreground tabular-nums tracking-wide">
                      {report.id}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${status.cls}`}>
                      {status.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${severity.cls}`}>
                      Ancaman: {severity.label}
                    </span>
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
                  <div className="rounded-lg bg-muted/40 p-3 border border-border/60 text-xs">
                    <span className="font-bold text-foreground block mb-0.5 flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <span>Catatan Posko Balai :</span>
                    </span>
                    <p className="text-muted-foreground leading-normal">{report.adminNote}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
