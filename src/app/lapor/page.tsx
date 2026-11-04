"use client";

import React, { useState, useEffect } from "react";
import ReportForm from "@/components/ReportForm";
import RecentReportsList from "@/components/RecentReportsList";
import { INITIAL_REPORTS } from "@/lib/constants";
import { FireReport, TrailId } from "@/types";
import { Flame, ShieldAlert, ListFilter, PlusCircle, PhoneCall } from "lucide-react";

export default function LaporPage() {
  const [activeTab, setActiveTab] = useState<"FORM" | "LIST">("FORM");
  const [reports, setReports] = useState<FireReport[]>(INITIAL_REPORTS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ciremai_citizen_reports");
      if (stored) {
        const parsed: FireReport[] = JSON.parse(stored);
        // Combine parsed with INITIAL_REPORTS, avoiding duplicates by id
        const ids = new Set(parsed.map((p) => p.id));
        const merged = [...parsed, ...INITIAL_REPORTS.filter((r) => !ids.has(r.id))];
        setReports(merged);
      }
    } catch {
      // Ignore JSON parse errors
    }
  }, []);

  const handleReportSubmitted = (newReport: FireReport) => {
    setReports((prev) => [newReport, ...prev]);
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 mb-2">
              <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Sistem Pelaporan Cepat Warga & Pendaki</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              Lapor Indikasi Karhutla & Ancaman Hutan
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
              Setiap laporan warga diverifikasi oleh tim regu posko Balai TNGC dan Masyarakat Peduli Api (MPA) untuk penindakan cepat sebelum api membesar.
            </p>
          </div>

          <a
            href="tel:0232613158"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-xs font-bold text-foreground hover:bg-muted shrink-0 self-start md:self-auto"
          >
            <PhoneCall className="h-3.5 w-3.5 text-red-600" aria-hidden="true" />
            <span>Hotline Balai: 0232-613158</span>
          </a>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-border gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("FORM")}
            className={`inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === "FORM"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <PlusCircle className="h-4 w-4" aria-hidden="true" />
            <span>Buat Laporan Baru</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("LIST")}
            className={`inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === "LIST"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <ListFilter className="h-4 w-4" aria-hidden="true" />
            <span>Pantau Laporan Masuk ({reports.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "FORM" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <ReportForm onReportSubmitted={handleReportSubmitted} />
            </div>

            {/* Sidebar Guide */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                  <Flame className="h-4 w-4 text-red-600" aria-hidden="true" />
                  <span>Petunjuk Penting Pelapor</span>
                </h2>
                <ul className="text-xs text-muted-foreground space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">1.</span>
                    <span>Prioritaskan keselamatan diri. Segera jauhi arah hembusan angin pembawa asap tebal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">2.</span>
                    <span>Catat patokan pos terdekat (misal: Pos 3 Arban atau Simpang Palutungan) agar regu ranger cepat menemukan lokasi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">3.</span>
                    <span>Simpan nomor tiket (contoh: CRG-202611-001) untuk memantau status pemadaman di tab laporan.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-300 bg-amber-50/60 dark:border-amber-900/60 dark:bg-amber-950/20 p-4">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-200 block mb-1">
                  Kontak Darurat Alternatif
                </span>
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-normal">
                  Jika jaringan internet terbatas di pegunungan, kirimkan pesan SMS/WhatsApp ke Hotline Posko TNGC di nomor <strong className="font-mono">0812-2200-3078</strong>.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <RecentReportsList reports={reports} />
          </div>
        )}
      </div>
    </div>
  );
}
