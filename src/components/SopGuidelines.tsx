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
        "Berdasarkan SK Balai TNGC, setiap pendaki diwajibkan mencatatkan daftar bawaan logistik saat pemeriksaan tas pra-pendakian di pos awal dan membawa kembali seluruh kemasannya saat turun.",
      keyRules: [
        "Repacking bahan makanan kering dari bungkus plastik sekali pakai ke dalam kotak makan (food container) guna ulang sebelum mendaki.",
        "Dilarang membawa botol air sekali pakai ukuran mini (kurang dari 600 ml) dan tisu basah non-biodegradable.",
        "Jumlah kemasan yang dibawa naik wajib cocok dengan sampah yang ditimbang saat kembali di posko registrasi.",
      ],
      faqs: "Mengapa tisu basah dilarang? Tisu basah mengandung serat sintetis plastik poliester yang tidak terurai puluhan tahun di tanah dingin pegunungan.",
    },
    {
      id: "sop-2",
      number: "02",
      icon: Layers,
      category: "Pemilahan Jalur",
      title: "SOP Pemilahan Sampah Terpadu: Clean, Dry, and Separate",
      description:
        "Pisahkan jenis sampah sejak di dalam tenda agar material anorganik tetap bernilai tinggi saat didaur ulang menjadi paving block dan cinderamata KSM.",
      keyRules: [
        "Kosongkan dan remas botol plastik PET hingga pipih guna menghemat volume trash bag pendakian.",
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
      title: "Protokol Penanganan Limbah Kaleng Gas & Asbak Saku Sachet",
      description:
        "Kaleng gas kompor portabel bekas bertekanan sisa dan puntung rokok memerlukan perlakuan khusus demi keselamatan dan kebersihan jalur.",
      keyRules: [
        "Dilarang menusuk atau membakar kaleng gas di area kemping; gas sisa rawan meledak jika terkena panas.",
        "Simpan kaleng gas kosong di kompartemen luar ransel dan serahkan langsung ke drop-box B3 di pos registrasi.",
        "Gunakan wadah asbak saku portabel (pocket ashtray) tertutup untuk menampung puntung dan abu hingga turun ke posko.",
      ],
      faqs: "Apa yang dilakukan pengelola terhadap kaleng gas bekas? Kaleng dikosongkan sisa gasnya secara aman di posko lalu dilebur dan dicetak menjadi tungku ultralight.",
    },
    {
      id: "sop-4",
      number: "04",
      icon: Ban,
      category: "Larangan Keras",
      title: "Larangan Mutlak Pembakaran & Penimbunan Sampah di Kawasan TNGC",
      description:
        "Membakar atau mengubur sampah di area shelter, savana, maupun puncak Ciremai merupakan tindak perusakan lingkungan yang dikenakan sanksi tegas.",
      keyRules: [
        "Pembakaran sampah plastik menghasilkan asap beracun dioksin dan memicu risiko kobaran karhutla di semak kering lereng.",
        "Menimbun sampah organik atau anorganik mengundang satwa babi hutan masuk ke area kemping dan merusak tanah resapan air.",
        "Pelanggar dikenakan denda pembersihan jalur secara sukarela dan sanksi blacklist di seluruh gerbang pendakian.",
      ],
      faqs: "Bolehkah mengubur sisa nasi di tanah? Dilarang. Suhu dingin puncak Ciremai menghambat pembusukan dan mengubah kebiasaan mencari makan satwa liar.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border pb-6 space-y-2">
        <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
          Pedoman Sirkular Rimba
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          SOP Gunung Bebas Sampah : Standar Resmi Pengunjung TNGC
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kompilasi protokol resmi pemilahan logistik, penukaran sampah TITO, dan tanya jawab pelestarian ekosistem Ciremai.
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
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-primary/10 text-primary border-primary/30" : "text-muted-foreground"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Accordion Content Body */}
              {isOpen && (
                <div className="px-6 pb-6 pt-0 border-t border-border/40 mt-2 space-y-5 animate-in fade-in-50 duration-200">
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
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
