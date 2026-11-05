import { describe, it, expect } from "vitest";
import {
  generateReportId,
  validateReportInput,
  filterSpecies,
  filterCircularProducts,
  calculateWasteImpact,
  calculateFireRisk,
} from "../reportUtils";
import { SPECIES_SEEDS, CIRCULAR_PRODUCTS } from "../constants";

describe("reportUtils", () => {
  describe("generateReportId", () => {
    it("should format report id as CRG-YYYYMM-XXX with 3 digit zero padding", () => {
      const fixedDate = new Date("2026-11-04T10:00:00Z");
      expect(generateReportId(1, fixedDate)).toBe("CRG-202611-001");
      expect(generateReportId(42, fixedDate)).toBe("CRG-202611-042");
      expect(generateReportId(999, fixedDate)).toBe("CRG-202611-999");
    });
  });

  describe("validateReportInput", () => {
    it("should reject input when mandatory fields are missing", () => {
      const result = validateReportInput({});
      expect(result.isValid).toBe(false);
      expect(result.errors.reporterName).toBeDefined();
      expect(result.errors.reporterContact).toBeDefined();
      expect(result.errors.trail).toBeDefined();
      expect(result.errors.locationDetail).toBeDefined();
      expect(result.errors.description).toBeDefined();
    });

    it("should reject contact with less than 8 digits or invalid format", () => {
      const result = validateReportInput({
        reporterName: "Budi Santoso",
        reporterContact: "123",
        trail: "PALUTUNGAN",
        locationDetail: "Pos 2",
        description: "Penyetoran sampah plastik",
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.reporterContact).toBe("Nomor kontak minimal 8 digit angka aktif");
    });

    it("should accept valid input", () => {
      const result = validateReportInput({
        reporterName: "Budi Santoso",
        reporterContact: "081234567890",
        trail: "PALUTUNGAN",
        locationDetail: "Sekitar Pos 2 menuju Tanjakan Asoy",
        description: "Menyetorkan 3 kg botol plastik PET terpilah",
      });
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    it("should validate optional coordinates if provided", () => {
      const invalidCoords = validateReportInput({
        reporterName: "Budi",
        reporterContact: "081234567890",
        trail: "APUY",
        locationDetail: "Pos 4",
        description: "Pengumpulan kaleng gas",
        coordinates: { lat: 100, lng: 200 }, // invalid lat/lng for Indonesia
      });
      expect(invalidCoords.isValid).toBe(false);
      expect(invalidCoords.errors.coordinates).toBeDefined();
    });
  });

  describe("calculateWasteImpact", () => {
    it("should accurately calculate paving blocks, compost, and CO2 reduction", () => {
      const impact = calculateWasteImpact(10, 8, 4);

      // 10 kg plastic * 0.8 = 8 paving blocks
      expect(impact.pavingBlocks).toBe(8);
      // 8 kg organic * 0.45 = 3.6 kg compost
      expect(impact.compostKg).toBe(3.6);
      // 4 canisters / 2 = 2 upcycled units
      expect(impact.canistersUpcycled).toBe(2);
      // points: 10*10 + 8*5 + 4*15 = 100 + 40 + 60 = 200
      expect(impact.seedlingPoints).toBe(200);
      // CO2 reduction > 0
      expect(impact.co2SavedKg).toBeGreaterThan(15);
      // Economic value > 0
      expect(impact.economicValueRp).toBeGreaterThan(50000);
    });

    it("should handle zero or negative inputs safely without throwing", () => {
      const impact = calculateWasteImpact(0, -2, -1);
      expect(impact.pavingBlocks).toBe(0);
      expect(impact.compostKg).toBe(0);
      expect(impact.canistersUpcycled).toBe(0);
      expect(impact.seedlingPoints).toBe(0);
    });
  });

  describe("filterCircularProducts", () => {
    it("should filter products by category", () => {
      const pavings = filterCircularProducts(CIRCULAR_PRODUCTS, "PAVING", "");
      expect(pavings.length).toBeGreaterThanOrEqual(1);
      expect(pavings.every((p) => p.category === "PAVING")).toBe(true);
    });

    it("should search circular products by material or name", () => {
      const results = filterCircularProducts(CIRCULAR_PRODUCTS, "ALL", "paving");
      expect(results.length).toBeGreaterThanOrEqual(1);
      expect(results[0].name).toContain("Paving");
    });
  });

  describe("filterSpecies", () => {
    it("should return all species when category is ALL and query is empty", () => {
      const result = filterSpecies(SPECIES_SEEDS, "ALL", "");
      expect(result.length).toBe(SPECIES_SEEDS.length);
    });

    it("should filter by category FAUNA and FLORA", () => {
      const faunas = filterSpecies(SPECIES_SEEDS, "FAUNA", "");
      expect(faunas.every((s) => s.category === "FAUNA")).toBe(true);

      const floras = filterSpecies(SPECIES_SEEDS, "FLORA", "");
      expect(floras.every((s) => s.category === "FLORA")).toBe(true);
    });

    it("should filter by search query (case-insensitive on common name or scientific name)", () => {
      const elang = filterSpecies(SPECIES_SEEDS, "ALL", "elang");
      expect(elang.length).toBe(1);
      expect(elang[0].commonName).toBe("Elang Jawa");

      const scientific = filterSpecies(SPECIES_SEEDS, "ALL", "panthera");
      expect(scientific.length).toBe(1);
      expect(scientific[0].commonName).toBe("Macan Tutul Jawa");
    });
  });

  describe("calculateFireRisk", () => {
    it("should compute risk level based on weather parameters", () => {
      const severe = calculateFireRisk(34, 30, 25);
      expect(["TINGGI", "EKSTREM"]).toContain(severe.level);

      const mild = calculateFireRisk(20, 85, 5);
      expect(mild.level).toBe("RENDAH");
    });
  });
});
