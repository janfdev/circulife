"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { PackageCheck, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CircularCtaSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-background border-t border-border/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl bg-card text-card-foreground border border-border shadow-xl dark:shadow-2xl"
      >
        {/* Subtle Ambient Organic Light Accent */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-emerald-500/15 via-emerald-600/10 to-transparent dark:from-emerald-600/25 dark:via-emerald-700/10 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-emerald-400/10 via-teal-500/10 to-transparent dark:from-emerald-500/15 dark:via-teal-600/10 rounded-full blur-3xl opacity-70" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 lg:px-20 flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge
              variant="outline"
              className="gap-2 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-primary border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Gerakan Nasional Zero Waste 2026</span>
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12] mb-6 max-w-4xl"
          >
            Siap Mengubah Sampah Rumah Anda Menjadi Material Bernilai?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Pilah botol plastik, kaleng logam, dan sampah dapur Anda hari ini. Setorkan ke drop-point CircuLife terdekat dan tukarkan dengan paving block jalan warga atau bibit tanaman siap tanam.
          </motion.p>

          {/* Interactive Animated Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-8 w-full sm:w-auto"
          >
            {/* Primary Action Button */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto rounded-full"
            >
              <Link
                href="/lapor"
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm tracking-wide rounded-full transition-all duration-200 cursor-pointer shadow-md w-full sm:w-auto"
              >
                <PackageCheck className="h-4 w-4" />
                <span>Mulai Setor Sampah Sekarang</span>
              </Link>
            </motion.div>

            {/* Secondary Action Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto rounded-full"
            >
              <Link
                href="/pantau"
                className="flex items-center justify-center gap-2 px-8 py-3.5 border border-border/80 bg-background/50 hover:bg-muted text-foreground font-bold text-sm tracking-wide rounded-full transition-all duration-200 cursor-pointer w-full sm:w-auto shadow-xs"
              >
                <span>Hitung Nilai Daur Ulang</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Footnote details */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground border-t border-border/70 pt-6"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>24 Drop Point Warga Aktif</span>
            </span>
            <span className="text-border">|</span>
            <span>Penimbangan Digital Akurat</span>
            <span className="text-border">|</span>
            <span className="text-primary font-semibold">Bebas Biaya Retribusi</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}