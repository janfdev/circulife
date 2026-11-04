import { describe, it, expect } from "vitest";
import { TNGC_INFO, TRAIL_SEEDS, SPECIES_SEEDS, EMERGENCY_CONTACTS, QUIZ_SEEDS } from "../constants";

describe("TNGC Constants & Seed Data", () => {
  it("should have correct factual elevation and province info", () => {
    expect(TNGC_INFO.peakElevationMeters).toBe(3078);
    expect(TNGC_INFO.province).toBe("Jawa Barat");
    expect(TNGC_INFO.regencies).toContain("Kuningan");
    expect(TNGC_INFO.regencies).toContain("Majalengka");
  });

  it("should define exactly 4 official hiking trails", () => {
    expect(TRAIL_SEEDS.length).toBe(4);
    const trailIds = TRAIL_SEEDS.map((t) => t.id);
    expect(trailIds).toContain("PALUTUNGAN");
    expect(trailIds).toContain("APUY");
    expect(trailIds).toContain("LINGGARJATI");
    expect(trailIds).toContain("SADAREHE");
  });

  it("should not contain em-dash characters in trail notes or descriptions (Anti-slop R-02)", () => {
    const allNotes = TRAIL_SEEDS.map((t) => t.notes).join(" ");
    expect(allNotes).not.toContain("—");

    const allSpeciesDesc = SPECIES_SEEDS.map((s) => `${s.description} ${s.roleInEcosystem}`).join(" ");
    expect(allSpeciesDesc).not.toContain("—");
  });

  it("should contain valid emergency contact phone numbers", () => {
    expect(EMERGENCY_CONTACTS.length).toBeGreaterThanOrEqual(4);
    for (const contact of EMERGENCY_CONTACTS) {
      expect(contact.phone).toBeDefined();
      expect(contact.phone.length).toBeGreaterThanOrEqual(6);
      expect(contact.name).toBeDefined();
    }
  });

  it("should have at least 1 correct answer per quiz question", () => {
    expect(QUIZ_SEEDS.length).toBeGreaterThanOrEqual(3);
    for (const q of QUIZ_SEEDS) {
      const correctOpts = q.options.filter((o) => o.isCorrect);
      expect(correctOpts.length).toBe(1);
    }
  });
});
