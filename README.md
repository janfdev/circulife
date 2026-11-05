# CircuLife: Zero Waste & Waste-to-Value Hub

Platform terpadu pengelolaan dan konversi limbah berbasis ekonomi sirkular untuk kompetisi **EcoDigital For Environment: Web Design Competition**. Proyek ini menghubungkan pemilahan sampah di sumber, logistik drop-point cerdas, transformasi material menjadi produk bernilai (eco-paving block, pupuk bio-kasgot, tungku upcycled), dan distribusi dampak lingkungan.

---

## Prasyarat Sistem

Sebelum menjalankan proyek, pastikan perangkat Anda telah terpasang:
- **Bun**: v1.4.0 atau versi yang lebih baru (disarankan)
- **Node.js**: v20.0.0 atau lebih baru (opsional, jika menggunakan npm/pnpm)
- **Git**: Untuk kloning repositori

---

## Panduan Instalasi & Menjalankan Proyek

### 1. Kloning Repositori
```bash
git clone https://github.com/janfdev/circulife.git
cd circulife
```

### 2. Pasang Dependensi
Gunakan Bun untuk memasang seluruh dependensi proyek:
```bash
bun install
```

### 3. Jalankan Development Server
```bash
bun run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 4. Menjalankan Unit & Integration Test
Proyek dilengkapi 43 pengujian otomatis menggunakan Vitest dan React Testing Library, termasuk audit kepatuhan anti-slop:
```bash
bun run test
```

### 5. Kompilasi Produksi (Production Build)
Untuk memverifikasi tipe TypeScript dan membuat build statis Next.js:
```bash
bun run build
```

### 6. Menjalankan Build Produksi Secara Lokal
```bash
bun run start
```

---

## Struktur Halaman & Fitur Aplikasi

Proyek ini memenuhi 4 halaman wajib perlombaan web design serta modul pendukung:

1. **Home (`/`)**:
   - Telemetry HUD: metrik ringkas dampak limbah terkelola dan pohon tertanam.
   - Hero banner dengan call to action alur pemanfaatan sampah.
   - Alur Pemanfaatan Sampah Interaktif 4 Tahap: pemilahan sumber, logistik pintar, konversi nilai sirkular, dan distribusi dampak.
   - Bento grid pilar zero waste dan papan status drop-point komunitas.

2. **Tentang Kami (`/about`)**:
   - Visi dan misi ekosistem CircuLife 2030.
   - Metrik dampak kumulatif: tonase sampah, paving block terdistribusi, dan mitra binaan.
   - Model ekonomi sirkular 4 pilar.

3. **Konten / Artikel & Galeri (`/galeri`)**:
   - Galeri transformasi visual: proses pengolahan botol plastik, komposting maggot BSF, dan upcycling kaleng bekas.
   - Artikel panduan gaya hidup zero waste dan teknologi daur ulang.
   - Katalog produk sirkular dengan filter kategori (paving block PET, kompos bio-kasgot, alat upcycling).

4. **Kontak & FAQ (`/contact`)**:
   - Formulir pendaftaran mitra bank sampah dan penyetoran limbah massal.
   - Direktori kontak dan pusat logistik.
   - Komponen accordion FAQ seputar tata cara pemilahan dan penukaran poin.

5. **Rute Pendukung**:
   - **Form Setor Sampah (`/lapor`)**: antarmuka pelaporan dan penimbangan sampah berinsentif poin.
   - **Pantau Status (`/pantau`)**: simulator parameter sirkularitas dan direktori posko drop-point.
   - **Edukasi SOP (`/edukasi`)**: pedoman pemilahan sampah dan kuis interaktif 2 tahap.
   - **Katalog Restorasi (`/konservasi`)**: direktori spesifikasi produk sirkular dan indikator emisi karbon.

---

## Teknologi & Arsitektur

- **Runtime & Package Manager**: Bun v1.4.0
- **Framework Frontend**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS v3, CSS variables HSL (Civic Forest Theme)
- **Komponen UI**: shadcn UI, Base UI (`@base-ui/react`), Lucide React icons
- **Pengujian**: Vitest, React Testing Library, jsdom
- **Kepatuhan Desain**: Anti-Slop R-02 (bebas karakter em-dash), tipografi Poppins Google Fonts, angka telemetri `tabular-nums`

---

## Skrip yang Tersedia

| Perintah | Deskripsi |
| :--- | :--- |
| `bun run dev` | Menjalankan Next.js development server pada port 3000 |
| `bun run build` | Melakukan audit tipe TypeScript dan kompilasi build produksi Next.js |
| `bun run start` | Menjalankan server Next.js mode produksi |
| `bun run test` | Menjalankan seluruh test suite Vitest (11 berkas test) |
| `bun run lint` | Menjalankan linter ESLint untuk verifikasi standar kode |
