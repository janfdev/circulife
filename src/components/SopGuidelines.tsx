"use client";

import React, { useState } from "react";
import { Recycle, PackageCheck, Ban, Sparkles, ChevronDown, CheckCircle2, HelpCircle, Layers, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function SopGuidelines() {
  const [openId, setOpenId] = useState<string>("sop-1");

  const guidelines = [
    {
      id: "sop-1",
      number: "01",
      icon: PackageCheck,
      category: "Wajib Registrasi",
      title: "Protokol TITO (Trash In Trash Out) & Repacking Wadah Guna Ulang",
      description:
        "Berdasarkan standar operasional CircuLife, setiap warga dan mitra diwajibkan memilah logistik kemasan anorganik dari rumah dan menyetorkannya ke posko terdaftar.",
      keyRules: [
        "Repacking bahan makanan kering dari bungkus plastik sekali pakai ke dalam wadah guna ulang sebelum bepergian.",
        "Dilarang membuang botol air sekali pakai dan tisu basah non-biodegradable sembarangan.",
        "Jumlah kemasan yang disetorkan wajib dicatat dan ditimbang saat verifikasi di posko drop-point.",
      ],
      faqs: "Mengapa tisu basah dilarang? Tisu basah mengandung serat sintetis plastik poliester yang tidak terurai puluhan tahun di alam terbuka.",
    },
    {
      id: "sop-2",
      number: "02",
      icon: Layers,
      category: "Pemilahan Jalur",
      title: "SOP Pemilahan Sampah Terpadu: Clean, Dry, and Separate",
      description:
        "Pisahkan jenis sampah sejak di dalam rumah agar material anorganik tetap bernilai tinggi saat didaur ulang menjadi paving block dan cinderamata KSM.",
      keyRules: [
        "Kosongkan dan remas botol plastik PET hingga pipih guna menghemat volume penyimpanan.",
        "Pisahkan sisa makanan basah ke kantong tersendiri agar tidak mengotori kaleng dan plastik daur ulang.",
        "Keringkan sampah plastik makanan instan dari sisa minyak atau kuah sebelum dimasukkan ke kantong sampah.",
      ],
      faqs: "Apakah botol plastik kotor tetap diterima? Ya, namun botol bersih dan kering memiliki prioritas tinggi untuk langsung dicacah mesin ekstrusi desa.",
    },
    {
      id: "sop-3",
      number: "03",
      icon: Recycle,
      category: "Limbah Berbahaya",
      title: "Protokol Penanganan Limbah Kaleng Gas & Kemasan Residu",
      description:
        "Kaleng gas portabel bekas bertekanan sisa dan limbah residu memerlukan perlakuan khusus demi keselamatan lingkungan sekitar.",
      keyRules: [
        "Dilarang menusuk atau membakar kaleng gas secara sembarangan; gas sisa rawan meledak jika terkena panas.",
        "Simpan kaleng gas kosong di tempat terpisah dan serahkan langsung ke drop-box limbah kaleng di pos registrasi.",
        "Gunakan wadah khusus tertutup untuk menampung residu anorganik hingga dibawa ke posko.",
      ],
      faqs: "Apa yang dilakukan pengelola terhadap kaleng gas bekas? Kaleng dikosongkan sisa gasnya secara aman di posko lalu dilebur dan dicetak menjadi tungku biomassa ultralight.",
    },
    {
      id: "sop-4",
      number: "04",
      icon: Ban,
      category: "Larangan Keras",
      title: "Larangan Mutlak Pembakaran Terbuka & Pembuangan Sampah Liar",
      description:
        "Membakar atau membuang sampah sembarangan mencemari udara, merusak kualitas air tanah, dan melanggar ketentuan regulasi persampahan.",
      keyRules: [
        "Pembakaran sampah terbuka menghasilkan asap beracun dioksin dan partikel karsinogenik PM2.5.",
        "Membuang sampah anorganik ke selokan atau sungai mencemari ekosistem perairan dan memicu banjir.",
        "Pelanggar dikenakan sanksi tindak pidana lingkungan hidup sesuai UU No. 18 Tahun 2008.",
      ],
      faqs: "Bolehkah membakar sampah daun kering di pekarangan? Tidak disarankan. Sampah daun sebaiknya dicacah dan dikomposkan menggunakan biokonversi maggot BSF.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border pb-6 space-y-2">
        <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
          Pedoman Sirkular Zero Waste
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          SOP Ekosistem Bebas Sampah: Standar Operasional CircuLife
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kompilasi protokol resmi pemilahan logistik, penukaran sampah, dan tata kelola ekonomi sirkular ramah lingkungan.
        </p>
      </div>

      {/* BagUI-Inspired Interactive FAQ Accordion Block */}
      <div className="space-y-4">
        {guidelines.map((item) => {
          const Icon = item.icon;
          const isOpen = openId === item.id;

          return (
            <Card
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen ? "border-primary/50 shadow-md bg-card" : "border-border/80 bg-card/60 hover:border-primary/30"
              }`}
            >
              {/* Trigger button */}
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? "" : item.id)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-muted-foreground">
                        PROSEDUR {item.number}
                      </span>
                      <Badge variant="secondary" className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                        {item.category}
                      </Badge>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "rotate-180 bg-primary/10 text-primary border-primary/30" : "text-muted-foreground"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Accordion Content Body with Smooth Expand & Collapse */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 border-t border-border/40 mt-2 space-y-5">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-4">
                      {item.description}
                    </p>

                    <div className="p-4 rounded-xl bg-muted/40 border border-border/60 space-y-3 font-mono">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground block">
                        Aturan Wajib Lapangan :
                      </span>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {item.keyRules.map((rule, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="leading-relaxed">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1.5">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                        <HelpCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>F.A.Q Lapangan :</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.faqs}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
