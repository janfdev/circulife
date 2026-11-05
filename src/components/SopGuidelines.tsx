"use client";

import React, { useState } from "react";
import { Flame, Ban, ShieldCheck, AlertTriangle, ChevronDown, CheckCircle2, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SopGuidelines() {
  const [openId, setOpenId] = useState<string>("sop-1");

  const guidelines = [
    {
      id: "sop-1",
      number: "01",
      icon: Ban,
      category: "Larangan Keras",
      title: "Larangan Mutlak Api Unggun & Pembakaran Sampah di Seluruh Jalur",
      description:
        "Berdasarkan UU Konservasi No. 5/1990 dan SK Kepala Balai TNGC, segala bentuk perapian terbuka (open fire), api unggun kayu, maupun pembakaran sisa logistik dilarang keras di seluruh zona rimba dan jalur pendakian.",
      keyRules: [
        "Kayu dan ranting kering di lereng Ciremai merupakan biomassa yang sangat mudah tersulut angin kencang.",
        "Sanksi denda pidana kehutanan dan blacklist permanen di seluruh pintu registrasi pendakian Jawa Barat.",
        "Gunakan pakaian berlapis (layering system) dan sleeping bag berstandar kenyamanan sub-zero untuk menahan dingin.",
      ],
      faqs: "Mengapa api unggun dilarang meski di pos camp? Udara lereng Ciremai memiliki kelembaban rendah saat malam kemarau, tiupan angin gunung dapat menerbangkan bara api sejauh ratusan meter ke semak kering.",
    },
    {
      id: "sop-2",
      number: "02",
      icon: Flame,
      category: "Prosedur Memasak",
      title: "Prosedur Aman Penggunaan Kompor Gas Lapangan & Shelter",
      description:
        "Memasak makanan hangat diizinkan hanya dengan kompor gas kanister portabel bertipe ulir resmi, dengan kepatuhan penempatan di zona shelter yang terlindung dari terpaan angin lereng.",
      keyRules: [
        "Nyalakan kompor hanya di dalam shelter atau area terbuka berpasir yang bersih dari dedaunan kering.",
        "Gunakan windshield pelindung angin untuk mencegah lidah api menjilat ilalang atau tenda sekitar.",
        "Pastikan katup regulator tertutup rapat dan tabung telah dingin sempurna sebelum dimasukkan ke tas pendakian.",
      ],
      faqs: "Bolehkah menggunakan bahan bakar spirtus / parafin? Dilarang keras. Bahan bakar cair dan parafin padat memiliki stabilitas rendah dan rawan tumpah membakar alas tenda.",
    },
    {
      id: "sop-3",
      number: "03",
      icon: AlertTriangle,
      category: "Manajemen Resiko",
      title: "Protokol Puntung Rokok, Korek Api, dan Sampah Kaleng Gas",
      description:
        "Puntung rokok yang masih menyala merupakan salah satu penyebab utama kebakaran savana lereng barat Ciremai saat kemarau ekstrem.",
      keyRules: [
        "Dilarang merokok saat berjalan di jalur pendakian yang dikelilingi semak dan ilalang kering.",
        "Matikan bara rokok sepenuhnya dengan menekan ke batu dan tetesi air hingga dingin tak berasap.",
        "Wajib membawa asbak saku portabel (pocket ashtray) dan membawa pulang seluruh sampah kaleng gas.",
      ],
      faqs: "Bagaimana cara membuang kaleng gas portabel bekas? Jangan menusuk atau melubangi kaleng gas di gunung. Bawa turun kembali ke pos registrasi untuk ditampung pada drop-box limbah B3 posko.",
    },
    {
      id: "sop-4",
      number: "04",
      icon: ShieldCheck,
      category: "Darurat Evakuasi",
      title: "Prosedur Penyelamatan Diri & Evakuasi Cepat Terjebak Asap",
      description:
        "Jika terperangkap dalam situasi karhutla aktif saat berada di trek elevasi tinggi, prioritaskan penyelamatan jiwa dengan mengikuti protokol lapangan posko balai.",
      keyRules: [
        "Jangan berlari ke arah lereng atas karena lidah api dan gelombang panas menjalar jauh lebih cepat ke punggungan puncak.",
        "Segera bergerak melintang tegak lurus terhadap arah tiupan angin untuk keluar dari koridor asap tebal.",
        "Basahi buff masker atau kain dengan air minum untuk melindungi saluran pernapasan dari gas karbon monoksida beracun.",
      ],
      faqs: "Siapa yang harus pertama kali dihubungi? Hubungi Posko Balai TNGC via panggilan darurat 112 atau hotline 24 jam pos registrasi jalur tempat Anda mendaftar.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border pb-6 space-y-2">
        <Badge variant="outline" className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30">
          Pedoman Keselamatan Hutan
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          SOP Rimba Bebas Api : Standar Resmi Pengunjung TNGC
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Kompilasi protokol resmi pencegahan karhutla dan tanya jawab mitigasi darurat bagi seluruh pendaki, pemandu lokal, dan peneliti.
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
