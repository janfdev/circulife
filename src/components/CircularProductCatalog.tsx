"use client";

import React, { useState } from "react";
import { CircularProduct, ProductCategory } from "@/types";
import { CIRCULAR_PRODUCTS } from "@/lib/constants";
import { filterCircularProducts } from "@/lib/reportUtils";
import { Layers, Sprout, Flame, ShoppingBag, ArrowRight, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CircularProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "ALL">("ALL");
  const filteredProducts = filterCircularProducts(CIRCULAR_PRODUCTS, selectedCategory, "");

  const getCategoryIcon = (cat: ProductCategory) => {
    switch (cat) {
      case "PAVING":
        return <Layers className="h-4 w-4 text-primary" />;
      case "COMPOST":
        return <Sprout className="h-4 w-4 text-emerald-600" />;
      case "UPCYCLING":
        return <Flame className="h-4 w-4 text-amber-500" />;
      default:
        return <ShoppingBag className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Pills Filter */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-muted border border-border">
          <Button
            type="button"
            variant={selectedCategory === "ALL" ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedCategory("ALL")}
            className="h-9 px-3.5 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            Semua Produk ({CIRCULAR_PRODUCTS.length})
          </Button>
          <Button
            type="button"
            variant={selectedCategory === "PAVING" ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedCategory("PAVING")}
            className="h-9 px-3.5 gap-2 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <Layers className="h-4 w-4" aria-hidden="true" />
            <span>Paving Block PET</span>
          </Button>
          <Button
            type="button"
            variant={selectedCategory === "COMPOST" ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedCategory("COMPOST")}
            className="h-9 px-3.5 gap-2 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <Sprout className="h-4 w-4" aria-hidden="true" />
            <span>Kompos Bio-Kasgot</span>
          </Button>
          <Button
            type="button"
            variant={selectedCategory === "UPCYCLING" ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedCategory("UPCYCLING")}
            className="h-9 px-3.5 gap-2 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <Flame className="h-4 w-4" aria-hidden="true" />
            <span>Upcycle Logam</span>
          </Button>
        </div>

        <Badge variant="outline" className="text-xs font-mono font-bold uppercase px-3 py-1.5 border-primary/30 text-primary">
          Standar Sirkularitas Teruji
        </Badge>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.map((p) => (
          <Card
            key={p.id}
            className="flex flex-col justify-between rounded-2xl border-border bg-card shadow-xs hover:border-border/90 transition-all overflow-hidden group"
          >
            <div>
              {p.imageUrl && (
                <div className="h-36 w-full bg-muted overflow-hidden relative border-b border-border/60">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <Badge variant="secondary" className="text-[10px] font-mono font-bold uppercase backdrop-blur-md bg-background/80 px-2 py-0.5">
                      {p.pointsRequired} Poin
                    </Badge>
                  </div>
                </div>
              )}

              <CardHeader className="p-4 pb-2 border-b border-border/60 bg-muted/20 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    {getCategoryIcon(p.category)}
                    <span>{p.category}</span>
                  </span>
                  {!p.imageUrl && (
                    <div className="flex items-center gap-1.5">
                      <Badge variant="secondary" className="text-[10px] font-mono font-bold uppercase px-2 py-0.5">
                        {p.pointsRequired} Poin
                      </Badge>
                    </div>
                  )}
                </div>
                <CardTitle className="text-base font-black text-foreground leading-snug">
                  {p.name}
                </CardTitle>
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                  {p.description}
                </p>
              </CardHeader>

              <CardContent className="p-4 py-3 space-y-2.5 text-xs">
                {/* Raw Material Formula */}
                <div className="p-2 rounded-xl bg-muted/50 border border-border/60 font-mono">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
                    Bahan Baku Utama :
                  </span>
                  <span className="font-bold text-foreground block text-[11px] leading-tight">
                    {p.rawMaterial}
                  </span>
                </div>

                {/* Impact */}
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block mb-0.5">
                    Dampak Nyata :
                  </span>
                  <span className="font-semibold block text-[11px] leading-tight">
                    {p.impactMetric}
                  </span>
                </div>

                {/* Producer Unit */}
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground pt-0.5">
                  <HeartHandshake className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="truncate">Mitra: <strong className="text-foreground">{p.producerUnit}</strong></span>
                </div>
              </CardContent>
            </div>

            <CardFooter className="p-4 py-3 border-t border-border/60 bg-muted/15 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-muted-foreground block">
                  Nilai Komunitas
                </span>
                <span className="text-xs font-black font-mono tabular-nums text-foreground">
                  Rp {p.priceEstimateRp.toLocaleString("id-ID")}
                </span>
              </div>
              <a
                href="/lapor"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-7 px-3 text-xs font-bold gap-1 rounded-lg border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground")}
              >
                <span>Tukar</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
