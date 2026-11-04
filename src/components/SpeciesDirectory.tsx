"use client";

import React, { useState } from "react";
import { Species } from "@/types";
import { Search, ShieldAlert, Mountain, Sparkles, Filter, Leaf, Bird } from "lucide-react";

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
          cls: "bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-900",
        };
      case "ENDANGERED":
        return {
          label: "Terancam (EN)",
          cls: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900",
        };
      case "VULNERABLE":
        return {
          label: "Rentan (VU)",
          cls: "bg-yellow-100 text-yellow-900 border-yellow-300 dark:bg-yellow-950/60 dark:text-yellow-300 dark:border-yellow-900",
        };
      case "PROTECTED":
        return {
          label: "Dilindungi Penuh",
          cls: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900",
        };
      default:
        return {
          label: "Dilindungi",
          cls: "bg-muted text-muted-foreground border-border",
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-muted/60 border border-border">
          <button
            type="button"
            onClick={() => setCategoryFilter("ALL")}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
              categoryFilter === "ALL"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Semua Spesies ({speciesList.length})
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter("FAUNA")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
              categoryFilter === "FAUNA"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Bird className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Fauna</span>
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter("FLORA")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
              categoryFilter === "FLORA"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Flora</span>
          </button>
        </div>

        <div className="relative min-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama satwa atau tumbuhan..."
            className="w-full h-10 rounded-lg border border-border bg-background pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Grid of Species */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <Leaf className="mx-auto h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">Tidak Ada Spesies Ditemukan</p>
          <p className="text-xs text-muted-foreground mt-1">
            Coba gunakan kata kunci lain seperti &quot;Macan&quot;, &quot;Edelweiss&quot;, atau &quot;Elang&quot;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => {
            const status = getStatusBadge(item.conservationStatus);

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  {/* Category & Status Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      {item.category === "FAUNA" ? "Satwa Endemik" : "Tumbuhan Hutan"}
                    </span>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${status.cls}`}
                    >
                      {status.label}
                    </span>
                  </div>

                  {/* Names */}
                  <h3 className="text-lg font-bold text-foreground leading-snug">{item.commonName}</h3>
                  <p className="text-xs italic text-primary font-medium mb-3">
                    {item.scientificName}
                  </p>

                  {/* Habitat Elevation */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/30 rounded px-2.5 py-1.5 mb-3 border border-border/40">
                    <Mountain className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span>Zona Ketinggian :</span>
                    <span className="font-bold text-foreground tabular-nums">{item.habitatElevation}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-foreground block text-[11px] uppercase tracking-wider">
                      Faktor Ancaman :
                    </span>
                    <p className="text-muted-foreground text-[11px] leading-snug mt-0.5">
                      {item.threats}
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded p-2 border border-primary/10">
                    <span className="font-bold text-primary block text-[11px] uppercase tracking-wider">
                      Peran Ekosistem :
                    </span>
                    <p className="text-muted-foreground text-[11px] leading-snug mt-0.5">
                      {item.roleInEcosystem}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
