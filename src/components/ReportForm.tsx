"use client";

import React, { useState } from "react";
import { WasteDropReport, TrailId, WasteCategory, CircularTargetProduct } from "@/types";
import { validateReportInput, generateReportId } from "@/lib/reportUtils";
import { TRAIL_SEEDS } from "@/lib/constants";
import { Recycle, PackageCheck, MapPin, AlertCircle, CheckCircle2, Loader2, Navigation, Copy, Check, Sprout, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface ReportFormProps {
  initialTrail?: TrailId;
  onReportSubmitted?: (report: WasteDropReport) => void;
}

export default function ReportForm({ initialTrail = "PALUTUNGAN", onReportSubmitted }: ReportFormProps) {
  const [formData, setFormData] = useState({
    reporterName: "",
    reporterContact: "",
    trail: initialTrail,
    locationDetail: "",
    wasteCategory: "PLASTIC_PET" as WasteCategory,
    weightKg: "2.5",
    canisterCount: "2",
    targetProduct: "PAVING_BLOCK" as CircularTargetProduct,
    rewardChoice: "SEEDLING" as "SEEDLING" | "COMMUNITY_POINTS" | "BADGE_CERTIFICATE",
    description: "",
    lat: "",
    lng: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReport, setSubmittedReport] = useState<WasteDropReport | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [copiedTicket, setCopiedTicket] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Browser Anda tidak mendukung deteksi lokasi otomatis");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        setFormData((prev) => ({
          ...prev,
          lat: pos.coords.latitude.toFixed(6),
          lng: pos.coords.longitude.toFixed(6),
        }));
      },
      (err) => {
        setIsLocating(false);
        alert(`Gagal mengambil koordinat: ${err.message}`);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const coords =
      formData.lat && formData.lng
        ? { lat: parseFloat(formData.lat), lng: parseFloat(formData.lng) }
        : undefined;

    const parsedWeight = parseFloat(formData.weightKg) || 1.0;
    const parsedCanisters = parseInt(formData.canisterCount, 10) || 0;

    const payload: Partial<WasteDropReport> = {
      reporterName: formData.reporterName,
      reporterContact: formData.reporterContact,
      trail: formData.trail,
      locationDetail: formData.locationDetail,
      wasteCategory: formData.wasteCategory,
      weightKg: parsedWeight,
      canisterCount: parsedCanisters,
      targetProduct: formData.targetProduct,
      rewardChoice: formData.rewardChoice,
      description: formData.description,
      coordinates: coords,
    };

    const validation = validateReportInput(payload);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    // Generate Ticket ID matching CRG-YYYYMM-XXX
    const randomCounter = Math.floor(Math.random() * 800) + 100;
    const reportId = generateReportId(randomCounter);

    const completeReport: WasteDropReport = {
      id: reportId,
      reporterName: formData.reporterName.trim(),
      reporterContact: formData.reporterContact.trim(),
      trail: formData.trail,
      locationDetail: formData.locationDetail.trim(),
      coordinates: coords,
      wasteCategory: formData.wasteCategory,
      weightKg: parsedWeight,
      canisterCount: parsedCanisters,
      targetProduct: formData.targetProduct,
      rewardChoice: formData.rewardChoice,
      description: formData.description.trim(),
      timestamp: new Date().toISOString(),
      status: "VERIFIED",
      adminNote: "Setoran sampah telah diverifikasi di pos registrasi. Dialokasikan ke unit daur ulang desa.",
    };

    // Save to LocalStorage
    try {
      const existing = localStorage.getItem("ciremai_citizen_reports");
      const list: WasteDropReport[] = existing ? JSON.parse(existing) : [];
      list.unshift(completeReport);
      localStorage.setItem("ciremai_citizen_reports", JSON.stringify(list));
    } catch {
      // LocalStorage fallback
    }

    setSubmittedReport(completeReport);
    setIsSubmitting(false);

    if (onReportSubmitted) {
      onReportSubmitted(completeReport);
    }
  };

  const handleCopyTicket = () => {
    if (!submittedReport) return;
    navigator.clipboard.writeText(submittedReport.id);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2000);
  };

  const handleResetForm = () => {
    setSubmittedReport(null);
    setFormData({
      reporterName: "",
      reporterContact: "",
      trail: initialTrail,
      locationDetail: "",
      wasteCategory: "PLASTIC_PET",
      weightKg: "2.5",
      canisterCount: "2",
      targetProduct: "PAVING_BLOCK",
      rewardChoice: "SEEDLING",
      description: "",
      lat: "",
      lng: "",
    });
    setErrors({});
  };

  if (submittedReport) {
    return (
      <Card className="border-emerald-300 bg-emerald-50/80 p-6 sm:p-8 dark:border-emerald-900/60 dark:bg-emerald-950/30 text-foreground shadow-sm rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-emerald-950 dark:text-emerald-100">
              Setoran Sampah Berhasil Diverifikasi di Posko TNGC
            </h2>
            <p className="text-xs text-emerald-800 dark:text-emerald-300">
              Data sampah terpilah telah dicatat dalam sistem sirkularitas TITO Ciremai Guard.
            </p>
          </div>
        </div>

        <Card className="my-6 border-emerald-200 bg-white p-5 dark:border-emerald-900 dark:bg-card rounded-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
            Nomor Tiket Penyetoran & Daur Ulang
          </span>
          <div className="flex items-center justify-between gap-3">
            <span className="text-2xl sm:text-3xl font-black text-foreground tabular-nums tracking-wider font-mono">
              {submittedReport.id}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopyTicket}
              className="gap-1.5 text-xs font-bold"
            >
              {copiedTicket ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  <span>Salin Tiket</span>
                </>
              )}
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div>
              <span className="text-muted-foreground block">Penyetor / Pendaki :</span>
              <span className="font-semibold text-foreground">{submittedReport.reporterName}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Pos Registrasi :</span>
              <span className="font-semibold text-foreground">Jalur {submittedReport.trail}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Kategori Sampah :</span>
              <span className="font-semibold text-foreground">{submittedReport.wasteCategory} ({submittedReport.weightKg} kg)</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Reward Diterima :</span>
              <span className="font-bold text-primary flex items-center gap-1">
                <Sprout className="h-3.5 w-3.5" />
                <span>Bibit Pohon Saninten Siap Tanam</span>
              </span>
            </div>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            onClick={handleResetForm}
            className="h-11 px-5 text-sm font-bold shadow-sm"
          >
            Setor Sampah Lagi
          </Button>
          <a
            href="tel:0232613158"
            className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5 text-sm font-bold")}
          >
            Hubungi Koordinator Posko (0232-613158)
          </a>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8 shadow-sm rounded-2xl border-border/80">
      <CardHeader className="p-0 mb-6 pb-4 border-b border-border space-y-1">
        <div className="mb-1">
          <Badge variant="outline" className="gap-1.5 px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
            <Recycle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Formulir Penyetoran & Daur Ulang Sampah</span>
          </Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-black text-foreground">
          Catat & Tukar Sampah Terpilah Gunung Ciremai
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Setiap botol plastik, kaleng gas, dan sisa makanan yang Anda bawa turun ditimbang di pos registrasi dan dikonversi menjadi bibit pohon atau paving block komunitas.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Reporter Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="reporterName" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Nama Pelapor <span className="text-destructive">*</span>
            </label>
            <Input
              id="reporterName"
              type="text"
              value={formData.reporterName}
              onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
              placeholder="Contoh: Ahmad Dahlan (Pendaki)"
              aria-invalid={!!errors.reporterName}
              className={`h-11 ${errors.reporterName ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.reporterName && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.reporterName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="reporterContact" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Nomor Kontak Aktif (WA/HP) <span className="text-destructive">*</span>
            </label>
            <Input
              id="reporterContact"
              type="tel"
              value={formData.reporterContact}
              onChange={(e) => setFormData({ ...formData, reporterContact: e.target.value })}
              placeholder="081234567890"
              aria-invalid={!!errors.reporterContact}
              className={`h-11 tabular-nums ${errors.reporterContact ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.reporterContact && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.reporterContact}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Trail & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="trail" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Jalur Pendakian / Posko <span className="text-destructive">*</span>
            </label>
            <select
              id="trail"
              value={formData.trail}
              onChange={(e) => setFormData({ ...formData, trail: e.target.value as TrailId })}
              className="w-full h-11 rounded-lg border border-input bg-transparent px-3.5 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {TRAIL_SEEDS.map((t) => (
                <option key={t.id} value={t.id} className="bg-popover text-popover-foreground">
                  {t.name} (Kab. {t.regency})
                </option>
              ))}
              <option value="NON_TRAIL" className="bg-popover text-popover-foreground">
                Di luar jalur pendakian resmi (Kawasan Rimba Lain)
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="wasteCategory" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Kategori Sampah Terpilah
            </label>
            <select
              id="wasteCategory"
              value={formData.wasteCategory}
              onChange={(e) => setFormData({ ...formData, wasteCategory: e.target.value as WasteCategory })}
              className="w-full h-11 rounded-lg border border-input bg-transparent px-3.5 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="PLASTIC_PET" className="bg-popover text-popover-foreground">Botol Plastik PET & Kemasan Sachet</option>
              <option value="GAS_CANISTER" className="bg-popover text-popover-foreground">Kaleng Gas Portabel Bekas</option>
              <option value="ORGANIC" className="bg-popover text-popover-foreground">Sampah Organik Sisa Makanan Logistik</option>
              <option value="MIXED_ANORGANIC" className="bg-popover text-popover-foreground">Limbah Anorganik Campur Lainnya</option>
            </select>
          </div>
        </div>

        {/* Row 3: Weight, Target Product & Location detail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="locationDetail" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Patokan Lokasi Asal Sampah <span className="text-destructive">*</span>
            </label>
            <Input
              id="locationDetail"
              type="text"
              value={formData.locationDetail}
              onChange={(e) => setFormData({ ...formData, locationDetail: e.target.value })}
              placeholder="Contoh: Shelter Pos 3 Arban / Pos 4"
              aria-invalid={!!errors.locationDetail}
              className={`h-11 ${errors.locationDetail ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.locationDetail && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.locationDetail}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="targetProduct" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Target Pemanfaatan Daur Ulang
            </label>
            <select
              id="targetProduct"
              value={formData.targetProduct}
              onChange={(e) => setFormData({ ...formData, targetProduct: e.target.value as CircularTargetProduct })}
              className="w-full h-11 rounded-lg border border-input bg-transparent px-3.5 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="PAVING_BLOCK" className="bg-popover text-popover-foreground">Eco-Paving Block Jalan Setapak Desa</option>
              <option value="UPCYCLED_METAL" className="bg-popover text-popover-foreground">Tungku Ultralight & Asbak Kaleng Gas</option>
              <option value="COMPOST" className="bg-popover text-popover-foreground">Kompos Organik Persemaian Saninten</option>
              <option value="ECO_SOUVENIR" className="bg-popover text-popover-foreground">Tas Etnik Anyaman Sachet Ciremai</option>
            </select>
          </div>
        </div>

        {/* Row 4: Coordinates (Optional with GPS helper) */}
        <Card className="p-4 border-border/80 bg-muted/30 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Koordinat GPS Lokasi Temuan (Opsional)</span>
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleGetLocation}
              disabled={isLocating}
              className="h-8 gap-1.5 text-xs font-bold"
            >
              {isLocating ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Mendeteksi Lokasi...</span>
                </>
              ) : (
                <>
                  <Navigation className="h-3.5 w-3.5 text-primary" />
                  <span>Ambil GPS Saya</span>
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              step="any"
              value={formData.lat}
              onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
              placeholder="Latitude (cth: -6.8921)"
              className="h-9 text-xs tabular-nums"
            />
            <Input
              type="number"
              step="any"
              value={formData.lng}
              onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
              placeholder="Longitude (cth: 108.4012)"
              className="h-9 text-xs tabular-nums"
            />
          </div>
          {errors.coordinates && (
            <p className="mt-1.5 text-xs text-destructive">{errors.coordinates}</p>
          )}
        </Card>

        {/* Row 5: Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
            Deskripsi Kejadian / Rincian Sampah Terpilah <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="description"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Jelaskan jenis sampah yang disetorkan (cth: 15 botol PET 600ml, 2 kaleng gas kompor kosong, sampah bersih tanpa sisa cairan)..."
            aria-invalid={!!errors.description}
            className={`min-h-24 ${errors.description ? "border-destructive focus-visible:ring-destructive" : ""}`}
          />
          {errors.description && (
            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.description}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 gap-2 text-sm font-bold shadow-sm bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Memproses Verifikasi Sampah...</span>
              </>
            ) : (
              <>
                <PackageCheck className="h-4 w-4" aria-hidden="true" />
                <span>Kirim Laporan Darurat & Setor Sampah</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
