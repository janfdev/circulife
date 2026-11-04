import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIREMAI GUARD : Digital Forest Protection & Environmental Awareness Platform",
  description:
    "Platform digital edukasi, mitigasi karhutla, pelaporan cepat indikasi kebakaran, dan pelestarian ekosistem kawasan Taman Nasional Gunung Ciremai (3.078 mdpl), Jawa Barat.",
  keywords: [
    "Gunung Ciremai",
    "Taman Nasional Gunung Ciremai",
    "TNGC",
    "Karhutla Ciremai",
    "Pencegahan Kebakaran Hutan",
    "Lapor Kebakaran Hutan",
    "Konservasi Lingkungan",
    "Jalur Palutungan",
    "Jalur Apuy",
    "Jalur Linggarjati",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("scroll-smooth", poppins.variable, "font-sans")}>
      <body className="antialiased flex flex-col min-h-screen font-sans bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
