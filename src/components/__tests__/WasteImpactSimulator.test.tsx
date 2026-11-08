import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import WasteImpactSimulator from "../WasteImpactSimulator";

describe("WasteImpactSimulator Component", () => {
  it("should render material category selector tabs and initial calculation", () => {
    render(<WasteImpactSimulator />);

    expect(
      screen.getByText(/Simulasi Dampak & Konversi Nilai Sampah Anda/i)
    ).toBeInTheDocument();

    expect(screen.getByText("Plastik PET")).toBeInTheDocument();
    expect(screen.getByText("Kaleng Logam")).toBeInTheDocument();
    expect(screen.getByText("Limbah Organik")).toBeInTheDocument();
    expect(screen.getByText("Minyak Jelantah")).toBeInTheDocument();

    // Default 25 kg PET calculation (25 * 0.8 = 20 paving blocks)
    expect(screen.getByText(/20 Buah/i)).toBeInTheDocument();
    expect(screen.getAllByText("Eco-Paving Block K-250").length).toBeGreaterThanOrEqual(1);
  });

  it("should update calculations when material tab is switched", () => {
    render(<WasteImpactSimulator />);

    const metalTab = screen.getByText("Kaleng Logam");
    fireEvent.click(metalTab);

    expect(screen.getByText(/Tungku Biomassa & Asbak Saku/i)).toBeInTheDocument();
    expect(screen.getByText(/Tungku Biomassa Ultralight/i)).toBeInTheDocument();
  });

  it("should update calculations when slider or preset button is clicked", () => {
    render(<WasteImpactSimulator />);

    const preset50 = screen.getByRole("button", { name: "50 kg" });
    fireEvent.click(preset50);

    // 50 * 0.8 = 40 paving blocks
    expect(screen.getByText(/40 Buah/i)).toBeInTheDocument();
  });
});
