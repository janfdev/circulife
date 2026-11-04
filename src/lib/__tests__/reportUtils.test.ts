import { describe, it, expect } from "vitest";
import {
  generateReportId,
  validateReportInput,
  filterSpecies,
  calculateFireRisk,
} from "../reportUtils";
import { SPECIES_SEEDS } from "../constants";

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
        description: "Ada kepulan asap",
        incidentType: "SMOKE",
        severity: "MEDIUM",
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
        description: "Terlihat kepulan asap putih dekat rumpun ilalang",
        incidentType: "SMOKE",
        severity: "MEDIUM",
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
        description: "Api kecil di semak",
        incidentType: "ACTIVE_FIRE",
        severity: "HIGH",
        coordinates: { lat: 100, lng: 200 }, // invalid lat/lng for Indonesia
      });
      expect(invalidCoords.isValid).toBe(false);
      expect(invalidCoords.errors.coordinates).toBeDefined();
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
      // High temp, low humidity, high wind -> EKSTREM or TINGGI
      const severe = calculateFireRisk(34, 30, 25);
      expect(["TINGGI", "EKSTREM"]).toContain(severe.level);

      // Mild temp, high humidity, low wind -> RENDAH
      const mild = calculateFireRisk(20, 85, 5);
      expect(mild.level).toBe("RENDAH");
    });
  });
});
