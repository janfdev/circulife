"use client";

import React, { useState, useEffect } from "react";
import ReportForm from "@/components/ReportForm";
import RecentReportsList from "@/components/RecentReportsList";
import { INITIAL_REPORTS } from "@/lib/constants";
import { FireReport } from "@/types";
import { Flame, ShieldAlert, ListFilter, PlusCircle, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LaporPage() {
  const [activeTab, setActiveTab] = useState<string>("FORM");
  const [reports, setReports] = useState<FireReport[]>(INITIAL_REPORTS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ciremai_citizen_reports");
      if (stored) {
        const parsed: FireReport[] = JSON.parse(stored);
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
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div className="space-y-2">
            <Badge variant="destructive" className="gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Sistem Pelaporan Cepat Warga & Pendaki</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
              Lapor Indikasi Karhutla & Ancaman Hutan
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Setiap laporan warga diverifikasi oleh tim regu posko Balai TNGC dan Masyarakat Peduli Api (MPA) untuk penindakan cepat sebelum api membesar.
            </p>
          </div>

          <a
            href="tel:0232613158"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-11 px-5 gap-2 text-xs font-bold shrink-0 self-start md:self-auto rounded-xl border-primary/30")}
          >
            <PhoneCall className="h-4 w-4 text-destructive" aria-hidden="true" />
            <span className="font-mono">Hotline: 0232-613158</span>
          </a>
        </div>

        {/* Tab Controls using shadcn Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 h-12 p-1.5 rounded-xl">
            <TabsTrigger value="FORM" className="gap-2 text-xs font-bold rounded-lg">
              <PlusCircle className="h-4 w-4" aria-hidden="true" />
              <span>Buat Laporan Baru</span>
            </TabsTrigger>
            <TabsTrigger value="LIST" className="gap-2 text-xs font-bold rounded-lg">
              <ListFilter className="h-4 w-4" aria-hidden="true" />
              <span>Pantau Laporan ({reports.length})</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Tab Content */}
        {activeTab === "FORM" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8">
              <ReportForm onReportSubmitted={handleReportSubmitted} />
            </div>

            {/* Sidebar Guide */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 shadow-sm space-y-4 rounded-2xl">
                <CardHeader className="p-0">
                  <CardTitle className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <Flame className="h-4 w-4 text-destructive" aria-hidden="true" />
                    <span>Petunjuk Penting Pelapor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-3 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-primary shrink-0 mt-0.5">1.</span>
                      <span>Prioritaskan keselamatan diri. Segera jauhi arah hembusan angin pembawa asap tebal.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-primary shrink-0 mt-0.5">2.</span>
                      <span>Catat patokan pos terdekat (misal: Pos 3 Arban atau Simpang Palutungan) agar regu ranger cepat menemukan lokasi.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-primary shrink-0 mt-0.5">3.</span>
                      <span>Simpan nomor tiket (contoh: CRG-202611-001) untuk memantau status pemadaman di tab laporan.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Alert className="border-amber-300 bg-amber-500/10 text-amber-900 dark:border-amber-900/60 dark:text-amber-200 p-5 rounded-2xl">
                <AlertDescription className="text-xs sm:text-sm leading-relaxed">
                  <strong className="font-bold block mb-1">Kontak Darurat Alternatif :</strong>
                  Jika jaringan internet terbatas di pegunungan, kirimkan pesan SMS/WhatsApp ke Hotline Posko TNGC di nomor <span className="font-mono font-bold">0812-2200-3078</span>.
                </AlertDescription>
              </Alert>
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
