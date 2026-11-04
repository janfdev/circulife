"use client";

import React, { useState } from "react";
import { FireReport, TrailId, IncidentType, ReportSeverity } from "@/types";
import { validateReportInput, generateReportId } from "@/lib/reportUtils";
import { TRAIL_SEEDS } from "@/lib/constants";
import { Flame, MapPin, AlertCircle, CheckCircle2, Loader2, Navigation, Copy, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface ReportFormProps {
  initialTrail?: TrailId;
  onReportSubmitted?: (report: FireReport) => void;
}

export default function ReportForm({ initialTrail = "PALUTUNGAN", onReportSubmitted }: ReportFormProps) {
  const [formData, setFormData] = useState({
    reporterName: "",
    reporterContact: "",
    trail: initialTrail,
    locationDetail: "",
    incidentType: "SMOKE" as IncidentType,
    severity: "MEDIUM" as ReportSeverity,
    description: "",
    lat: "",
    lng: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReport, setSubmittedReport] = useState<FireReport | null>(null);
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

    const payload: Partial<FireReport> = {
      reporterName: formData.reporterName,
      reporterContact: formData.reporterContact,
      trail: formData.trail,
      locationDetail: formData.locationDetail,
      incidentType: formData.incidentType,
      severity: formData.severity,
      description: formData.description,
      coordinates: coords,
    };

    const validation = validateReportInput(payload);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    // Generate Ticket ID
    const randomCounter = Math.floor(Math.random() * 800) + 100;
    const reportId = generateReportId(randomCounter);

    const completeReport: FireReport = {
      id: reportId,
      reporterName: formData.reporterName.trim(),
      reporterContact: formData.reporterContact.trim(),
      trail: formData.trail,
      locationDetail: formData.locationDetail.trim(),
      coordinates: coords,
      severity: formData.severity,
      incidentType: formData.incidentType,
      description: formData.description.trim(),
      timestamp: new Date().toISOString(),
      status: "PENDING",
      adminNote: "Laporan masuk ke sistem posko. Menunggu verifikasi petugas regu jaga.",
    };

    // Save to LocalStorage
    try {
      const existing = localStorage.getItem("ciremai_citizen_reports");
      const list: FireReport[] = existing ? JSON.parse(existing) : [];
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
      incidentType: "SMOKE",
      severity: "MEDIUM",
      description: "",
      lat: "",
      lng: "",
    });
    setErrors({});
  };

  if (submittedReport) {
    return (
      <Card className="border-emerald-300 bg-emerald-50/80 p-6 sm:p-8 dark:border-emerald-900/60 dark:bg-emerald-950/30 text-foreground shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-emerald-950 dark:text-emerald-100">
              Laporan Berhasil Dikirim ke Posko TNGC
            </h2>
            <p className="text-xs text-emerald-800 dark:text-emerald-300">
              Data insiden telah dicatat dalam sistem penanganan darurat lapangan.
            </p>
          </div>
        </div>

        <Card className="my-6 border-emerald-200 bg-white p-5 dark:border-emerald-900 dark:bg-card">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
            Nomor Tiket Pelaporan
          </span>
          <div className="flex items-center justify-between gap-3">
            <span className="text-2xl sm:text-3xl font-black text-foreground tabular-nums tracking-wider">
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

          <div className="mt-4 pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-muted-foreground block">Pelapor :</span>
              <span className="font-semibold">{submittedReport.reporterName}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Lokasi Insiden :</span>
              <span className="font-semibold">{submittedReport.locationDetail} (Jalur {submittedReport.trail})</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Tipe Kejadian :</span>
              <span className="font-semibold">{submittedReport.incidentType}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Status Awal :</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">Menunggu Verifikasi Posko</span>
            </div>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            onClick={handleResetForm}
            className="h-11 px-5 text-sm font-bold shadow-sm"
          >
            Buat Laporan Baru
          </Button>
          <a
            href="tel:0232613158"
            className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5 text-sm font-bold")}
          >
            Konfirmasi Telepon Posko (0232-613158)
          </a>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8 shadow-sm">
      <CardHeader className="p-0 mb-6 pb-4 border-b border-border space-y-1">
        <div className="mb-1">
          <Badge variant="destructive" className="gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Formulir Cepat Siaga Karhutla</span>
          </Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-black text-foreground">
          Kirimkan Laporan Indikasi Asap atau Bahaya Hutan
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground">
          Laporan Anda langsung diteruskan ke regu Masyarakat Peduli Api (MPA) dan petugas piket Balai TNGC terdekat.
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
              placeholder="Contoh: Rian Anggara (Pendaki)"
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

        {/* Row 2: Trail & Incident Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="trail" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Jalur Pendakian / Lokasi <span className="text-destructive">*</span>
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
            <label htmlFor="incidentType" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Jenis Kejadian
            </label>
            <select
              id="incidentType"
              value={formData.incidentType}
              onChange={(e) => setFormData({ ...formData, incidentType: e.target.value as IncidentType })}
              className="w-full h-11 rounded-lg border border-input bg-transparent px-3.5 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="SMOKE" className="bg-popover text-popover-foreground">Kepulan Asap Mencurigakan</option>
              <option value="ACTIVE_FIRE" className="bg-popover text-popover-foreground">Titik Api Berkobar Aktif</option>
              <option value="LITTER_DUMP" className="bg-popover text-popover-foreground">Penumpukan Sampah / Kaleng Gas</option>
              <option value="ILLEGAL_LOGGING" className="bg-popover text-popover-foreground">Perusakan Hutan / Penebangan Liar</option>
              <option value="OTHER" className="bg-popover text-popover-foreground">Kejadian Lingkungan Lainnya</option>
            </select>
          </div>
        </div>

        {/* Row 3: Severity & Location detail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="locationDetail" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Patokan Lokasi Spesifik <span className="text-destructive">*</span>
            </label>
            <Input
              id="locationDetail"
              type="text"
              value={formData.locationDetail}
              onChange={(e) => setFormData({ ...formData, locationDetail: e.target.value })}
              placeholder="Contoh: Antara Pos 3 dan Pos 4 Kandang Badak"
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
            <label htmlFor="severity" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              Perkiraan Tingkat Ancaman
            </label>
            <select
              id="severity"
              value={formData.severity}
              onChange={(e) => setFormData({ ...formData, severity: e.target.value as ReportSeverity })}
              className="w-full h-11 rounded-lg border border-input bg-transparent px-3.5 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="LOW" className="bg-popover text-popover-foreground">Rendah (Sampah / Asap Dingin Sisa)</option>
              <option value="MEDIUM" className="bg-popover text-popover-foreground">Sedang (Asap Aktif dari Semak Terisolasi)</option>
              <option value="HIGH" className="bg-popover text-popover-foreground">Tinggi (Api Membakar Vegetasi Luas)</option>
              <option value="CRITICAL" className="bg-popover text-popover-foreground">Kritis (Api Merambat Cepat ke Arah Tenda/Jalur)</option>
            </select>
          </div>
        </div>

        {/* Row 4: Coordinates (Optional with GPS helper) */}
        <Card className="p-4 border-border/80 bg-muted/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Koordinat GPS (Opsional)</span>
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
            Deskripsi Kejadian Lapangan <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="description"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Jelaskan perkiraan luas area, warna asap, arah hembusan angin, dan vegetasi yang terbakar (pinus, ilalang, cantigi)..."
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
            variant="destructive"
            className="w-full h-12 gap-2 text-sm font-bold shadow-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Memproses Laporan...</span>
              </>
            ) : (
              <>
                <Flame className="h-4 w-4" aria-hidden="true" />
                <span>Kirim Laporan Darurat ke Posko</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
