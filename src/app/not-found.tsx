import Link from "next/link";
import { ArrowLeft, Home, RefreshCw, AlertTriangle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "404 - Halaman Tidak Ditemukan | CircuLife",
  description: "Halaman yang Anda cari tidak tersedia dalam direktori ekonomi sirkular CircuLife.",
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-3">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 border-amber-500/30 rounded-full"
          >
            <AlertTriangle className="h-3.5 w-3.5 mr-1.5" />
            <span>Kode Status: 404 Terdeteksi</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tautan yang Anda tuju mungkin telah dipindahkan atau berada di luar rute resmi sistem sirkularitas CircuLife.
          </p>
        </div>

        <div className="p-4 rounded-2xl border border-border/80 bg-muted/30 font-mono text-xs text-muted-foreground space-y-1 text-left">
          <div className="flex justify-between">
            <span>SISTEM:</span>
            <span className="text-foreground font-bold">CIRCULIFE TITO</span>
          </div>
          <div className="flex justify-between">
            <span>STATUS JALUR:</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">NON-EXISTENT</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto h-11 px-6 text-xs font-bold rounded-full gap-2 shadow-sm"
            )}
          >
            <Home className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/lapor"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto h-11 px-6 text-xs font-bold rounded-full gap-2 border-border/80"
            )}
          >
            <RefreshCw className="h-4 w-4" />
            <span>Setor Sampah</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
