# CIRCULIFE : System Design & Aesthetic Specification

> Platform: CircuLife (Digital Zero Waste & Waste-to-Value Hub)  
> Target: EcoDigital For Environment: Web Design Competition  
> Core Design Philosophy: **Closed-Loop Environmental Telemetry & Civic Forest System**  
> Dial Declaration: **ENERGY 2 / RHYTHM 3 / MOTION 2**  
> Standar Kualitas: Anti-Slop v3.2.26 (Kepatuhan R-02: 0 em-dash)

---

## 1. Identitas Visual & Tesis Desain

CircuLife memadukan estetika gerakan lingkungan modern dengan presisi telemetri data sirkular. Antarmuka tidak dirancang seperti template blog lingkungan generik yang pasif, melainkan sebagai **Pusat Kendali Sirkularitas Sampah (Waste-to-Value Operation Hub)** yang aktif, bersih, dan berwibawa.

Setiap komponen visual mencerminkan transformasi nyata: dari limbah anorganik dan organik menjadi material bernilai guna (Eco-Paving Block standar K-250, pupuk bio-kasgot, dan kompor biomassa upcycled).

---

## 2. Pengaturan Tiga Dial (The Three Dials)

| Dial | Nilai | Implementasi Konkret |
|---|---|---|
| **ENERGY** | **2 (Balanced)** | Tenang, fokus, dan berbasis data. Menghindari ilustrasi kartun kekanak-kanakan atau gradien neon berlebih. Visual dibangun dengan ketajaman instrumen pemantauan lingkungan dan kejernihan tipografi ilmiah. |
| **RHYTHM** | **3 (Varied & Asymmetric)** | Layout menghindari susunan kartu vertikal yang membosankan. Menghadirkan variasi ritme antarmuka: strip telemetri atas, hero split-callout, selector alur limbah 4 tahap, bento grid pilar aksi, feed laporan dua kolom, dan accordion FAQ modular. |
| **MOTION** | **2 (Functional & Precise)** | Transisi mikro terukur (150-250ms) pada seleksi tabs, feedback klik tombol, denyut indikator sensor aktif, dan perubahan tahap alur sampah tanpa animasi berat yang membebani kinerja perangkat mobile. |

---

## 3. Prinsip Desain & Tolok Ukur Industri

1. **Patagonia Action Works (Aksi Nyata Berkelanjutan)**:
   - Menghindari visual klise (daun dekoratif mengambang tanpa makna, bola dunia plastik).
   - Menampilkan metrik data nyata (tonase terkelola, jumlah paving block terdistribusi, pohon tertanam) di posisi yang mudah diverifikasi.
2. **Circular Economy Dashboard (Alur Nilai Transparan)**:
   - Setiap jenis limbah (Plastik PET, Kaleng Logam, Sisa Makanan) dipetakan secara eksplisit ke proses pengolahan dan produk akhir.
   - Menggunakan kode status dan badge terstandarisasi untuk membedakan kategori material.
3. **Aturan Proporsi Warna 60-30-10**:
   - **60% Latar Netral**: Putih kabut sejuk (`--background: 140 15% 97.5%` / `#F4F7F4`) untuk kenyamanan mata dan kontras tinggi.
   - **30% Identitas Rimba Primer**: Hijau kanopi cemara dalam (`--primary: 163 66% 16%` / `#0E4436`) untuk navigasi, tombol utama, dan kartu hero.
   - **10% Aksen Sensorik & Status**: Hijau zamrud telemetri (`--accent: 156 75% 42%` / `#1BC483`) untuk indikator aktif, badge sertifikasi, dan nilai sirkularitas.

---

## 4. Arsitektur Token Warna (Civic Forest Theme)

```css
/* Light Theme Tokens */
--background: 140 15% 97.5%;        /* Highland Mist: #F4F7F4 (Kanvas utama bebas silau) */
--foreground: 150 25% 8%;           /* Andesite Charcoal: #0F1A15 (Kontras tinggi WCAG AAA > 12:1) */
--primary: 163 66% 16%;             /* Deep Canopy Spruce: #0E4436 (Otoritas & Ketenangan Rimba) */
--primary-foreground: 140 20% 98%;  /* Clean Light: #F8FAF8 */
--secondary: 158 45% 26%;           /* Forest Moss: #236C52 (Elemen sekunder & badge) */
--secondary-foreground: 140 20% 98%;
--accent: 156 75% 42%;              /* Telemetry Emerald: #1BC483 (Status sensor & metrik aktif) */
--accent-foreground: 140 20% 98%;
--card: 0 0% 100%;                  /* Pure White Card Surface: #FFFFFF */
--card-foreground: 150 25% 8%;
--border: 150 15% 88%;              /* Subtle Mineral Line: #DCEDE4 */
--muted: 140 15% 93%;               /* Soft Substrate Layer: #EAF0EC */
--muted-foreground: 150 12% 40%;    /* Muted Slate Caption */
--destructive: 0 75% 50%;           /* Crimson Alert: #DC2626 */
--warning: 38 92% 50%;              /* Amber Caution: #D97706 */
```

---

## 5. Hierarki Tipografi & Angka Telemetri

1. **Judul Utama & Heading (Google Font Poppins)**:
   - Karakteristik: Geometris, solid, modern, dengan ketebalan tegas (`font-black tracking-tight leading-[1.2]`).
   - Skala: H1 `text-3xl sm:text-4xl lg:text-5xl`, H2 `text-2xl sm:text-3xl`, H3 `text-lg sm:text-xl`.
2. **Teks Paragraf & Konten (High-Legibility Poppins)**:
   - Karakteristik: Jernih, spasi baris leluasa, kontras teruji WCAG AA.
   - Skala: Body `text-sm sm:text-base leading-relaxed`, Caption `text-xs leading-normal`.
3. **Data Angka & Telemetri (Monospace Tabular)**:
   - Karakteristik: Font monospace dengan lebar angka sejajar (`font-mono tabular-nums tracking-tight`). Digunakan untuk angka berat sampah (kg), satuan paving block (pcs), nilai poin sirkular, dan kode tiket formulir.
   - Eyebrows: Huruf kapital mini dengan letter-spacing renggang (`text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase`).

---

## 6. Pola Komponen & Struktur Layout (BagUI & shadcn)

1. **Top Telemetry HUD Bar**:
   - Berada di bar paling atas navbar, menampilkan live status operasional jaringan drop-point terintegrasi dan metrik ringkas dampak.
2. **Interactive Waste Utilization Flow**:
   - Menggunakan navigasi stepper dan kartu bento informatif untuk membedah input limbah mentah, teknologi konversi, produk jadi bernilai tinggi, dan indikator dampak ekologis.
3. **Bento Grid Pilar Sirkularitas (Inspirasi BagUI `feature-1`)**:
   - Tiga kartu asimetris yang menyoroti pemilahan sumber, penukaran berhadiah bibit pohon, dan kemitraan bank sampah komunitas.
4. **Accordion FAQ Interaktif (Inspirasi BagUI `faq1`)**:
   - Komponen lipat terstruktur untuk menjawab keraguan masyarakat terkait higienitas sampah, standar mutu paving block K-250, dan cara setor sampah.
5. **Formulir Interaktif Terpadu**:
   - Input berbasis kartu bersih dengan kalkulasi otomatis poin insentif, validasi tipe data langsung, dan umpan balik tiket digital.

---

## 7. Penerapan Standar Anti-Slop (v3.2.26)

- **R-02 (Larangan Em-Dash)**: DILARANG KERAS menggunakan karakter em-dash (`—`). Hanya gunakan tanda hubung biasa (`-`) atau titik dua (`:`).
- **R-03 (Responsivitas Penuh)**: Bebas horizontal scroll pada semua ukuran layar (viewport 360px hingga 430px) dengan touch target tombol minimal 44px.
- **R-17 & R-36 (Integritas Data)**: Menghindari statistik fiktif tanpa konteks teknis (seperti "99% efisiensi tak terbatas"). Menggunakan standar teknik riil (uji tekan K-250, rasio NPK kasgot, reduksi CO2e).
- **R-26 & R-35 (Verifikasi Fungsional)**: Tidak ada tautan mati atau tombol tanpa aksi nyata. Semua formulir dan navigasi teruji lolos tes unit Vitest.
