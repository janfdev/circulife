import { WasteDropReport, CircularProduct, ProductCategory, Species, TrailId, WasteImpactResult } from "@/types";

/**
 * Menghasilkan ID unik tiket setor / laporan dengan format CRG-YYYYMM-XXX
 */
export function generateReportId(
  counter: number,
  date: Date = new Date(),
  prefix: string = "CRG"
): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const seq = String(counter).padStart(3, "0");
  return `${prefix}-${year}${month}-${seq}`;
}

export interface ReportValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validasi form penyetoran sampah dan laporan warga
 */
export function validateReportInput(input: Partial<WasteDropReport>): ReportValidationResult {
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
 * Filter katalog produk olahan daur ulang sampah
 */
export function filterCircularProducts(
  list: CircularProduct[],
  category: "ALL" | ProductCategory = "ALL",
  query: string = ""
): CircularProduct[] {
  const q = (query || "").trim().toLowerCase();

  return list.filter((item) => {
    const matchesCategory = category === "ALL" || item.category === category;
    if (!matchesCategory) return false;

    if (!q) return true;

    return (
      item.name.toLowerCase().includes(q) ||
      item.rawMaterial.toLowerCase().includes(q) ||
      item.producerUnit.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.application.toLowerCase().includes(q)
    );
  });
}

/**
 * Filter katalog spesies flora dan fauna (backward compatibility)
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

/**
 * Kalkulasi dampak sirkular dan nilai pemanfaatan sampah gunung
 * @param plasticKg Berat sampah plastik botol PET & sachet (kg)
 * @param organicKg Berat sampah organik sisa logistik (kg)
 * @param canisterCount Jumlah kaleng gas portabel bekas (buah)
 */
export function calculateWasteImpact(
  plasticKg: number,
  organicKg: number,
  canisterCount: number
): WasteImpactResult {
  const safePlastic = Math.max(0, plasticKg);
  const safeOrganic = Math.max(0, organicKg);
  const safeCanister = Math.max(0, canisterCount);

  // 1 paving block membutuhkan ~1.25 kg cacahan plastik PET/sachet (~25 botol plastik)
  const pavingBlocks = Math.floor(safePlastic * 0.8);

  // 1 kg sampah organik menghasilkan ~0.45 kg pupuk kompos matang
  const compostKg = Number((safeOrganic * 0.45).toFixed(1));

  // 2 kaleng gas menghasilkan 1 unit kompor ultralight atau asbak saku
  const canistersUpcycled = Math.floor(safeCanister / 2);

  // Poin reward (1 kg plastik = 10 poin, 1 kg organik = 5 poin, 1 kaleng = 15 poin)
  const seedlingPoints = Math.floor(safePlastic * 10 + safeOrganic * 5 + safeCanister * 15);

  // Reduksi emisi CO2e (kg)
  const co2SavedKg = Number(
    (safePlastic * 1.82 + safeOrganic * 0.5 + safeCanister * 0.4).toFixed(2)
  );

  // Estimasi nilai ekonomi bagi bank sampah komunitas mitra desa
  const economicValueRp = Math.round(
    safePlastic * 4000 + safeOrganic * 2000 + safeCanister * 3000
  );

  return {
    pavingBlocks,
    compostKg,
    canistersUpcycled,
    seedlingPoints,
    co2SavedKg,
    economicValueRp,
  };
}

export type FireRiskCategory = "RENDAH" | "SEDANG" | "TINGGI" | "EKSTREM";

export interface FireRiskEvaluation {
  score: number; // 0 - 100
  level: FireRiskCategory;
  description: string;
  recommendation: string;
}

/**
 * Kalkulasi resiko kebakaran hutan berdasarkan indikator cuaca (backward compatibility)
 */
export function calculateFireRisk(
  tempCelcius: number,
  humidityPct: number,
  windSpeedKmh: number,
  daysWithoutRain: number = 0
): FireRiskEvaluation {
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
