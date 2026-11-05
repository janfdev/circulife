export type WasteCategory = "PLASTIC_PET" | "GAS_CANISTER" | "ORGANIC" | "MIXED_ANORGANIC";
export type WasteSubmissionStatus = "SUBMITTED" | "VERIFIED" | "PROCESSED" | "REDEEMED";
export type TrailId = "APUY" | "PALUTUNGAN" | "LINGGARJATI" | "SADAREHE" | "NON_TRAIL";
export type CircularTargetProduct = "PAVING_BLOCK" | "COMPOST" | "UPCYCLED_METAL" | "ECO_SOUVENIR";

export interface WasteDropReport {
  id: string; // e.g. "CLC-DROP-202611-001"
  reporterName: string;
  reporterContact: string;
  trail: TrailId;
  locationDetail: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  wasteCategory: WasteCategory;
  weightKg: number;
  canisterCount?: number;
  targetProduct: CircularTargetProduct;
  rewardChoice: "SEEDLING" | "COMMUNITY_POINTS" | "BADGE_CERTIFICATE";
  description: string;
  imageUrl?: string;
  timestamp: string; // ISO 8601
  status: WasteSubmissionStatus | ReportStatus;
  adminNote?: string;
  incidentType?: IncidentType;
  severity?: ReportSeverity;
}

// Backward compatibility alias for FireReport
export type FireReport = WasteDropReport;
export type ReportSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type ReportStatus = "PENDING" | "VERIFIED" | "INVESTIGATING" | "RESOLVED";
export type IncidentType = "SMOKE" | "ACTIVE_FIRE" | "ILLEGAL_LOGGING" | "LITTER_DUMP" | "OTHER";

export type DropPointStatus = "SIAP_TERIMA" | "PENGIRIMAN_PENGOLAH" | "PENUH";

export interface TrailCondition {
  id: TrailId;
  name: string;
  regency: "Kuningan" | "Majalengka" | string;
  lengthKm: number;
  openStatus: "OPEN" | "RESTRICTED" | "CLOSED";
  fireRiskLevel?: "RENDAH" | "SEDANG" | "TINGGI" | "EKSTREM";
  dropPointStatus: DropPointStatus;
  wasteCapacityKg: number;
  wasteCollectedKg: number;
  partnerUnit: string;
  elevationRange: string;
  lastUpdated: string;
  notes: string;
}

export type ProductCategory = "PAVING" | "COMPOST" | "UPCYCLING" | "CRAFT";

export interface CircularProduct {
  id: string;
  name: string;
  category: ProductCategory;
  rawMaterial: string;
  producerUnit: string;
  impactMetric: string;
  pointsRequired: number;
  priceEstimateRp: number;
  description: string;
  application: string;
  imageUrl?: string;
}

// Alur Pemanfaatan Sampah Types
export interface WasteFlowStage {
  step: number;
  title: string;
  subtitle: string;
  iconName: string;
  badgeText: string;
  description: string;
  inputMaterials: string[];
  transformationProcess: string;
  outputProducts: string[];
  impactMetric: string;
  communityBenefit: string;
}

// Artikel & Galeri Types
export interface ArticleItem {
  id: string;
  title: string;
  slug?: string;
  category: "ZERO_WASTE" | "DAUR_ULANG" | "INOVASI" | "KOMUNITAS" | "PANDUAN" | "TEKNOLOGI" | "ORGANIK" | "UPCYCLING" | string;
  author: string;
  readTime: string;
  date: string;
  summary: string;
  content: string | string[];
  keyTakeaways?: string[];
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "BEFORE_AFTER" | "PRODUKSI" | "AKSI_WARGA" | "PRODUK_JADI" | "TRANSFORMASI" | "BIOKONVERSI" | "UPCYCLING" | "LOGISTIK" | "DAMPAK" | string;
  location?: string;
  description: string;
  beforeState?: string;
  afterState?: string;
  impactResult?: string;
  partnerName?: string;
  imageUrl?: string;
  wasteTransformed?: string;
}

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
  category?: "SETOR" | "POIN" | "PRODUK" | "KEMITRAAN" | string;
}

// Backward compatibility for Species interface
export type SpeciesCategory = "FAUNA" | "FLORA";
export type ConservationStatus = "CRITICAL" | "ENDANGERED" | "VULNERABLE" | "PROTECTED";

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  conservationStatus: ConservationStatus;
  habitatElevation: string;
  description: string;
  roleInEcosystem: string;
  dietOrHabit: string;
  threats: string;
  imageUrl?: string;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  agency: string;
  role: string;
  phone: string;
  whatsapp?: string;
  location: string;
  availableHours: string;
}

export interface WasteImpactResult {
  pavingBlocks: number;
  compostKg: number;
  canistersUpcycled: number;
  seedlingPoints: number;
  co2SavedKg: number;
  economicValueRp: number;
}
