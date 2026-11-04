# CIREMAI GUARD : System Design & Aesthetic Specification

> Digital Forest Protection & Environmental Awareness Platform
> Core Design Philosophy: **Biosphere Telemetry & Ecological Defense**
> Dial Declaration: **ENERGY 2 / RHYTHM 3 / MOTION 2**

---

## 1. Visual Identity & Brand Thesis

CIREMAI GUARD memadukan otoritas balai konservasi nasional dengan presisi telemetri biosfer futuristik. Antarmuka tidak dirancang seperti template blog lingkungan generik yang pasif, melainkan sebagai **pusat kendali dan kesiapsiagaan lingkungan (Eco-Telemetry Mission Hub)** yang aktif, elegan, dan berwibawa.

Setiap elemen visual terikat langsung pada realitas geografis Gunung Ciremai (3.078 mdpl, 15.500 Ha, 4 jalur pendakian resmi di Kabupaten Kuningan dan Majalengka).

---

## 2. The Three Dials

| Dial | Nilai | Implementasi Konkret |
|---|---|---|
| **ENERGY** | **2 (Balanced)** | Tegas, tenang, dan ilmiah. Tidak hiperbolik seperti game fiksi ilmiah, namun memiliki ketajaman visual instrumen satelit dan stasiun cuaca pegunungan. |
| **RHYTHM** | **3 (Varied & Asymmetric)** | Struktur halaman menghindari susunan kartu yang monoton. Menghadirkan variasi ritme: strip telemetri puncak, split hero visual, board status jalur tabular, formulir dispatch koordinat GPS, simulator indeks cuaca gauge, dan arsip spesimen biologi. |
| **MOTION** | **2 (Functional & Precise)** | Transisi mikro presisi (150-250ms), denyut indikator sensor aktif (telemetry pulse), transisi smooth slider cuaca, dan transisi tab responsif tanpa efek berlebihan yang memperlambat pengguna. |

---

## 3. Color Token Architecture (Futuristic Eco-Telemetry)

Palet warna diturunkan dari ekosistem hutan hujan tropis basah lereng Ciremai yang berpadu dengan aksen fosfor telemetri digital:

```
/* Light Theme Tokens */
--primary: 163 66% 16%;             /* Deep Canopy Spruce: #0E4436 (Otoritas & Ketenangan Rimba) */
--primary-foreground: 140 20% 98%;  /* Clean Light: #F8FAF8 */
--secondary: 158 50% 28%;           /* Forest Moss: #236C52 */
--secondary-foreground: 140 20% 98%;
--accent: 156 78% 40%;              /* Telemetry Emerald: #16A36E (Sensor & Status Aktif) */
--accent-foreground: 140 20% 98%;
--background: 140 12% 97%;          /* Highland Mist: #F4F7F4 (Putih kabut pegunungan, tidak menyilaukan) */
--foreground: 150 25% 8%;           /* Volcanic Andesite: #0F1A15 (Kontras tinggi WCAG AAA > 12:1) */
--card: 0 0% 100%;                  /* Pure Clean Card Surface */
--card-foreground: 150 25% 8%;
--border: 150 15% 88%;              /* Subtle Mineral Line: #DCEDE4 */
--muted: 140 15% 93%;               /* Subtle Elevation Layer: #EAF0EC */
--muted-foreground: 150 12% 40%;    /* Muted Slate Caption */
--destructive: 0 75% 50%;           /* Crimson Fire Hazard: #DC2626 */
--warning: 38 92% 50%;              /* Savanna Drought Amber: #D97706 */

/* Dark Theme Tokens (Deep Biosphere Terminal) */
--dark-background: 154 28% 5%;      /* Deep Andesite Crater: #090E0C */
--dark-foreground: 140 20% 96%;     /* Phosphor White: #F2F7F4 */
--dark-card: 154 25% 8%;            /* Dark Obsidian Panel: #0E1714 */
--dark-border: 154 20% 18%;         /* Precision Grid Wireframe: #1C2D27 */
--dark-primary: 156 75% 42%;        /* Glowing Bio-Phosphor: #1BC483 */
--dark-accent: 156 78% 54%;         /* Neon Telemetry Pulse: #2EE59D */
```

---

## 4. Typography Hierarchy & Micro-Details

1. **Headings (Display Grotesque)**:
   - Karakter: Tajam, padat, berbobot tebal (`font-black tracking-tight`), memancarkan urgensi dan ketegasan misi konservasi.
   - Skala: H1 `text-3xl sm:text-4xl lg:text-5xl`, H2 `text-2xl sm:text-3xl`, H3 `text-lg sm:text-xl`.
2. **Body & Prose (High-Legibility Sans)**:
   - Karakter: Bersih, renggang secukupnya, kontras teruji WCAG AA/AAA.
   - Skala: Body `text-sm sm:text-base leading-relaxed`, Caption `text-xs leading-normal`.
3. **Telemetry & Data Labels (Monospace Scientific)**:
   - Karakter: Font monospace tabular (`font-mono tabular-nums tracking-tight text-xs`), digunakan untuk elevasi mdpl, koordinat GPS lintang-bujur, nomor tiket laporan, persentase kelembaban, dan timer cuaca.
   - Micro-eyebrows: Huruf kapital mini dengan tracking renggang (`text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase`).

---

## 5. Layout Architecture & Futuristik Signatures

1. **Top Telemetry HUD Bar (Navbar)**:
   - Menampilkan koordinat geospasial TNGC (`108°24' BT | 06°53' LS`), elevasi puncak `3.078 mdpl`, serta live status siaga kebakaran secara real-time.
2. **Hero Mission Section**:
   - Split grid yang menghubungkan pernyataan misi perlindungan hutan dengan instrumen radar elevasi Gunung Ciremai dan kartu matriks siaga 4 posko jalur.
3. **Tactical Board & Mission Dispatch (Lapor & Pantau)**:
   - Formulir lapor dengan verifikasi koordinat GPS latitude/longitude seketika, generator tiket audit `CRG-YYYYMM-XXX`, dan salin kode sekali klik.
   - Simulator cuaca lereng interaktif dengan indikator visual indeks kerawanan karhutla.
4. **Specimen Bio-Archive (Konservasi)**:
   - Tata letak kartu satwa/flora yang menyajikan taksonomi ilmiah, status IUCN dengan visual badge presisi, dan zona elevasi sebaran habitat.

---

## 6. Anti-Slop Strict Enforcement (R-01 - R-38)

- **R-02 (Copywriting)**: DILARANG KERAS menggunakan karakter em-dash (`—`). Hanya gunakan tanda hubung biasa (`-`) atau titik dua (`:`).
- **R-03 (Mobile Responsiveness)**: Seluruh viewport mobile (360px hingga 430px) harus bebas horizontal overflow, tombol memenuhi touch target minimal 44px.
- **R-17 & R-36 (Real Data)**: Seluruh metrik berbasis fakta nyata Balai TNGC (3.078 mdpl, 15.500 Ha, 4 jalur: Palutungan, Apuy, Linggarjati, Sadarehe).
- **R-26 & R-35 (Functional Verification)**: Setiap tombol memiliki handler aksi, link nyata, atau umpan balik interaktif yang lolos uji klik dan tes unit.
