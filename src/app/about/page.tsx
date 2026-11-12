import React from "react";
import Link from "next/link";
import { CircuLifeMark, CircuLifeLogo } from "@/components/CircuLifeLogo";
import {
  Recycle,
  Target,
  Sparkles,
  Users,
  ShieldCheck,
  Award,
  Globe2,
  TrendingUp,
  ArrowRight,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Leaf,
  Factory,
  TreePine,
  RefreshCcw,
  FileCheck2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CIRCULIFE_INFO } from "@/lib/constants";

export const metadata = {
  title: "Tentang Kami | CircuLife : Digital Zero Waste & Waste-to-Value Hub",
  description:
    "Mengenal visi, misi, dan ekosistem CircuLife dalam merevolusi pengelolaan sampah menjadi produk bernilai tinggi untuk kompetisi EcoDigital.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Globe2 className="h-3.5 w-3.5" />
            <span>EcoDigital Web Innovation 2026</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
              Membangun Ekosistem Zero Waste Menuju Masa Depan Sirkular
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              CircuLife lahir sebagai platform terintegrasi untuk mengubah krisis sampah menjadi peluang ekonomi sirkular: menghubungkan pemilahan di hulu dengan pabrikasi paving block K-250 dan pupuk bio-kasgot di hilir.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/60">
            <div className="p-5 rounded-3xl bg-card border border-border/80 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                Total Sampah Terolah
              </span>
              <span className="text-2xl font-black text-foreground font-mono block mt-1 tabular-nums">
                {CIRCULIFE_INFO.managedWasteTons} Ton
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">Akumulasi nasional</span>
            </div>

            <div className="p-5 rounded-3xl bg-card border border-border/80 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                Eco-Paving Terpasang
              </span>
              <span className="text-2xl font-black text-foreground font-mono block mt-1 tabular-nums">
                {CIRCULIFE_INFO.pavingBlocksManufactured.toLocaleString("id-ID")}
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">Kekuatan K-250 teruji</span>
            </div>

            <div className="p-5 rounded-3xl bg-card border border-border/80 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                Mitra KSM Komunitas
              </span>
              <span className="text-2xl font-black text-primary font-mono block mt-1 tabular-nums">
                18 Kelompok
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">Pemberdayaan warga</span>
            </div>

            <div className="p-5 rounded-3xl bg-card border border-border/80 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                Reduksi Jejak Karbon
              </span>
              <span className="text-2xl font-black text-emerald-500 font-mono block mt-1 tabular-nums">
                {CIRCULIFE_INFO.co2eReductionTons} Ton
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">CO2e terhindar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-16 sm:py-20 border-b border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi Card */}
            <Card className="rounded-3xl border-border bg-card p-6 sm:p-8 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
                Visi CircuLife 2030
              </Badge>
              <CardTitle className="text-xl sm:text-2xl font-black text-foreground">
                Menjadi Platform Sirkularitas Sampah Berkelanjutan Nomor 1 di Indonesia
              </CardTitle>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mewujudkan peradaban tanpa sampah (zero-waste society) di mana setiap gram material sisa dimanfaatkan secara bertanggung jawab, menghasilkan nilai ekonomi mandiri bagi masyarakat, dan melindungi keanekaragaman hayati bumi.
              </p>
            </Card>

            {/* Misi Card */}
            <Card className="rounded-3xl border-border bg-card p-6 sm:p-8 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
                Misi Strategis Kami
              </Badge>
              <CardTitle className="text-xl sm:text-2xl font-black text-foreground">
                Tiga Langkah Nyata Transformasi Sampah
              </CardTitle>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Digitalisasi Penyetoran:</strong> Mempermudah warga mencatat, menimbang, dan memantau poin sampah secara real-time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Pabrikasi Terdesentralisasi:</strong> Mendirikan sentra produksi paving block dan biokonversi maggot BSF di tingkat lokal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Keadilan Insentif:</strong> Memastikan nilai ekonomi kembali langsung ke warga dalam bentuk sembako, bibit, atau uang tunai.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Filosofi Identitas & Logo Mark CircuLife */}
      <section className="py-16 sm:py-20 border-b border-border bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
              Sistem Identitas Visual
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Filosofi Logo & Makna Geometri Sirkularitas
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Konstruksi visual CircuLife dirancang secara matematis merepresentasikan siklus daur ulang tanpa akhir (closed-loop) dan pertumbuhan kehidupan baru.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Logo Presentation Tile */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-card border border-border/80 shadow-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-3xl bg-background border-2 border-primary/30 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <CircuLifeMark className="h-24 w-24 sm:h-28 sm:w-28" />
              </div>
              <div className="mt-6 text-center space-y-1">
                <span className="text-xl font-black tracking-tight text-foreground font-sans block">
                  CIRCULIFE
                </span>
                <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase block">
                  Closed-Loop Vector Mark v1.0
                </span>
              </div>
            </div>

            {/* Geometric Anatomy Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-primary block">
                  01. Kurva Möbius Huruf "C"
                </span>
                <h4 className="text-sm font-bold text-foreground">Alur Tertutup Closed-Loop</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Garis melengkung kontinu melambangkan rantai pasok sampah tanpa kebocoran: dari residu hulu kembali menjadi bahan baku bernilai.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-primary block">
                  02. Tunas Biosfer (Sprout Node)
                </span>
                <h4 className="text-sm font-bold text-foreground">Kelahiran Nilai & Energi</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ruang negatif di tengah membentuk siluet daun bertumbuh, mengilustrasikan pupuk bio-kasgot dan ekosistem hijau yang pulih.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-primary block">
                  03. Inti Biokatalis Putih
                </span>
                <h4 className="text-sm font-bold text-foreground">Titik Presisi Telemetri</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pusat lingkaran putih melambangkan transparansi penimbangan digital, pencatatan berat akurat, dan integritas data warga.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-primary block">
                  04. Palet Civic Forest
                </span>
                <h4 className="text-sm font-bold text-foreground">Harmoni Hutan & Telemetri</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Kombinasi Deep Canopy (#0E4436) dan Telemetry Emerald (#1BC483) memberikan kontras tinggi memenuhi standar aksesibilitas WCAG AAA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilar Fondasi Sirkularitas */}
      <section className="py-16 sm:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
              Metodologi & Standar
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Empat Pilar Fondasi Ekosistem CircuLife
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Integrasi teknologi modern dan kekuatan komunitas untuk memastikan siklus penanganan sampah tidak pernah terputus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl border border-border/80 bg-card space-y-3 hover:border-primary/40 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-foreground">Pemilahan Sumber</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Edukasi terarah untuk 3 kategori utama: anorganik padat (PET/kaleng), residu sachet bernilai, dan bahan organik basah.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-border/80 bg-card space-y-3 hover:border-primary/40 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-foreground">Logistik & Penimbangan</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Timbangan terkalibrasi presisi dengan sinkronisasi data telemetri, memberikan transparansi riwayat setor tanpa manipulasi.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-border/80 bg-card space-y-3 hover:border-primary/40 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-foreground">Pabrikasi Teruji Lab</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Produk paving block melalui uji mutu tekan K-250 dan pupuk kasgot diuji kandungan NPK agar ramah bagi tanah dan tanaman.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-border/80 bg-card space-y-3 hover:border-primary/40 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-foreground">Dampak & Pelaporan</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Konversi otomatis metrik sampah ke reduksi gas rumah kaca (CO2e equivalent) sesuai standar metodologi IPCC lingkungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matriks Keselarasan SDG PBB */}
      <section className="py-16 sm:py-24 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
              <Globe2 className="h-3.5 w-3.5" />
              <span>Agenda Pembangunan Berkelanjutan Global 2030</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Matriks Keselarasan SDG PBB
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              CircuLife merancang setiap modul operasional agar terukur langsung terhadap target indikator Sustainable Development Goals PBB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SDG 12 */}
            <Card className="rounded-3xl border-border bg-card p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black font-mono text-lg">
                    12
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px] font-bold uppercase border-amber-500/30 text-amber-600 dark:text-amber-400">
                    Target 12.5
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-black text-foreground leading-snug">
                    SDG 12: Konsumsi & Produksi Bertanggung Jawab
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Substansial mengurangi timbulan sampah melalui pencegahan, pengurangan, daur ulang, dan penggunaan kembali.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-muted/50 border border-border/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground font-bold">Landfill Diversion :</span>
                    <span className="font-black text-foreground">78.4%</span>
                  </div>
                  <div className="w-full bg-border/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "78.4%" }} />
                  </div>
                  <span className="text-[11px] text-muted-foreground block">
                    142.5 Ton sampah dialihkan menjadi 18.400 paving block K-250 dan pupuk organik.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/70 flex items-center gap-2 text-xs font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Pencatatan hulu transparan via bank sampah digital</span>
              </div>
            </Card>

            {/* SDG 13 */}
            <Card className="rounded-3xl border-border bg-card p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black font-mono text-lg">
                    13
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px] font-bold uppercase border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    Target 13.3
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-black text-foreground leading-snug">
                    SDG 13: Penanganan Perubahan Iklim
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Meningkatkan pendidikan, penumbuhan kesadaran, serta kapasitas manusia dan institusi dalam mitigasi dampak iklim.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-muted/50 border border-border/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground font-bold">Reduksi Emisi CO2e :</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400">68.2 Ton</span>
                  </div>
                  <div className="w-full bg-border/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: "85%" }} />
                  </div>
                  <span className="text-[11px] text-muted-foreground block">
                    Penangkapan gas metana bio-digester dan penghentian pembakaran sampah terbuka liar.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/70 flex items-center gap-2 text-xs font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Kalkulasi otomatis metodologi IPCC emisi karbon</span>
              </div>
            </Card>

            {/* SDG 15 */}
            <Card className="rounded-3xl border-border bg-card p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black font-mono text-lg">
                    15
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px] font-bold uppercase border-blue-500/30 text-blue-600 dark:text-blue-400">
                    Target 15.2
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-black text-foreground leading-snug">
                    SDG 15: Ekosistem Daratan & Konservasi
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Menghentikan deforestasi, memulihkan lahan kritis terdegradasi, dan mencegah kepunahan satwa flora endemik.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-muted/50 border border-border/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground font-bold">Bibit Pohon Tertanam :</span>
                    <span className="font-black text-blue-600 dark:text-blue-400">1.250 Pohon</span>
                  </div>
                  <div className="w-full bg-border/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "92%" }} />
                  </div>
                  <span className="text-[11px] text-muted-foreground block">
                    Penghijauan koridor tangkapan air memakai pupuk bio-kasgot bernutrisi makro tinggi.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/70 flex items-center gap-2 text-xs font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Restorasi vegetasi tanah tanpa residu pupuk kimia sintetis</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Arsitektur Alur Sistem Sirkular Tertutup */}
      <section className="py-16 sm:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
              Rantai Pasok Tertutup Tanpa Residu
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Arsitektur Alur Sistem Sirkular Tertutup
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Bagaimana material sampah bergerak dari limbah domestik hulu hingga kembali ke masyarakat sebagai infrastruktur dan energi terbarukan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-3xl bg-card border border-border/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-primary px-2 py-0.5 rounded-full bg-primary/10">
                    Fase 01
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  Sumber Hulu & Pemilahan Warga
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Penyetoran sampah terpilah di drop point komunitas. Penimbangan akurat dengan konversi poin transparan.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Output: Sampah PET bersih, sachet, & residu organik
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-3xl bg-card border border-border/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Factory className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-primary px-2 py-0.5 rounded-full bg-primary/10">
                    Fase 02
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  Pabrikasi & Biokonversi Terpadu
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pelelehan polimer PET suhu 210°C untuk paving block, dan fermentasi anaerobik sisa makanan di reaktor bio-digester.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Output: Paving cetak, pupuk kasgot, & biogas CH4
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-3xl bg-card border border-border/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-primary px-2 py-0.5 rounded-full bg-primary/10">
                    Fase 03
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  Validasi Mutu & Uji Teknis SNI
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pengujian mekanika tekan 25 MPa (K-250), serapan air di bawah 3%, dan verifikasi bebas racun lindi logam berat TCLP.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Output: Sertifikasi SNI & lembar uji mutu publik
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-3xl bg-card border border-border/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <TreePine className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-primary px-2 py-0.5 rounded-full bg-primary/10">
                    Fase 04
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  Pemanfaatan Komunitas & Regenerasi
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Paving block dipasang di jalan setapak desa, pupuk diaplikasikan pada bibit reboisasi mata air, poin ditukar sembako.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Output: Nilai ekonomi warga & perlindungan biosfer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            Ingin Mengintegrasikan CircuLife di Lingkungan Anda?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kami membuka kemitraan seluas-luasnya untuk sekolah, universitas, pengelola perumahan, dan pemerintah daerah.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full h-11 px-6 font-bold gap-2")}
            >
              <HeartHandshake className="h-4 w-4" />
              <span>Hubungi Tim Kemitraan</span>
            </Link>
            <Link
              href="/galeri"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full h-11 px-6 font-bold gap-2 border-border/80")}
            >
              <span>Jelajahi Galeri Produk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
