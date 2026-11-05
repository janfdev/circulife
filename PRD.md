# Product Requirements Document (PRD) : CircuLife

> Platform: CircuLife (Digital Zero Waste & Waste-to-Value Hub)  
> Target: EcoDigital For Environment: Web Design Competition  
> Status: Production Ready (Next.js 15, React 19, Bun v1.4.0, Tailwind CSS, shadcn UI)  
> Standar Kualitas: Anti-Slop v3.2.26 (Kepatuhan R-02: 0 em-dash)

---

## 1. Ringkasan Eksekutif & Latar Belakang

CircuLife adalah platform digital closed-loop circular economy yang menghubungkan pemilahan sampah di tingkat rumah tangga, jaringan logistik drop-point cerdas, konversi material terdesentralisasi, dan distribusi produk bernilai tambah tinggi. 

Platform ini dirancang khusus untuk memenuhi standar penilaian **EcoDigital For Environment: Web Design Competition** dengan fokus pada empat pilar:
1. Kesesuaian tema lingkungan (20%)
2. Kreativitas dan inovasi fitur interaktif (25%)
3. Keunggulan desain visual dan UI/UX (25%)
4. Responsivitas teknis dan performa sistem (15%)
5. Kualitas konten dan kelengkapan navigasi (15%)

---

## 2. Masalah yang Diselesaikan (Problem Statement)

1. **Rendahnya Tingkat Pemilahan di Sumber**: Lebih dari 65% sampah perkotaan tercampur di tempat pembuangan akhir (TPA) tanpa proses pemilahan awal yang terstandarisasi.
2. **Ketiadaan Transparansi Alur Daur Ulang**: Masyarakat enggan memilah sampah karena tidak mengetahui secara visual bagaimana sampah mereka diolah dan menjadi produk apa di hilir.
3. **Ketimpangan Insentif dan Valuasi Ekonomi**: Nilai sampah anorganik (seperti botol PET dan kaleng) tidak terkonversi transparan menjadi poin atau benefit nyata bagi warga.

---

## 3. Solusi & Value Proposition CircuLife

CircuLife menyajikan arsitektur digital terintegrasi:
- **Visualisasi Alur Pemanfaatan Sampah 4 Tahap**: Memandu pengguna dari pemilahan awal, penimbangan digital ber-QR di drop-point, proses manufaktur sirkular, hingga kalkulasi reduksi emisi karbon.
- **Katalog Produk Sirkular Teruji**: Menampilkan produk nyata hasil daur ulang seperti Eco-Paving Block standar K-250, pupuk bio-kasgot hasil biokonversi larva BSF, dan kompor biomassa dari kaleng bekas.
- **Insentif & Poin Hijau**: Konversi kilogram sampah terpilah menjadi bibit pohon penghijauan atau produk daur ulang.
- **Transparansi Telemetri**: Data kumulatif tonase sampah terkelola, paving block terdistribusi, dan pohon tertanam yang terverifikasi secara berkala.

---

## 4. Ketentuan Halaman Wajib Perlombaan

Sesuai petunjuk teknis lomba, CircuLife mengimplementasikan minimal 4 halaman inti dengan struktur mendalam:

### A. Halaman Utama / Home (`/`)
- **Telemetry HUD**: Bar navigasi atas yang menampilkan metrik dampak langsung (48.200 kg sampah terkelola, 12.400 paving block tercetak, 2.850 bibit pohon tertanam).
- **Hero Section**: Callout asimetris dengan ringkasan misi, navigasi cepat, dan visual badge alur limbah.
- **Waste Utilization Flow (Alur Pemanfaatan Sampah 4 Tahap)**: Modul interaktif utama yang membedah input material, metode konversi, produk jadi, dan dampak lingkungan pada 4 tahap (Pemilahan Sumber, Penyetoran Drop-Point, Transformasi Nilai, Distribusi Dampak).
- **Bento Pillar Cards**: Tiga pilar aksi (Reduksi di Sumber, Penukaran Berinsentif, Kemitraan Komunitas).
- **Integrated Drop-Point Board**: Papan pemantau status operasional 4 drop-point mitra.

### B. Tentang Kami / About Us (`/about`)
- **Visi & Misi 2030**: Target zero waste to landfill dan kemandirian pupuk organik komunitas.
- **Metrik Pencapaian Kumulatif**: Grid statistik terukur dengan font monospace tabular.
- **Model Ekonomi Sirkular 4 Pilar**: Pemilahan hulu, logistik presisi, manufaktur desa, dan pasar produk daur ulang.
- **Kemitraan Komunitas**: Integrasi bank sampah unit dan kelompok swadaya masyarakat binaan.

### C. Konten / Artikel & Galeri (`/galeri`)
- **Sistem Tab Navigasi**: Tab Semua, Galeri Transformasi, Artikel Edukasi, dan Showcase Produk.
- **Galeri Transformasi Visual**: Kartu dokumentasi proses sebelum-sesudah (Before-After) proses pencetakan paving, biopon maggot BSF, dan upcycling kaleng gas.
- **Artikel Edukasi Zero Waste**: Bacaan praktis seputar pemilahan dapur, uji kelayakan paving block K-250, dan biokonversi sisa makanan.
- **Katalog Produk Olahan Sampah**: Ringkasan produk bernilai ekonomis lengkap dengan formula konversi material.

### D. Kontak & FAQ (`/contact`)
- **Formulir Kemitraan & Setor Sampah**: Input data nama, nomor WhatsApp, kategori sampah, estimasi berat, dan lokasi drop-point pilihan.
- **Direktori Saluran Resmi**: Saluran telepon darurat sampah, WhatsApp koordinator, email kemitraan, dan alamat pusat operasional.
- **Accordion FAQ Terpadu**: Komponen lipat interaktif menjawab pertanyaan seputar SOP pemilahan, pencucian botol PET, keamanan paving block, dan syarat kemitraan KSM.

### E. Rute Fitur Pendukung Terpadu
- **Setor Sampah (`/lapor`)**: Formulir digital TITO (Trash In Trash Out) dengan generator ID tiket otomatis dan penyimpanan LocalStorage.
- **Pantau Drop-Point & Simulator (`/pantau`)**: Simulator interaktif risiko timbunan sampah berbasis parameter volume dan hari simpan.
- **Edukasi SOP (`/edukasi`)**: Pedoman pemilahan sampah dan modul kuis gamifikasi 2 tahap.
- **Katalog Produk Sirkular (`/konservasi`)**: Direktori spesifikasi teknis paving block K-250 dan pupuk bio-kasgot.

---

## 5. Kebutuhan Non-Fungsional & Kepatuhan Kompetisi

1. **Performa & Waktu Muat**:
   - Arsitektur Next.js 15 Static Site Generation (SSG) menghasilkan 11 rute ter-prerender.
   - Ukuran First Load JS bersama di bawah 105 kB.
2. **Kepatuhan Desain Anti-Slop (v3.2.26)**:
   - Aturan R-02: Bebas total dari karakter em-dash (`—`), hanya memakai tanda hubung datar (`-`) atau titik dua (`:`).
   - Aturan R-03: Responsif penuh pada resolusi mobile 360px hingga 430px tanpa horizontal scroll.
   - Aturan R-17: Seluruh data metrik terukur secara matematis dan realistis.
3. **Aksesibilitas (WCAG 2.2 AA)**:
   - Rasio kontras teks utama minimal 12:1 pada latar terang (`#0F1A15` di atas `#F4F7F4`).
   - Tombol interaktif memiliki luas sentuh (touch target) minimal 44x44px.
   - Tombol keyboard `skip-link` tersedia untuk navigasi screen-reader.
4. **Teknologi Runtime**:
   - Dijalankan di atas runtime Bun v1.4.0 untuk kecepatan eksekusi dan efisiensi memori.
   - Pengujian terautomasi 43 unit test via Vitest dengan durasi uji di bawah 15 detik.
