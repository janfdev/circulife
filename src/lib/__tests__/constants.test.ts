import { describe, it, expect } from "vitest";
import {
  CIRCULIFE_INFO,
  WASTE_FLOW_STAGES,
  CIRCULIFE_ARTICLES,
  CIRCULIFE_GALLERY,
  CIRCULIFE_FAQS,
  TNGC_INFO,
  TRAIL_SEEDS,
  SPECIES_SEEDS,
  EMERGENCY_CONTACTS,
  QUIZ_SEEDS,
} from "../constants";

describe("CircuLife Constants & Seed Data", () => {
  it("should define CircuLife brand metrics and national scope", () => {
    expect(CIRCULIFE_INFO.name).toBe("CircuLife");
    expect(CIRCULIFE_INFO.managedWasteTons).toBeGreaterThan(100);
    expect(CIRCULIFE_INFO.pavingBlocksManufactured).toBeGreaterThan(40000);
    expect(CIRCULIFE_INFO.partnerCommunitiesCount).toBeGreaterThanOrEqual(18);
  });

  it("should define exactly 4 chronological waste flow stages", () => {
    expect(WASTE_FLOW_STAGES.length).toBe(4);
    const steps = WASTE_FLOW_STAGES.map((s) => s.step);
    expect(steps).toEqual([1, 2, 3, 4]);

    for (const stage of WASTE_FLOW_STAGES) {
      expect(stage.inputMaterials.length).toBeGreaterThanOrEqual(2);
      expect(stage.outputProducts.length).toBeGreaterThanOrEqual(2);
      expect(stage.transformationProcess).toBeDefined();
    }
  });

  it("should define articles, gallery items, and FAQs", () => {
    expect(CIRCULIFE_ARTICLES.length).toBeGreaterThanOrEqual(4);
    expect(CIRCULIFE_GALLERY.length).toBeGreaterThanOrEqual(6);
    expect(CIRCULIFE_FAQS.length).toBeGreaterThanOrEqual(5);
  });

  it("should not contain em-dash characters anywhere in text (Anti-slop R-02)", () => {
    const allFlowText = WASTE_FLOW_STAGES.map(
      (s) => `${s.title} ${s.description} ${s.transformationProcess}`
    ).join(" ");
    expect(allFlowText).not.toContain("—");

    const allArticlesText = CIRCULIFE_ARTICLES.map(
      (a) => `${a.title} ${a.summary}`
    ).join(" ");
    expect(allArticlesText).not.toContain("—");

    const allFaqsText = CIRCULIFE_FAQS.map(
      (f) => `${f.question} ${f.answer}`
    ).join(" ");
    expect(allFaqsText).not.toContain("—");
  });

  it("should retain backward compatibility with TNGC alias", () => {
    expect(TNGC_INFO.peakElevationMeters).toBe(3078);
    expect(TRAIL_SEEDS.length).toBe(4);
  });
});
