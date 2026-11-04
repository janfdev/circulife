# CIREMAI GUARD: Digital Forest Protection & Environmental Awareness Platform
## System Architecture & Technical Design Specification

- **Date**: 2026-11-04
- **Project**: CIREMAI GUARD
- **Workspace**: `D:/KERJAAN/ciremai-guard`
- **Subtheme**: Kampanye Peduli Lingkungan (Kawasan Konservasi Taman Nasional Gunung Ciremai)
- **Status**: Draft Spec (Awaiting User Review)

---

## 1. Problem Statement & Mission

Kawasan Taman Nasional Gunung Ciremai (TNGC) dengan puncak 3.078 mdpl di Jawa Barat kerap menghadapi ancaman kebakaran hutan dan lahan (karhutla), perburuan liar, dan penumpukan sampah di jalur pendakian saat musim kemarau.

**CIREMAI GUARD** hadir sebagai platform web responsif yang menjembatani masyarakat, pendaki, dan relawan konservasi dengan informasi faktual dan instrumen partisipasi digital:
1. **Edukasi Mitigasi & Kesiapsiagaan Karhutla**: Panduan interaktif, SOP pendakian tanpa api, dan pemahaman zona rawan.
2. **Citizen Fire & Threat Reporting (Lapor Cepat Warga)**: Pelaporan indikasi kepulan asap, titik api, atau perusakan hutan berbasis koordinat jalur resmi dengan verifikasi status tiket.
3. **Dokumentasi & Ensiklopedia Ekosistem**: Katalog spesies kunci endemik (Elang Jawa, Macan Tutul Jawa, Surili) dan data zonasi TNGC.
4. **Sentra Kampanye & Aksi Relawan**: Kanal pendaftaran kegiatan bersih jalur, adopsi pohon, dan pemulihan vegetasi lereng.

---

## 2. Technical Stack & Constraints

- **Framework**: Next.js 15+ (App Router) + React 19
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS v4 / v3.4 + Radix UI primitives / Lucide Icons terpilih
- **Data Persistence (Phase 1 MVP)**:
  - Client state + Browser LocalStorage persistence (idempotent, offline-resilient).
  - Next.js Route Handlers (`/api/reports`, `/api/hotspots`, `/api/campaigns`) untuk standarisasi kontrak payload JSON.
- **Quality & Accessibility Standards**:
  - WCAG AA (Minimum contrast 4.5:1 untuk normal text, 3:1 untuk large text).
  - Keyboard navigation (Tab index, focus visible outline, Escape to close modals).
  - Anti-slop conformance (Tanpa karakter em-dash, tanpa fake statistics, tanpa kontrol mati/dead buttons).
  - Tabular numbers (`tabular-nums`) untuk koordinat, elevasi, dan metrik lingkungan.

---

## 3. Visual Identity & Design System (Anti-slop Dials)

### 3.1 Design Read
- **Tone**: Rugged modern conservation editorial, authoritative, calm civic protection.
- **Dials**:
  - `ENERGY`: 2 (Balanced - palette alam yang membumi dengan aksen sinyal peringatan api yang tegas).
  - `RHYTHM`: 2 (Terstruktur rapi antar section, kontras visual jelas antara artikel edukasi dan modul laporan darurat).
  - `MOTION`: 1 (Transisi halus pada interaksi tab, filter, dan dialog modal; tanpa animasi mengambang/floating tanpa tujuan).

### 3.2 Color System
- **Forest Charcoal (Base Dark)**: `#0C1410` (Surface dark `#14201A`, Border `#22332A`)
- **Parchment Eco (Base Light)**: `#F7F9F6` (Surface light `#FFFFFF`, Border `#E2E8F0`)
- **Canopy Emerald (Primary)**: `#1B4D3E` (Light accent `#2D7D66`)
- **Signal Flame (Alert Accent)**: `#DC2626` (Danger/Fire), `#D97706` (Warning/Smoldering)
- **Soil Muted (Secondary)**: `#64748B` (Subtext), `#94A3B8` (Muted labels)

---

## 4. Module Decomposition & Information Architecture

```
/
├── / (Home / Landing Page)
│   ├── Hero Section (Status Siaga Karhutla, Elevasi 3.078 mdpl, Call to Action: Lapor atau Pelajari)
│   ├── Jalur Pendakian Status Board (Apuy, Palutungan, Linggarjati, Sadarehe)
│   ├── Interactive Threat Level Meter (Indeks Potensi Kebakaran Terkini)
│   ├── Edukasi Singkat & SOP Rimba
│   └── Aksi Nyata Peduli Lingkungan (Callout Relawan & Adopsi Pohon)
├── /lapor (Citizen Fire & Hazard Reporting)
│   ├── Form Pelaporan Terstruktur (Nama pelapor, kontak, jalur pendakian/koordinat, tingkat keparahan, deskripsi, upload foto)
│   ├── Interactive Coordinate/Jalur Selector
│   ├── Tracking Tiket Pelaporan (Cek status laporan via ID unik: DITERIMA, DIVERIFIKASI, DITINDAKLANJUTI, SELESAI)
│   └── Riwayat Laporan Terkini (Daftar laporan warga yang telah divalidasi)
├── /edukasi (Fire Mitigation & Environmental Education)
│   ├── Panduan 5 Langkah Tanggap Karhutla
│   ├── SOP Pendakian Bebas Api (Aturan kompor lapangan, puntung rokok, sampah plastik)
│   ├── Peta Zonasi Ekosistem Ciremai (Zona Inti, Zona Rimba, Zona Pemanfaatan, Zona Rehabilitasi)
│   └── Kuis Singkat Kesiapsiagaan Rimba (Self-assessment pendaki cerdas)
├── /konservasi (Ecosystem & Biodiversity Documentation)
│   ├── Flora & Fauna Endemik Ciremai (Elang Jawa, Macan Tutul Jawa, Surili, Pinus Merkusii, Edelweiss Jawa)
│   ├── Program Adopsi Pohon Lereng Ciremai
│   └── Kalender Aksi Relawan Bersih Jalur & Reboisasi
└── /pantau (Simulated Fire Hotspot & Weather Dashboard)
    ├── Indikator Cuaca Lereng (Suhu, kelembapan udara, kecepatan angin)
    ├── Simulasi Peta Titik Panas (Hotspot Tracker)
    └── Kontak Cepat Darurat Posko TNGC (Call Center Balai TNGC, SAR, BPBD Kuningan/Majalengka)
```

---

## 5. Data Models & API Contracts

### 5.1 Report Model (`/api/reports`)
```typescript
export type ReportSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type ReportStatus = "PENDING" | "VERIFIED" | "INVESTIGATING" | "RESOLVED";

export interface FireReport {
  id: string; // e.g. "CRG-202611-001"
  reporterName: string;
  reporterContact: string;
  trail: "APUY" | "PALUTUNGAN" | "LINGGARJATI" | "SADAREHE" | "NON_TRAIL";
  locationDetail: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  severity: ReportSeverity;
  incidentType: "SMOKE" | "ACTIVE_FIRE" | "ILLEGAL_LOGGING" | "LITTER_DUMP" | "OTHER";
  description: string;
  imageUrl?: string;
  timestamp: string; // ISO 8601
  status: ReportStatus;
  adminNote?: string;
}
```

### 5.2 Trail Condition Model (`/api/trails`)
```typescript
export interface TrailCondition {
  id: string;
  name: string; // "Jalur Palutungan", "Jalur Apuy", dst.
  regency: "Kuningan" | "Majalengka";
  lengthKm: number;
  openStatus: "OPEN" | "RESTRICTED" | "CLOSED";
  fireRiskLevel: "RENDAH" | "SEDANG" | "TINGGI" | "EKSTREM";
  lastUpdated: string;
  notes: string;
}
```

### 5.3 Biodiversity Species Model
```typescript
export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  category: "FAUNA" | "FLORA";
  conservationStatus: "CRITICAL" | "ENDANGERED" | "VULNERABLE" | "PROTECTED";
  habitatElevation: string; // e.g. "1.200 - 2.800 mdpl"
  description: string;
  roleInEcosystem: string;
}
```

---

## 6. Anti-Slop & Quality Enforcement

1. **R-02 (Copywriting)**: Tidak menggunakan karakter em-dash (`—`). Menggunakan tanda titik dua (`:`), koma (`,`), atau tanda kurung `()` untuk pemisah keterangan.
2. **R-03 (Mobile Layout)**: Seluruh grid komponen reflow secara elegan di layar 375px hingga desktop widescreen; touch target tombol minimal 44px.
3. **R-17 & R-36 (Honest Factual Data)**:
   - Elevasi puncak: `3.078 mdpl` (Balai TNGC).
   - Jalur resmi: Apuy (Majalengka), Palutungan (Kuningan), Linggarjati (Kuningan), Sadarehe (Majalengka).
   - Peringatan cuaca dan indeks hotspot disajikan dengan label yang jujur ("Data Pantauan Pos Lapangan & Sensor Lapangan").
4. **R-26 & R-27 (Interactive Completeness & States)**:
   - Form pelaporan memiliki validasi input, state loading saat simpan, state sukses dengan ID tiket unik, dan dialog detail.
   - Filter daftar laporan dan katalog konservasi memiliki Empty State, Filter Reset, dan search query responsive.
5. **R-32 (Accessibility)**: Seluruh tab navigation dan modal popup mendukung navigasi keyboard (`Enter`, `Tab`, `Escape`) dengan focus ring visible.

---

## 7. Testing Strategy

1. **Unit Tests (Vitest / React Testing Library)**:
   - Pengujian validasi form pelaporan (`reportValidation.test.ts`): memastikan kontak, jalur, dan deskripsi valid.
   - Pengujian ID generator tiket pelaporan (`reportId.test.ts`): format `CRG-YYYYMM-XXX`.
   - Pengujian filter & pencarian katalog konservasi serta jalur pendakian.
2. **Integration / UI Tests**:
   - Siklus pelaporan warga: Submit form -> generate tiket -> verifikasi kemunculan di riwayat laporan.
3. **Build & Lint Verification**:
   - `npm run lint` & `tsc --noEmit` & `npm run build` bebas error.
