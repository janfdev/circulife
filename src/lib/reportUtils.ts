import { FireReport, Species, TrailId } from "@/types";

/**
 * Menghasilkan ID unik laporan warga dengan format CRG-YYYYMM-XXX
 */
export function generateReportId(counter: number, date: Date = new Date()): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const seq = String(counter).padStart(3, "0");
  return `CRG-${year}${month}-${seq}`;
}

export interface ReportValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validasi form laporan insiden / indikasi kebakaran
 */
export function validateReportInput(input: Partial<FireReport>): ReportValidationResult {
  const errors: Record<string, string> = {};

  if (!input.reporterName || input.reporterName.trim().length === 0) {
    errors.reporterName = "Nama pelapor wajib diisi";
  }

  if (!input.reporterContact || input.reporterContact.trim().length === 0) {
    errors.reporterContact = "Kontak pelapor wajib diisi";
  } else {
    const cleanPhone = input.reporterContact.replace(/[\s-]/g, "");
    if (!/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
      errors.reporterContact = "Nomor kontak minimal 8 digit angka aktif";
    }
  }

  const validTrails: TrailId[] = ["APUY", "PALUTUNGAN", "LINGGARJATI", "SADAREHE", "NON_TRAIL"];
  if (!input.trail || !validTrails.includes(input.trail)) {
    errors.trail = "Pilih jalur pendakian atau lokasi terkait";
  }

  if (!input.locationDetail || input.locationDetail.trim().length === 0) {
    errors.locationDetail = "Detail lokasi atau patokan pos wajib diisi";
  }

  if (!input.description || input.description.trim().length === 0) {
    errors.description = "Deskripsi kejadian indikasi kebakaran atau ancaman wajib diisi";
  }

  if (input.coordinates) {
    const { lat, lng } = input.coordinates;
    if (typeof lat !== "number" || typeof lng !== "number" || isNaN(lat) || isNaN(lng)) {
      errors.coordinates = "Koordinat harus berupa angka valid";
    } else if (lat < -11 || lat > 6 || lng < 95 || lng > 141) {
      // Diluar rentang Indonesia
      errors.coordinates = "Koordinat harus berada dalam wilayah Indonesia (kawasan Gunung Ciremai)";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filter katalog spesies flora dan fauna
 */
export function filterSpecies(
  list: Species[],
  category: "ALL" | "FAUNA" | "FLORA",
  query: string
): Species[] {
  const q = query.trim().toLowerCase();

  return list.filter((item) => {
    const matchesCategory = category === "ALL" || item.category === category;
    if (!matchesCategory) return false;

    if (!q) return true;

    return (
      item.commonName.toLowerCase().includes(q) ||
      item.scientificName.toLowerCase().includes(q) ||
      item.habitatElevation.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.roleInEcosystem.toLowerCase().includes(q)
    );
  });
}

export type FireRiskCategory = "RENDAH" | "SEDANG" | "TINGGI" | "EKSTREM";

export interface FireRiskEvaluation {
  score: number; // 0 - 100
  level: FireRiskCategory;
  description: string;
  recommendation: string;
}

/**
 * Kalkulasi resiko kebakaran hutan berdasarkan indikator cuaca
 * @param tempCelcius Suhu permukaan lereng (°C)
 * @param humidityPct Kelembapan relatif udara (%)
 * @param windSpeedKmh Kecepatan angin (km/jam)
 */
export function calculateFireRisk(
  tempCelcius: number,
  humidityPct: number,
  windSpeedKmh: number,
  daysWithoutRain: number = 0
): FireRiskEvaluation {
  // Indeks sederhana: Suhu tinggi + Kelembapan rendah + Angin kencang + Kemarau = resiko tinggi
  let score = 20;

  if (tempCelcius > 30) score += 25;
  else if (tempCelcius > 26) score += 15;

  if (humidityPct < 45) score += 35;
  else if (humidityPct < 65) score += 20;

  if (windSpeedKmh > 20) score += 25;
  else if (windSpeedKmh > 12) score += 15;

  if (daysWithoutRain > 14) score += 15;
  else if (daysWithoutRain > 7) score += 10;

  score = Math.min(100, Math.max(0, score));

  if (score >= 75) {
    return {
      score,
      level: "EKSTREM",
      description: "Kondisi vegetasi sangat kering dan angin kencang. Percikan api sekecil apapun dapat memicu karhutla meluas dalam hitungan menit.",
      recommendation: "Pemberlakuan siaga 1. Pembatasan pendakian dan patroli intensif Masyarakat Peduli Api (MPA).",
    };
  }

  if (score >= 50) {
    return {
      score,
      level: "TINGGI",
      description: "Serasah pinus dan semak mengering. Waspadai area punggungan dan savana terbuka.",
      recommendation: "Patroli berkala pos pendakian dan pemeriksaan ketat perlengkapan pendaki (larangan kompor terbuka/rokok).",
    };
  }

  if (score >= 30) {
    return {
      score,
      level: "SEDANG",
      description: "Kondisi kelembapan cukup stabil dengan resiko kebakaran terkendali.",
      recommendation: "Pendakian dibuka normal dengan himbauan standar etika rimba tanpa api.",
    };
  }

  return {
    score,
    level: "RENDAH",
    description: "Tingkat kelembapan tinggi dan suhu sejuk. Potensi penyebaran api sangat rendah.",
    recommendation: "Kondisi aman. Tetap jaga kebersihan jalur dan larangan buang sampah.",
  };
}
