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
  title: "CircuLife : Digital Zero Waste & Waste-to-Value Hub",
  description:
    "Platform digital zero waste dan ekosistem sirkular pemanfaatan sampah terpadu: dari botol plastik menjadi paving block K-250, kaleng logam menjadi tungku biomassa, dan sisa makanan menjadi kompos kasgot. Kompetisi Nasional EcoDigital Web Design.",
  keywords: [
    "Zero Waste",
    "CircuLife",
    "Bank Sampah Digital",
    "Pengelolaan Limbah",
    "EcoDigital",
    "Web Design Competition",
    "Eco-Paving Block",
    "Kompos Kasgot",
    "Upcycling Kaleng Logam",
    "Daur Ulang Plastik PET",
    "Ekonomi Sirkular",
    "Lingkungan Hidup",
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
