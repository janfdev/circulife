"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CIRCULIFE_ARTICLES,
  CIRCULIFE_GALLERY,
  CIRCULAR_PRODUCTS,
} from "@/lib/constants";
import {
  BookOpen,
  Image as ImageIcon,
  Sparkles,
  Layers,
  ArrowRight,
  Clock,
  User,
  Tag,
  CheckCircle2,
  ExternalLink,
  Filter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CircularProductCatalog from "@/components/CircularProductCatalog";

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState<"semua" | "galeri" | "artikel" | "produk">("semua");
  const [selectedArticleCategory, setSelectedArticleCategory] = useState<string>("ALL");

  const filteredArticles =
    selectedArticleCategory === "ALL"
      ? CIRCULIFE_ARTICLES
      : CIRCULIFE_ARTICLES.filter((a) => a.category === selectedArticleCategory);

  const articleCategories = ["ALL", "PANDUAN", "TEKNOLOGI", "ORGANIK", "UPCYCLING"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Pusat Konten, Artikel & Galeri Transformasi</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
              Eksplorasi Inovasi, Dokumentasi & Produk Zero Waste
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Jelajahi panduan praktis gaya hidup minim sampah, dokumentasi proses pengolahan limbah menjadi material bernilai tinggi, dan etalase karya sirkular komunitas binaan CircuLife.
            </p>
          </div>

          {/* Navigation Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <Button
              variant={activeTab === "semua" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("semua")}
              className="rounded-xl text-xs font-bold font-mono"
            >
              Semua Konten ({CIRCULIFE_ARTICLES.length + CIRCULIFE_GALLERY.length + CIRCULAR_PRODUCTS.length})
            </Button>
            <Button
              variant={activeTab === "galeri" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("galeri")}
              className="rounded-xl text-xs font-bold font-mono gap-1.5"
            >
              <ImageIcon className="h-3.5 w-3.5" />
              <span>Galeri Transformasi ({CIRCULIFE_GALLERY.length})</span>
            </Button>
            <Button
              variant={activeTab === "artikel" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("artikel")}
              className="rounded-xl text-xs font-bold font-mono gap-1.5"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Artikel & Panduan ({CIRCULIFE_ARTICLES.length})</span>
            </Button>
            <Button
              variant={activeTab === "produk" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("produk")}
              className="rounded-xl text-xs font-bold font-mono gap-1.5"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Katalog Produk ({CIRCULAR_PRODUCTS.length})</span>
            </Button>
          </div>
        </div>
      </section>

      {/* 1. Galeri Dokumentasi Visual Section */}
      {(activeTab === "semua" || activeTab === "galeri") && (
        <section id="galeri-section" className="py-16 sm:py-20 border-b border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary mb-2">
                  Dokumentasi Lapangan
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                  Galeri Transformasi Limbah Menjadi Nilai
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Bukti nyata proses pengolahan limbah plastik, kaleng logam, dan biokonversi kasgot di sentra binaan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CIRCULIFE_GALLERY.map((item) => (
                <Card
                  key={item.id}
                  className="rounded-3xl border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Placeholder / Mock Frame with Tag */}
                    <div className="h-48 bg-gradient-to-br from-primary/15 via-primary/5 to-muted relative flex items-center justify-center p-6 border-b border-border/60">
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="font-mono text-[10px] font-bold uppercase">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="h-12 w-12 rounded-2xl bg-card border border-border/80 shadow-sm mx-auto flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <ImageIcon className="h-6 w-6" />
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground block">
                          Dokumentasi Terverifikasi KSM
                        </span>
                      </div>
                    </div>

                    <CardHeader className="p-5 pb-3 space-y-2">
                      <CardTitle className="text-base font-bold text-foreground leading-snug">
                        {item.title}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardHeader>
                  </div>

                  <CardFooter className="p-5 pt-3 border-t border-border/40 bg-muted/20 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Tervalidasi ISO
                    </span>
                    <span className="text-xs font-mono font-bold text-primary">
                      {item.wasteTransformed}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. Artikel & Panduan Edukasi Section */}
      {(activeTab === "semua" || activeTab === "artikel") && (
        <section id="artikel-section" className="py-16 sm:py-20 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary mb-2">
                  Edukasi & Literasi
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                  Artikel & Panduan Praktis Zero Waste
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Kumpulan ulasan ilmiah populer dan tutorial pemilahan sampah untuk dipraktikkan langsung di rumah.
                </p>
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-1.5">
                {articleCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedArticleCategory(cat)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors",
                      selectedArticleCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="rounded-3xl border-border bg-card p-6 sm:p-7 space-y-4 hover:border-primary/40 transition-colors shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <Badge variant="secondary" className="font-mono text-[10px] font-bold uppercase">
                        {article.category}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-foreground tracking-tight leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-muted-foreground font-mono">
                      <User className="h-3.5 w-3.5 text-primary" />
                      <span>{article.author}</span>
                      <span>-</span>
                      <span>{article.date}</span>
                    </div>

                    <Link
                      href="/contact"
                      className="font-mono font-bold text-primary hover:underline inline-flex items-center gap-1 text-xs"
                    >
                      <span>Diskusi Topik</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Showcase Katalog Produk Olahan Bernilai Section */}
      {(activeTab === "semua" || activeTab === "produk") && (
        <section id="produk-section" className="py-16 sm:py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <Badge variant="outline" className="font-mono text-xs uppercase border-primary/30 text-primary mb-2">
                Katalog Produk Olahan
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                Etalase Produk Sirkular Nilai Tambah
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Seluruh produk di bawah ini dihasilkan dari konversi sampah terpilah masyarakat dan KSM mitra CircuLife.
              </p>
            </div>

            <CircularProductCatalog />
          </div>
        </section>
      )}
    </div>
  );
}
