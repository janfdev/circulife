"use client";

import React, { useState } from "react";
import { Species } from "@/types";
import { Search, Mountain, Leaf, Bird } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SpeciesDirectoryProps {
  speciesList: Species[];
}

export default function SpeciesDirectory({ speciesList }: SpeciesDirectoryProps) {
  const [categoryFilter, setCategoryFilter] = useState<"ALL" | "FAUNA" | "FLORA">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = speciesList.filter((s) => {
    // Category
    if (categoryFilter !== "ALL" && s.category !== categoryFilter) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchCommon = s.commonName.toLowerCase().includes(q);
      const matchScientific = s.scientificName.toLowerCase().includes(q);
      const matchDesc = s.description.toLowerCase().includes(q);
      if (!matchCommon && !matchScientific && !matchDesc) {
        return false;
      }
    }

    return true;
  });

  const getStatusBadge = (status: Species["conservationStatus"]) => {
    switch (status) {
      case "CRITICAL":
        return {
          label: "Kritis (CR)",
          variant: "destructive" as const,
          cls: "border-destructive/30 bg-destructive/10 text-destructive",
        };
      case "ENDANGERED":
        return {
          label: "Terancam (EN)",
          variant: "outline" as const,
          cls: "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
        };
      case "VULNERABLE":
        return {
          label: "Rentan (VU)",
          variant: "secondary" as const,
          cls: "border-yellow-500/30 bg-yellow-500/10 text-yellow-800 dark:text-yellow-300",
        };
      case "PROTECTED":
        return {
          label: "Dilindungi Penuh",
          variant: "outline" as const,
          cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
        };
      default:
        return {
          label: "Dilindungi",
          variant: "secondary" as const,
          cls: "",
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Search & Category Filter with generous margin */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8">
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-muted border border-border">
          <Button
            type="button"
            variant={categoryFilter === "ALL" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCategoryFilter("ALL")}
            className="h-9 px-3.5 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            Semua Spesies ({speciesList.length})
          </Button>
          <Button
            type="button"
            variant={categoryFilter === "FAUNA" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCategoryFilter("FAUNA")}
            className="h-9 px-3.5 gap-2 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <Bird className="h-4 w-4" aria-hidden="true" />
            <span>Fauna</span>
          </Button>
          <Button
            type="button"
            variant={categoryFilter === "FLORA" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCategoryFilter("FLORA")}
            className="h-9 px-3.5 gap-2 text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <Leaf className="h-4 w-4" aria-hidden="true" />
            <span>Flora</span>
          </Button>
        </div>

        <div className="relative min-w-[280px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama satwa atau tumbuhan..."
            className="h-11 pl-10 pr-4 text-xs rounded-xl"
          />
        </div>
      </div>

      {/* Grid of Species with spacious gutters */}
      {filtered.length === 0 ? (
        <Card className="border-dashed p-12 text-center shadow-none rounded-2xl">
          <Leaf className="mx-auto h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">Tidak Ada Spesies Ditemukan</p>
          <p className="text-xs text-muted-foreground mt-1">
            Coba gunakan kata kunci lain seperti &quot;Macan&quot;, &quot;Edelweiss&quot;, atau &quot;Elang&quot;.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => {
            const status = getStatusBadge(item.conservationStatus);

            return (
              <Card
                key={item.id}
                className="flex flex-col justify-between shadow-sm transition-all hover:border-primary/50 rounded-2xl overflow-hidden hover:shadow-md bg-card"
              >
                <div>
                  <CardHeader className="p-6 pb-4 space-y-3 border-b border-border/40 bg-muted/15">
                    {/* Category & Status Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                        {item.category === "FAUNA" ? "Satwa Endemik" : "Tumbuhan Hutan"}
                      </Badge>
                      <Badge variant={status.variant} className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${status.cls}`}>
                        {status.label}
                      </Badge>
                    </div>

                    {/* Names */}
                    <div>
                      <CardTitle className="text-xl font-black text-foreground leading-snug tracking-tight">
                        {item.commonName}
                      </CardTitle>
                      <p className="text-xs italic text-primary font-medium mt-1">
                        {item.scientificName}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-5 space-y-4">
                    {/* Habitat Elevation */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 rounded-xl px-3 py-2 border border-border/60 font-mono">
                      <Mountain className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                      <span>Zona Ketinggian :</span>
                      <span className="font-bold text-foreground tabular-nums">{item.habitatElevation}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-4 border-t border-border/60 bg-muted/20 flex flex-col items-start gap-3 text-xs">
                  <div className="w-full rounded-xl bg-background/80 p-3 border border-border/60">
                    <span className="font-bold text-foreground block text-[11px] font-mono uppercase tracking-wider mb-0.5">
                      Faktor Ancaman :
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.threats}
                    </p>
                  </div>

                  <div className="w-full bg-primary/5 rounded-xl p-3 border border-primary/15">
                    <span className="font-bold text-primary block text-[11px] font-mono uppercase tracking-wider mb-0.5">
                      Peran Ekosistem :
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.roleInEcosystem}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
