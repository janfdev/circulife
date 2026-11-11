# Product Requirements Document (PRD) : CircuLife

> Platform: CircuLife (Digital Circular Economy & Waste-to-Value Hub)
> Target: EcoDigital For Environment: Web Design Competition
> Status: Production Ready (Next.js 15, React 19, Tailwind CSS, shadcn UI)
> Standar Kualitas: Anti-Slop v3.2.26 (Kepatuhan R-02: 0 em-dash, R-18: Bukti Fotografi Nyata, WCAG 2.2 AA)

---

## 1. Ringkasan Eksekutif & Identitas Proyek

CircuLife adalah platform ekosistem digital ekonomi sirkular tertutup (closed-loop) yang mentransformasikan sampah kawasan rimba dan perkotaan menjadi material bernilai tinggi:
1. **Limbah Plastik PET & Sachet**: Dikonversi menjadi Eco-Paving Block mutu K-250 ramah gempa dan panel partikel plastik.
2. **Sampah Organik Logistik**: Dikonversi via biokonversi larva Black Soldier Fly (BSF) menjadi pupuk bio-kasgot kaya nitrogen.
3. **Kaleng Gas Portabel Bekas**: Di-upcycle menjadi kompor saku biomassa dan asbak saku pendaki.

Platform ini dibangun untuk memenangkan **EcoDigital For Environment: Web Design Competition** dengan menonjolkan:
- **Kredibilitas Dokumentasi Lapangan**: Didukung inventaris foto fotografi nyata (bukan ilustrasi AI kartun generik).
- **Interaktivitas Sains Nyata**: Diagram isometrik interaktif `WasteMachineAnatomy`, simulator reduksi CO2 `WasteImpactSimulator`, dan slider restorasi ekologis `EnvironmentalComparisonSlider`.
- **Kesiapan Operasional Lapangan**: Tiket verifikasi fisik siap cetak (`window.print()`), direktori hotline posko resmi, dan sertifikat digital wawasan sirkular.

---

## 2. Rubrik Penjurian Kompetisi & Strategi Menang

| Kriteria Penjurian | Bobot | Strategi Eksekusi CircuLife |
| :--- | :--- | :--- |
| **Kesesuaian Tema Lingkungan** | 20% | Solusi konkret zero-waste to landfill dengan formula konversi material presisi (1 paving = 1.2 kg plastik; 1 karung sampah = 1 bibit pohon). |
| **Kreativitas & Fitur Interaktif** | 25% | Visualisasi alur 4 tahap, diagram mesin ekstrusi isometrik interaktif, simulator konversi dampak limbah real-time, dan kuis uji wawasan. |
| **Keunggulan UI/UX & Visual** | 25% | Desain modern berstandar anti-slop: palet warna panggung alam (Forest Emerald, Warm Slate, Sand), tipografi Plus Jakarta Sans + JetBrains Mono, kontras tinggi WCAG AA. |
| **Performa & Kesiapan Teknis** | 15% | Next.js 15 SSG, First-Load JS ~103 kB, custom 404/500, dynamic sitemap & robots, 20 test suite (67 unit tests) lolos 100%. |
| **Kelengkapan Halaman & Konten** | 15% | Memenuhi 4 halaman wajib lomba (`/`, `/about`, `/galeri`, `/contact`) ditambah 4 modul pendukung operasional (`/lapor`, `/pantau`, `/edukasi`, `/konservasi`). |

---

## 3. Arsitektur Halaman & Spesifikasi Fitur

### A. Halaman Wajib 1: Beranda / Home (`/`)
- **Telemetry HUD**: Metrik dampak lingkungan kumulatif (48.200 kg sampah terkelola, 12.400 paving block tercetak, 2.850 bibit tertanam).
- **Hero Section**: Navigasi ganda tegas (Layar Panggung & Masuk Ponsel), ringkasan misi, dan highlight nilai sirkular.
- **Waste Machine Anatomy (Fig 1.0)**: Diagram isometrik interaktif mesin pencacah plastik, ekstruder termal (220°C), dan kompresi hidrolik (185-200 bar).
- **Waste Utilization Flow (Alur 4 Tahap)**: Stepper interaktif menelusuri pemilahan hulu, logistik drop-point, manufaktur cetak, dan distribusi produk.
- **Waste Impact Simulator**: Kalkulator live reduksi emisi karbon (kg CO2e) dan estimasi output paving/kompos.
- **Restoration Comparison Slider**: Slider visual interaktif perbandingan sebelum restorasi (timbunan sampah) vs sesudah restorasi (jalur paving sirkular).
- **Drop-Point Status Board**: Status live 4 posko penerima sampah (Palutungan, Linggarjati, Apuy, Berod).
- **FAQ Accordion**: Tanya jawab terstruktur seputar mekanisme penukaran sampah dan sertifikasi produk.

### B. Halaman Wajib 2: Tentang Kami / About Us (`/about`)
- **Visi & Misi 2030**: Dekarbonisasi kawasan konservasi dan kemandirian pupuk organik komunitas lokal.
- **Model Ekonomi Sirkular 4 Pilar**: Pemilahan di hulu, logistik presisi, manufaktur desa, dan pasar produk daur ulang.
- **Jaringan Kemitraan**: Kolaborasi resmi dengan Balai Taman Nasional, Bank Sampah Unit, dan Kelompok Tani Hutan.
- **Tim & Tata Kelola**: Profil operasional komite sirkularitas dan standar keamanan material daur ulang.

### C. Halaman Wajib 3: Konten / Artikel & Galeri (`/galeri`)
- **Tab Filter Multi-Kategori**: Tab Semua, Galeri Foto Lapangan, Artikel Edukasi, dan Showcase Produk Olahan.
- **Galeri Fotografi Lapangan Asli**: Dokumentasi foto nyata proses pencacahan plastik, pencetakan paving block, biopon maggot BSF, dan penanaman bibit pohon.
- **Artikel Edukasi Lingkungan**: Kajian mendalam standar paving block K-250, siklus dekomposisi organik, dan protokol pendakian zero waste.

### D. Halaman Wajib 4: Kontak & FAQ (`/contact`)
- **Formulir Kemitraan & Penyetoran Komunitas**: Input nama lembaga, narahubung, jenis sampah, dan kebutuhan kemitraan.
- **Direktori Saluran Resmi & Hotline**: Nomor telepon darurat sampah (0232-613158), hotline WhatsApp (0812-9900-2026), email kemitraan, dan alamat posko induk.
- **Accordion FAQ Terpadu**: Klarifikasi syarat penukaran bibit pohon, pencucian wadah kemasan, dan jadwal penjemputan logistik.

### E. Modul Pendukung Operasional:
- **Setor Sampah & Tiket Fisik (`/lapor`)**: Formulir penimbangan sampah mandiri dengan generator tiket QR-ready dan tombol cetak fisik voucher (`window.print()`) untuk diserahkan ke posko.
- **Pantau Posko & Risiko Timbunan (`/pantau`)**: Dashboard telemetri kapasitas tampung posko dan kalkulator risiko pembusukan sampah.
- **Pusat Edukasi & Kuis Sirkular (`/edukasi`)**: Standar Operasional Prosedur (SOP) pemilahan TITO dan kuis interaktif dengan penerbitan sertifikat digital.
- **Katalog Produk Sirkular (`/konservasi`)**: Spesifikasi teknis produk olahan daur ulang lengkap dengan peruntukan beban tonase dan harga eceran sosial.

---

## 4. Rencana Kurasi Aset Visual Nyata (`public/images/`)

Untuk memastikan tampilan web 100% otentik dan bebas dari kesan ilustrasi sintetis, CircuLife mengintegrasikan foto dokumentasi beresolusi tinggi dengan lisensi terbuka (Unsplash/Wikimedia/Pexels):

1. **Fasilitas & Mesin Olah Sampah**:
   - `public/images/gallery/paving-molding.jpg`: Mesin cetak hidrolik & cetakan paving block heksagonal.
   - `public/images/gallery/digital-scale.jpg`: Timbangan digital posko dan pencatatan logistik sampah.
   - `public/images/gallery/paving-pathway.jpg`: Aplikasi nyata paving block daur ulang di taman/jalur pejalan kaki.
   - `public/images/gallery/maggot-bio.jpg`: Rumah biokonversi maggot BSF pengurai sampah organik sisa makanan.
2. **Produk Olahan Nyata**:
   - `public/images/products/paving-block-pet.jpg`: Foto close-up paving block polimer komposit abu-abu/hijau solid.
   - `public/images/products/kompos-bio-kasgot.jpg`: Kemasan karung pupuk bio-kasgot organik berkualitas tinggi.
   - `public/images/products/tungku-biomassa.jpg`: Kompor biomassa mini dari daur ulang kaleng gas bekas.
3. **Penyuluhan & Penanaman Pohon**:
   - `public/images/articles/panduan-zero-waste.jpg`: Aksi relawan memilah sampah botol plastik di lapangan.
   - `public/images/species/saninten-seedling.jpg`: Bibit pohon Saninten/penghijauan yang siap ditukar reward.

---

## 5. Kepatuhan Teknis & Standar Anti-Slop (Delivery Gate)

1. **Nol Em-Dash (R-02 Compliance)**: Tidak ada karakter `—` pada seluruh kode dan konten; menggunakan tanda hubung `-`, titik dua `:`, atau titik `.`.
2. **Kesesuaian WCAG 2.2 AA (Aksesibilitas)**:
   - Rasio kontras teks utama minimal 10:1.
   - Luas area sentuh tombol minimal 44x44px.
   - Dukungan mode cetak bersih `@media print` untuk tiket setoran.
3. **SEO & Social Share Ready**:
   - Dynamic `sitemap.ts` mencakup seluruh 8 rute publik.
   - Standar `robots.ts` mengizinkan pengindeksan mesin pencari.
   - OpenGraph preview image `opengraph-image.png` resolusi 1200x630px.
   - Halaman custom `not-found.tsx` dan `error.tsx` terintegrasi.
