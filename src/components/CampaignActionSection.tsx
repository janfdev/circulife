import React from "react";
import Link from "next/link";
import { Trash2, Sprout, Users, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CampaignActionSection() {
  const actions = [
    {
      id: "bersih-jalur",
      icon: Trash2,
      title: "Gerakan Sapu Gunung & Audit Sampah Plastik",
      description:
        "Bawa kembali seluruh logistik pendakian ke pos bawah. Dilarang meninggalkan sampah anorganik dan kaleng bahan bakar gas yang berpotensi meledak saat terpapar panas.",
      actionLabel: "Lihat Panduan Etika Rimba",
      href: "/edukasi",
      badge: "SOP Wajib Pendaki",
    },
    {
      id: "adopsi-pohon",
      icon: Sprout,
      title: "Adopsi Pohon Saninten & Pinus Endemik",
      description:
        "Dukung penanaman pohon pionir di zona rehabilitasi lereng Ciremai yang terdampak karhutla musim kemarau sebelumnya untuk mengembalikan fungsi resapan air.",
      actionLabel: "Pelajari Program Adopsi",
      href: "/konservasi",
      badge: "Pemulihan Ekosistem",
    },
    {
      id: "patroli-mpa",
      icon: Users,
      title: "Kolaborasi Masyarakat Peduli Api (MPA)",
      description:
        "Bergabung bersama relawan posko desa penyangga dan regu ranger balai dalam ronda pemantauan titik api, penyuluhan petani lereng, dan respon cepat pemadaman.",
      actionLabel: "Hubungi Posko Relawan",
      href: "/pantau",
      badge: "Aksi Partisipatif",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-border bg-background" aria-labelledby="campaign-actions-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <Badge variant="outline" className="mb-2 text-xs font-bold uppercase tracking-wider text-primary border-primary/30">
            Aksi Peduli Lingkungan Ciremai
          </Badge>
          <h2 id="campaign-actions-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            3 Langkah Nyata Setiap Pengunjung & Warga Untuk Menjaga Hutan
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Menjaga kawasan konservasi tidak hanya tugas petugas posko. Setiap langkah kecil pendaki dan masyarakat menentukan masa depan ekosistem lereng Ciremai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <Card
                key={act.id}
                className="flex flex-col justify-between shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <Badge variant="secondary" className="text-[11px] font-bold uppercase tracking-wider">
                        {act.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-lg font-bold text-foreground leading-snug">
                      {act.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {act.description}
                    </p>
                  </CardContent>
                </div>

                <CardFooter className="pt-3 border-t border-border/60">
                  <Link
                    href={act.href}
                    className={cn(
                      buttonVariants({ variant: "link", size: "sm" }),
                      "h-auto p-0 text-xs font-bold uppercase tracking-wider text-primary group"
                    )}
                  >
                    <span>{act.actionLabel}</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
