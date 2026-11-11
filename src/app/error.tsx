"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to diagnostic collector
    console.error("CircuLife App Error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-3">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-destructive border-destructive/30 rounded-full"
          >
            <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
            <span>Kendala Komputasi Runtime</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Terjadi Kesalahan Sistem
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Modul sistem mengalami gangguan saat merender data sirkular. Silakan coba muat ulang sesi Anda.
          </p>
        </div>

        {error.digest && (
          <div className="p-3 rounded-xl border border-destructive/20 bg-destructive/5 font-mono text-[11px] text-destructive">
            KODE DIGEST: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => reset()}
            className="w-full sm:w-auto h-11 px-6 text-xs font-bold rounded-full gap-2 shadow-sm"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Muat Ulang Komponen</span>
          </Button>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto h-11 px-6 text-xs font-bold rounded-full gap-2 border-border/80"
            )}
          >
            <Home className="h-4 w-4" />
            <span>Ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
