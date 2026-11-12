"use client";

import React, { useState } from "react";
import { CircuLifeMark } from "@/components/CircuLifeLogo";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  Building,
  Sparkles,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { CIRCULIFE_FAQS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "BANK_SAMPAH",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Email valid wajib diisi.";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan atau kebutuhan kerjasama wajib diisi.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="h-3.5 w-3.5" />
            <span>Pusat Komunikasi & Kemitraan Sirkular</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
              Hubungi Tim Kami & Mulai Kolaborasi Sirkular
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Punya pertanyaan seputar cara penyetoran sampah, ingin mendaftarkan bank sampah wilayah Anda, atau tertarik memesan produk eco-paving block untuk proyek perumahan? Kami siap mendengar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Direct Contact Info */}
      <section className="py-16 sm:py-20 border-b border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 cols: Form */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="rounded-3xl border-border bg-card shadow-md p-6 sm:p-8">
                <div className="space-y-2 mb-6">
                  <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
                    Form Kemitraan & Pesan
                  </Badge>
                  <CardTitle className="text-xl sm:text-2xl font-black text-foreground">
                    Kirimkan Pesan atau Ajukan Kerjasama
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Tim respon CircuLife akan menghubungi kembali dalam waktu maksimal 1x24 jam kerja.
                  </p>
                </div>

                {formSubmitted ? (
                  <Alert className="border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-bold text-base">Pesan Anda Berhasil Terkirim!</span>
                    </div>
                    <AlertDescription className="text-xs sm:text-sm leading-relaxed text-emerald-900 dark:text-emerald-300">
                      Terima kasih atas inisiatif Anda, {formData.name}. Tiket kemitraan telah diteruskan ke koordinator wilayah terkait. Kami akan menghubungi melalui WhatsApp/email Anda.
                    </AlertDescription>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFormSubmitted(false)}
                      className="rounded-xl text-xs font-mono font-bold mt-2 border-emerald-500/40"
                    >
                      Kirim Pesan Lainnya
                    </Button>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Nama Lengkap *
                        </label>
                        <Input
                          id="contact-name"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          placeholder="e.g. Fauzan Aditama"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          className={cn("rounded-xl h-11", errors.name && "border-destructive focus-visible:ring-destructive")}
                        />
                        {errors.name && (
                          <p id="contact-name-error" className="text-xs text-destructive font-medium" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Email *
                        </label>
                        <Input
                          id="contact-email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="fauzan@instansi.id"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          className={cn("rounded-xl h-11", errors.email && "border-destructive focus-visible:ring-destructive")}
                        />
                        {errors.email && (
                          <p id="contact-email-error" className="text-xs text-destructive font-medium" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-foreground">
                          No. WhatsApp / Telepon
                        </label>
                        <Input
                          id="contact-phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0812-XXXX-XXXX"
                          className="rounded-xl h-11"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-category" className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Kategori Inisiatif
                        </label>
                        <select
                          id="contact-category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full h-11 rounded-xl border border-input bg-background px-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="BANK_SAMPAH">Kemitraan Bank Sampah / KSM</option>
                          <option value="SEKOLAH">Program Sekolah Adiwiyata</option>
                          <option value="PROPERTI">Pemesanan Paving Block Proyek</option>
                          <option value="INDIVIDU">Pertanyaan Warga / Drop-Point</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-city" className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Kota / Domisili
                      </label>
                      <Input
                        id="contact-city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Cirebon, Kuningan, Majalengka, Jakarta"
                        className="rounded-xl h-11"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Pesan atau Kebutuhan Kerjasama *
                      </label>
                      <Textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Tuliskan gambaran rencana kolaborasi, perkiraan timbulan sampah per minggu, atau pertanyaan detail..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        className={cn("rounded-xl text-xs", errors.message && "border-destructive focus-visible:ring-destructive")}
                      />
                      {errors.message && (
                        <p id="contact-message-error" className="text-xs text-destructive font-medium" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full sm:w-auto h-12 px-8 rounded-xl font-bold text-xs uppercase tracking-wider gap-2 shadow-md cursor-pointer"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Kirimkan Formulir</span>
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Right 5 cols: Direct Contact Info & Network Drop Point */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="rounded-3xl border-border bg-card shadow-sm p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card border border-border/80 shadow-sm ring-1 ring-primary/20 shrink-0">
                    <CircuLifeMark className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
                      Pusat Operasional
                    </Badge>
                    <CardTitle className="text-lg font-black text-foreground">
                      Sentra Koordinasi Sirkular Nasional
                    </CardTitle>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-muted/30 border border-border/60">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block font-mono">Kantor Sekretariat:</span>
                      <p className="text-muted-foreground mt-0.5 leading-relaxed">
                        Jl. Lingkungan Resik No. 12, Kompleks Sentra Inovasi Lingkungan, Jawa Barat 45153
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-muted/30 border border-border/60">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block font-mono">Surat Elektronik Resmi:</span>
                      <p className="text-muted-foreground mt-0.5">kemitraan@circulife.id</p>
                      <p className="text-muted-foreground">halo@circulife.id</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-muted/30 border border-border/60">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block font-mono">Hotline & WhatsApp Hub:</span>
                      <p className="text-muted-foreground mt-0.5">+62 821-2345-6789 (Senin - Sabtu)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-muted/30 border border-border/60">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block font-mono">Jam Operasional Drop-Point:</span>
                      <p className="text-muted-foreground mt-0.5">Setiap Hari: 07.00 - 18.00 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Seluruh penimbangan sampah di drop-point CircuLife diverifikasi digital ISO 14001.
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-16 sm:py-24 border-b border-border bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary">
              Pertanyaan yang Sering Diajukan
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Tanya Jawab Seputar Ekosistem CircuLife
            </h2>
            <p className="text-sm text-muted-foreground">
              Pelajari mekanisme penyetoran, standar kebersihan sampah, dan perhitungan reward sirkular.
            </p>
          </div>

          <Accordion className="w-full space-y-3">
            {CIRCULIFE_FAQS.map((faq, idx) => (
              <AccordionItem
                key={faq.id || `faq-${idx}`}
                value={faq.id || `faq-${idx}`}
                className="rounded-2xl border border-border/80 bg-card px-5 py-1.5 transition-all data-open:border-primary/50 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-foreground hover:no-underline py-4">
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
