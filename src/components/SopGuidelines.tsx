import React from "react";
import { Flame, Ban, ShieldCheck, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SopGuidelines() {
  const guidelines = [
    {
      id: "sop-1",
      number: "01",
      icon: Ban,
      title: "Larangan Mutlak Api Unggun & Pembakaran Sampah",
      description:
        "Berdasarkan UU Konservasi dan SK Kepala Balai TNGC, segala bentuk perapian terbuka (open fire), api unggun kayu, maupun pembakaran sisa logistik dilarang keras di seluruh zona rimba dan jalur pendakian.",
      keyRules: [
        "Kayu kering di lereng Ciremai merupakan biomassa yang sangat mudah tersulut angin kencang",
        "Sanksi denda pidana kehutanan dan blacklist permanen di seluruh jalur pendakian",
        "Gunakan pakaian berlapis (layering system) dan sleeping bag tebal untuk menahan dingin",
      ],
    },
    {
      id: "sop-2",
      number: "02",
      icon: Flame,
      title: "Prosedur Penggunaan Kompor Gas Lapangan",
      description:
        "Memasak makanan hangat diizinkan hanya dengan kompor gas kanister portabel bertipe ulir resmi, dengan kepatuhan zona shelter yang terlindung dari terpaan angin.",
      keyRules: [
        "Nyalakan kompor hanya di dalam shelter atau area terbuka berpasir yang bersih dari dedaunan kering",
        "Gunakan windshield pelindung angin untuk mencegah lidah api menjilat ilalang kering",
        "Pastikan katup regulator tertutup rapat dan tabung telah dingin sempurna sebelum dimasukkan ke tas",
      ],
    },
    {
      id: "sop-3",
      number: "03",
      icon: AlertTriangle,
      title: "Manajemen Bara Rokok & Sampah Anorganik",
      description:
        "Puntung rokok yang masih menyala merupakan salah satu penyebab utama kebakaran savana lereng barat Ciremai saat kemarau ekstrem.",
      keyRules: [
        "Dilarang merokok saat berjalan di jalur pendakian yang dikelilingi semak kering",
        "Matikan bara rokok sepenuhnya dengan menekan ke batu dan tetesi air hingga dingin",
        "Wajib membawa asbak saku portabel (pocket ashtray) dan membawa pulang seluruh sampah puntung",
      ],
    },
    {
      id: "sop-4",
      number: "04",
      icon: ShieldCheck,
      title: "Prosedur Evakuasi Cepat Terjebak Asap",
      description:
        "Jika terperangkap dalam situasi karhutla aktif saat berada di trek elevasi tinggi, ikuti protokol penyelamatan diri posko.",
      keyRules: [
        "Jangan berlari ke arah lereng atas karena panas dan api menjalar jauh lebih cepat ke punggungan",
        "Segera bergerak melintang tegak lurus terhadap arah tiupan angin untuk keluar dari koridor asap",
        "Basahi buff masker atau kain dengan air minum untuk melindungi saluran pernapasan dari karbon monoksida",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <Badge variant="outline" className="mb-2 text-xs font-bold uppercase tracking-wider text-primary border-primary/30">
          Pedoman Keselamatan Hutan
        </Badge>
        <h2 className="text-2xl font-black text-foreground">
          SOP Rimba Bebas Api : Standar Resmi Pengunjung TNGC
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Wajib dipatuhi oleh seluruh pendaki, pemandu lokal, dan peneliti yang beraktivitas di kawasan konservasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidelines.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              className="p-6 sm:p-7 shadow-sm flex flex-col justify-between rounded-2xl transition-all hover:border-primary/40"
            >
              <div>
                <CardHeader className="p-0 mb-4 flex flex-row items-center justify-between space-y-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-sm font-black text-muted-foreground/50 tabular-nums">
                    {item.number}
                  </span>
                </CardHeader>

                <CardTitle className="text-base font-bold text-foreground mb-2 leading-snug">
                  {item.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-border/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-foreground block">
                    Aturan Wajib:
                  </span>
                  <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 leading-normal">
                    {item.keyRules.map((rule, rIdx) => (
                      <li key={rIdx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
