"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";
import RecentReportsList from "@/components/RecentReportsList";
import { INITIAL_REPORTS, TRAIL_SEEDS } from "@/lib/constants";
import { WasteDropReport } from "@/types";
import { Recycle, PackageCheck, ListFilter, PlusCircle, PhoneCall, Sprout, ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LaporPage() {
  const [activeTab, setActiveTab] = useState<string>("FORM");
  const [reports, setReports] = useState<WasteDropReport[]>(INITIAL_REPORTS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("circulife_citizen_reports");
      if (stored) {
        const parsed: WasteDropReport[] = JSON.parse(stored);
        const ids = new Set(parsed.map((p) => p.id));
        const merged = [...parsed, ...INITIAL_REPORTS.filter((r) => !ids.has(r.id))];
        setReports(merged);
      }
    } catch {
      // Ignore JSON parse errors
    }
  }, []);

  const handleReportSubmitted = (newReport: WasteDropReport) => {
    setReports((prev) => [newReport, ...prev]);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/70 pb-8">
          <div className="space-y-3">
            <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30 rounded-full">
              <Recycle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Sistem Penyetoran &amp; Verifikasi Sirkular (TITO)</span>
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Setor Sampah Terpilah &amp; Klaim Reward Lingkungan
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Catat sampah anorganik dan organik bawaan Anda untuk disetorkan ke drop-point terdekat. Dapatkan tiket verifikasi digital untuk ditukar bibit pohon atau poin komunitas.
            </p>
          </div>

          <a
            href="tel:081299002026"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-10 px-5 gap-2 text-xs font-mono font-bold shrink-0 self-start md:self-auto rounded-full border-border/80 text-foreground hover:bg-muted")}
          >
            <PhoneCall className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Hotline: 0812-9900-2026</span>
          </a>
        </div>

        {/* Tab Controls using shadcn Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 h-11 p-1 rounded-full border border-border/80 bg-muted/60">
            <TabsTrigger value="FORM" className="gap-2 text-xs font-bold rounded-full">
              <PlusCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Setor Sampah Baru</span>
            </TabsTrigger>
            <TabsTrigger value="LIST" className="gap-2 text-xs font-bold rounded-full">
              <ListFilter className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Riwayat Setoran ({reports.length})</span>
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
              <Card className="p-6 shadow-sm space-y-4 rounded-2xl border-border bg-card">
                <CardHeader className="p-0">
                  <CardTitle className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2 font-mono">
                    <PackageCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>Alur Penukaran Sampah</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-3 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold font-mono text-primary shrink-0 mt-0.5">1.</span>
                      <span>Kemas rapi botol plastik PET kosong dan kosongkan sisa gas dari kaleng kompor lapangan.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold font-mono text-primary shrink-0 mt-0.5">2.</span>
                      <span>Timbang kantong sampah di timbangan digital posko registrasi jalur turun Anda.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold font-mono text-primary shrink-0 mt-0.5">3.</span>
                      <span>Tunjukkan tiket digital formulir ini kepada petugas drop-point untuk menukar poin atau mengambil bibit pohon siap tanam.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Alert className="border-emerald-300 bg-emerald-500/10 text-emerald-950 dark:border-emerald-900/60 dark:text-emerald-200 p-5 rounded-2xl">
                <Sprout className="h-5 w-5 text-emerald-600 mb-1" />
                <AlertDescription className="text-xs sm:text-sm leading-relaxed">
                  <strong className="font-bold block mb-1">Gerakan 1 Setoran 1 Pohon :</strong>
                  Setiap setoran minimal 2 kg botol plastik atau 5 kaleng gas berhak mendapatkan 1 bibit pohon penghijauan binaan CircuLife.
                </AlertDescription>
              </Alert>

              {/* Drop-Point Hub Quick Reference */}
              <Card className="p-5 shadow-sm space-y-3 rounded-2xl border-border bg-card">
                <CardHeader className="p-0">
                  <CardTitle className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center justify-between font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <span>Posko Drop-Point Terdekat</span>
                    </span>
                    <Link href="/pantau" className="text-[11px] text-primary hover:underline font-mono">
                      Pantau Status
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-2 pt-1 font-mono text-xs">
                  {TRAIL_SEEDS.map((t) => (
                    <div key={t.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/40 border border-border/50">
                      <div>
                        <span className="font-bold text-foreground block text-[11px]">{t.name}</span>
                        <span className="text-[10px] text-muted-foreground">{t.regency}</span>
                      </div>
                      <Badge variant="outline" className="text-[9px] px-1.5 py-0.5 border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold uppercase">
                        {t.dropPointStatus === "SIAP_TERIMA" ? "Siap Terima" : "Distribusi"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
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
