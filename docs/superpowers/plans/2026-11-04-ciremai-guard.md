# CIREMAI GUARD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun platform web terpadu "CIREMAI GUARD" (Digital Forest Protection & Environmental Awareness Platform) berbasis Next.js App Router, Tailwind CSS, dan TypeScript untuk edukasi, mitigasi kebakaran hutan, pelaporan cepat warga, dan konservasi Gunung Ciremai.

**Architecture:** Next.js App Router dengan pemisahan domain route yang modular (`/`, `/lapor`, `/edukasi`, `/konservasi`, `/pantau`), client-side persistence (LocalStorage) untuk tiket laporan, mock route handlers untuk standarisasi API contract, dan styling Tailwind CSS yang mematuhi standar antislop (Energy 2, Rhythm 2, Motion 1).

**Tech Stack:** Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, Lucide React, Vitest, React Testing Library.

**Spec:** `docs/superpowers/specs/2026-11-04-ciremai-guard-design.md`

## Global Constraints

- Bebas karakter em-dash (`—`) di seluruh antarmuka dan salinan teks (aturan antislop R-02).
- Data lingkungan faktual kawasan TN Gunung Ciremai: elevasi 3.078 mdpl, 4 jalur pendakian resmi (Apuy, Palutungan, Linggarjati, Sadarehe).
- Dilarang membuat tombol atau kontrol mati (R-26); setiap tombol harus memiliki aksi nyata, navigasi, atau dialog.
- Seluruh teks memenuhi rasio kontras WCAG AA (minimal 4.5:1 untuk teks normal).
- Setiap form input wajib memiliki penanganan state: idle, loading/submitting, validation error, dan sukses (R-27).
- Tabular numbers (`tabular-nums`) wajib pada koordinat, elevasi, dan data kuantitatif.

## Review Focus

1. Submit form laporan tanpa jalur pendakian atau tanpa kontak valid harus ditolak dengan pesan validasi yang jelas.
2. Generator ID tiket harus menghasilkan format unik `CRG-YYYYMM-XXX` dan dapat dicari kembali di halaman pelacakan.
3. Form input koordinat GPS opsional tidak boleh melempar runtime exception saat dikosongkan.
4. Filter kategori pada katalog flora/fauna tidak boleh merusak layout grid saat hasil pencarian kosong (harus tampil Empty State informatif).
5. Tampilan mobile (375px) tidak boleh mengalami overflow horizontal pada status board jalur maupun form pelaporan.

---

### Task 1: Project Scaffolding, Type Definitions, & Test Setup

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`
- Create: `src/types/index.ts`
- Create: `src/lib/constants.ts`
- Create: `vitest.config.ts`
- Test: `src/lib/__tests__/constants.test.ts`

**Interfaces:**
- Produces: `FireReport`, `ReportSeverity`, `ReportStatus`, `TrailCondition`, `Species`, `QuizQuestion` types in `src/types/index.ts`.
- Produces: `TRAIL_SEEDS`, `INITIAL_REPORTS`, `SPECIES_SEEDS`, `QUIZ_SEEDS` in `src/lib/constants.ts`.

- [ ] **Step 1: Inisialisasi scaffolding Next.js, Tailwind, dan Vitest**
- [ ] **Step 2: Definisikan interface domain di `src/types/index.ts` dan seed data di `src/lib/constants.ts`**
- [ ] **Step 3: Tulis unit test untuk seed data dan konstanta TNGC**
- [ ] **Step 4: Jalankan test dan pastikan lulus**
- [ ] **Step 5: Commit scaffolding dan konfigurasi awal**

---

### Task 2: Core Utilities & Domain Logic (TDD)

**Files:**
- Create: `src/lib/reportUtils.ts`
- Test: `src/lib/__tests__/reportUtils.test.ts`

**Interfaces:**
- Produces:
  - `generateReportId(counter: number, date?: Date): string` -> format `CRG-YYYYMM-XXX`
  - `validateReportInput(input: Partial<FireReport>): { isValid: boolean; errors: Record<string, string> }`
  - `filterSpecies(list: Species[], category: string, query: string): Species[]`

- [ ] **Step 1: Tulis failing test di `src/lib/__tests__/reportUtils.test.ts`**
- [ ] **Step 2: Jalankan test untuk memverifikasi kegagalan (failing test)**
- [ ] **Step 3: Implementasikan logika validasi, ID generator, dan filter di `src/lib/reportUtils.ts`**
- [ ] **Step 4: Jalankan test dan pastikan 100% lulus**
- [ ] **Step 5: Commit utilitas domain**

---

### Task 3: Global Theme, Layout, & Responsive Navigation

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Footer.tsx`
- Test: `src/components/__tests__/Navbar.test.tsx`

**Interfaces:**
- Consumes: Navigation links (`/`, `/lapor`, `/edukasi`, `/konservasi`, `/pantau`).
- Produces: Global shell dengan dukungan mobile drawer navigasi, skip-to-content accessibility link, dan footer informatif posko TNGC.

- [ ] **Step 1: Buat styling antislop di `src/app/globals.css` (Font, palet alam, border, skip-link)**
- [ ] **Step 2: Tulis test interaksi Navbar (toggle menu mobile, link destinations)**
- [ ] **Step 3: Implementasikan `Navbar.tsx`, `Footer.tsx`, dan `layout.tsx`**
- [ ] **Step 4: Jalankan test navigasi dan pastikan lulus**
- [ ] **Step 5: Commit komponen layout dasar**

---

### Task 4: Interactive Landing Page (`/`)

**Files:**
- Create: `src/app/page.tsx`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/TrailStatusBoard.tsx`
- Create: `src/components/CampaignActionSection.tsx`
- Test: `src/components/__tests__/TrailStatusBoard.test.tsx`

**Interfaces:**
- Consumes: `TRAIL_SEEDS`, link action ke `/lapor` dan `/edukasi`.
- Produces: Landing page yang menampilkan Siaga Karhutla, 4 jalur pendakian (Apuy, Palutungan, Linggarjati, Sadarehe), metrik kawasan 3.078 mdpl, dan kartu ajakan aksi peduli lingkungan.

- [ ] **Step 1: Tulis test untuk render TrailStatusBoard (menampilkan status buka/tutup dan resiko api)**
- [ ] **Step 2: Buat komponen HeroSection dengan status siaga dan CTA spesifik**
- [ ] **Step 3: Buat komponen TrailStatusBoard dengan indikator warna status faktual**
- [ ] **Step 4: Susun `src/app/page.tsx` dengan alur ritme halaman yang variatif (Rhythm 2)**
- [ ] **Step 5: Jalankan test dan verifikasi tampilan bebas overflow**
- [ ] **Step 6: Commit modul beranda**

---

### Task 5: Citizen Fire & Threat Reporting System (`/lapor`)

**Files:**
- Create: `src/app/lapor/page.tsx`
- Create: `src/components/ReportForm.tsx`
- Create: `src/components/ReportTrackingModal.tsx`
- Create: `src/components/RecentReportsList.tsx`
- Test: `src/components/__tests__/ReportForm.test.tsx`

**Interfaces:**
- Consumes: `validateReportInput`, `generateReportId`, `TRAIL_SEEDS`.
- Produces: Form pelaporan insiden asap/api/pencemaran lengkap dengan feedback sukses, generator tiket, pencarian tiket pelaporan, dan daftar laporan terbaru dengan filtering status.

- [ ] **Step 1: Tulis test untuk validasi form pelaporan (harus menolak input kosong, menampilkan pesan error)**
- [ ] **Step 2: Implementasikan `ReportForm.tsx` dengan validasi client, state loading, dan modal tiket sukses**
- [ ] **Step 3: Implementasikan `RecentReportsList.tsx` dengan filter tipe insiden dan status badge**
- [ ] **Step 4: Implementasikan fitur pelacakan tiket di `src/app/lapor/page.tsx`**
- [ ] **Step 5: Jalankan test dan pastikan siklus submit & tracking bekerja sempurna**
- [ ] **Step 6: Commit modul pelaporan warga**

---

### Task 6: Fire Mitigation & Environmental Education Hub (`/edukasi`)

**Files:**
- Create: `src/app/edukasi/page.tsx`
- Create: `src/components/EducationGuideSection.tsx`
- Create: `src/components/InteractiveZoningMap.tsx`
- Create: `src/components/RangerQuizModal.tsx`
- Test: `src/components/__tests__/RangerQuizModal.test.tsx`

**Interfaces:**
- Consumes: `QUIZ_SEEDS`.
- Produces: Panduan 5 Langkah Kesiapsiagaan Karhutla, SOP Rimba Tanpa Api, visualisasi interaktif zonasi TNGC, serta kuis kesiapsiagaan berhadiah lencana digital pendaki bijak.

- [ ] **Step 1: Tulis test logika kuis interaktif (skor kuis dan evaluasi kelulusan)**
- [ ] **Step 2: Buat panduan mitigasi dan SOP pendakian tanpa api di `EducationGuideSection.tsx`**
- [ ] **Step 3: Buat visualisasi zonasi TNGC (Zona Inti, Rimba, Pemanfaatan, Rehabilitasi)**
- [ ] **Step 4: Implementasikan `RangerQuizModal.tsx` dengan pilihan interaktif dan skor langsung**
- [ ] **Step 5: Susun halaman `src/app/edukasi/page.tsx`**
- [ ] **Step 6: Jalankan test dan commit modul edukasi**

---

### Task 7: Conservation & Biodiversity Showcase (`/konservasi`)

**Files:**
- Create: `src/app/konservasi/page.tsx`
- Create: `src/components/SpeciesCatalog.tsx`
- Create: `src/components/AdoptTreeSection.tsx`
- Test: `src/components/__tests__/SpeciesCatalog.test.tsx`

**Interfaces:**
- Consumes: `SPECIES_SEEDS`, `filterSpecies`.
- Produces: Ensiklopedia spesies kunci lereng Ciremai (Elang Jawa, Macan Tutul Jawa, Surili, Pinus, Edelweiss), filter kategori Flora/Fauna, tab aksi adopsi pohon, dan agenda relawan.

- [ ] **Step 1: Tulis test pencarian dan filter spesies flora/fauna**
- [ ] **Step 2: Implementasikan `SpeciesCatalog.tsx` dengan kartu informasi detail, elevasi habitat, dan status konservasi IUCN**
- [ ] **Step 3: Implementasikan `AdoptTreeSection.tsx` dengan formulir komitmen adopsi pohon lokal**
- [ ] **Step 4: Susun halaman `src/app/konservasi/page.tsx`**
- [ ] **Step 5: Jalankan test dan commit modul konservasi**

---

### Task 8: Live Monitoring & Emergency Posko Dashboard (`/pantau`)

**Files:**
- Create: `src/app/pantau/page.tsx`
- Create: `src/components/WeatherAlertCard.tsx`
- Create: `src/components/SimulatedHotspotMap.tsx`
- Create: `src/components/EmergencyContactsDirectory.tsx`
- Test: `src/components/__tests__/EmergencyContacts.test.tsx`

**Interfaces:**
- Produces: Indikator cuaca lereng (kelembapan, suhu, resiko karhutla), peta titik panas interaktif dengan filter wilayah Kuningan/Majalengka, dan tombol panggil cepat kontak darurat TNGC & BPBD.

- [ ] **Step 1: Tulis test untuk komponen kontak darurat (verifikasi nomor darurat dan tombol telpon/WhatsApp)**
- [ ] **Step 2: Implementasikan kartu cuaca dan indeks kekeringan lereng di `WeatherAlertCard.tsx`**
- [ ] **Step 3: Implementasikan `SimulatedHotspotMap.tsx` dengan visual koordinat titik pantau**
- [ ] **Step 4: Buat direktori posko darurat di `EmergencyContactsDirectory.tsx`**
- [ ] **Step 5: Susun halaman `src/app/pantau/page.tsx`**
- [ ] **Step 6: Jalankan test dan commit modul pantau**

---

### Task 9: Full Build, Verification, & Anti-Slop Delivery Gate

**Files:**
- Review: Seluruh file di `src/`
- Documentation: `anti-slop/delivery-gate.md`

- [ ] **Step 1: Jalankan seluruh test suite Vitest (`npx vitest run`) dan pastikan 100% lulus**
- [ ] **Step 2: Jalankan TypeScript typecheck (`npx tsc --noEmit`) dan build Next.js (`npm run build`)**
- [ ] **Step 3: Lakukan audit antislop Delivery Gate (bebas em-dash, kontras WCAG, responsive mobile, tidak ada tombol mati)**
- [ ] **Step 4: Catat hasil Delivery Gate dan buat commit final**
