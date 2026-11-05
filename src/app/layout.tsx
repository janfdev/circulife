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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://circulife.abyte.my.id"),
  title: {
    default: "CircuLife : Digital Zero Waste & Waste-to-Value Hub",
    template: "%s | CircuLife",
  },
  description:
    "Platform digital zero waste dan ekosistem sirkular pemanfaatan sampah terpadu: dari botol plastik menjadi paving block K-250, kaleng logam menjadi tungku biomassa, dan sisa makanan menjadi kompos kasgot. EcoDigital Web Design Competition.",
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
  authors: [{ name: "CircuLife EcoDigital Team" }],
  creator: "CircuLife",
  publisher: "CircuLife",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "CircuLife : Digital Zero Waste & Waste-to-Value Hub",
    description:
      "Platform digital closed-loop sirkularitas terpadu: transformasi limbah hulu-hilir menjadi material berstandar SNI dan ramah lingkungan.",
    url: "https://circulife.abyte.my.id",
    siteName: "CircuLife",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CircuLife : Digital Zero Waste & Value Hub",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CircuLife : Digital Zero Waste & Waste-to-Value Hub",
    description:
      "Platform digital closed-loop sirkularitas terpadu: transformasi limbah hulu-hilir menjadi material berstandar SNI.",
    images: ["/opengraph-image.png"],
    creator: "@circulife",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("scroll-smooth", poppins.variable, "font-sans")}>
      <head>
        <meta name="theme-color" content="#0E4436" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
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
