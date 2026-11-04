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
    <div className="space-y-6">
      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-muted border border-border">
          <Button
            type="button"
            variant={categoryFilter === "ALL" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCategoryFilter("ALL")}
            className="h-8 text-xs font-bold uppercase tracking-wider"
          >
            Semua Spesies ({speciesList.length})
          </Button>
          <Button
            type="button"
            variant={categoryFilter === "FAUNA" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCategoryFilter("FAUNA")}
            className="h-8 gap-1.5 text-xs font-bold uppercase tracking-wider"
          >
            <Bird className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Fauna</span>
          </Button>
          <Button
            type="button"
            variant={categoryFilter === "FLORA" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCategoryFilter("FLORA")}
            className="h-8 gap-1.5 text-xs font-bold uppercase tracking-wider"
          >
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Flora</span>
          </Button>
        </div>

        <div className="relative min-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama satwa atau tumbuhan..."
            className="h-10 pl-9 pr-3 text-xs"
          />
        </div>
      </div>

      {/* Grid of Species */}
      {filtered.length === 0 ? (
        <Card className="border-dashed p-12 text-center shadow-none">
          <Leaf className="mx-auto h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">Tidak Ada Spesies Ditemukan</p>
          <p className="text-xs text-muted-foreground mt-1">
            Coba gunakan kata kunci lain seperti &quot;Macan&quot;, &quot;Edelweiss&quot;, atau &quot;Elang&quot;.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => {
            const status = getStatusBadge(item.conservationStatus);

            return (
              <Card
                key={item.id}
                className="flex flex-col justify-between shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  <CardHeader className="pb-3 space-y-2">
                    {/* Category & Status Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-[11px] font-bold uppercase tracking-wider">
                        {item.category === "FAUNA" ? "Satwa Endemik" : "Tumbuhan Hutan"}
                      </Badge>
                      <Badge variant={status.variant} className={`text-[11px] font-bold uppercase tracking-wider ${status.cls}`}>
                        {status.label}
                      </Badge>
                    </div>

                    {/* Names */}
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground leading-snug">{item.commonName}</CardTitle>
                      <p className="text-xs italic text-primary font-medium mt-0.5">
                        {item.scientificName}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-3">
                    {/* Habitat Elevation */}
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/40 rounded-md px-2.5 py-1.5 border border-border/50">
                      <Mountain className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                      <span>Zona Ketinggian :</span>
                      <span className="font-bold text-foreground tabular-nums">{item.habitatElevation}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </CardContent>
                </div>

                <CardFooter className="pt-3 border-t border-border/60 flex-col items-start gap-2 text-xs">
                  <div className="w-full">
                    <span className="font-bold text-foreground block text-[11px] uppercase tracking-wider">
                      Faktor Ancaman :
                    </span>
                    <p className="text-muted-foreground text-[11px] leading-snug mt-0.5">
                      {item.threats}
                    </p>
                  </div>

                  <div className="w-full bg-primary/5 rounded-md p-2 border border-primary/10">
                    <span className="font-bold text-primary block text-[11px] uppercase tracking-wider">
                      Peran Ekosistem :
                    </span>
                    <p className="text-muted-foreground text-[11px] leading-snug mt-0.5">
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
