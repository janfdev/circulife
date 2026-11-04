export type ReportSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type ReportStatus = "PENDING" | "VERIFIED" | "INVESTIGATING" | "RESOLVED";
export type IncidentType = "SMOKE" | "ACTIVE_FIRE" | "ILLEGAL_LOGGING" | "LITTER_DUMP" | "OTHER";
export type TrailId = "APUY" | "PALUTUNGAN" | "LINGGARJATI" | "SADAREHE" | "NON_TRAIL";

export interface FireReport {
  id: string; // e.g. "CRG-202611-001"
  reporterName: string;
  reporterContact: string;
  trail: TrailId;
  locationDetail: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  severity: ReportSeverity;
  incidentType: IncidentType;
  description: string;
  imageUrl?: string;
  timestamp: string; // ISO 8601
  status: ReportStatus;
  adminNote?: string;
}

export interface TrailCondition {
  id: TrailId;
  name: string;
  regency: "Kuningan" | "Majalengka";
  lengthKm: number;
  openStatus: "OPEN" | "RESTRICTED" | "CLOSED";
  fireRiskLevel: "RENDAH" | "SEDANG" | "TINGGI" | "EKSTREM";
  elevationRange: string;
  lastUpdated: string;
  notes: string;
}

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
