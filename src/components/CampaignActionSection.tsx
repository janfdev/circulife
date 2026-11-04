import React from "react";
import Link from "next/link";
import { Trash2, Sprout, Users, ArrowRight } from "lucide-react";

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
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
            Aksi Peduli Lingkungan Ciremai
          </span>
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
              <div
                key={act.id}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-100 text-forest-800 dark:bg-forest-900/60 dark:text-emerald-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      {act.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                    {act.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {act.description}
                  </p>
                </div>

                <Link
                  href={act.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline group"
                >
                  <span>{act.actionLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
