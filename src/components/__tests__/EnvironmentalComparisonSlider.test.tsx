import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import EnvironmentalComparisonSlider from "../EnvironmentalComparisonSlider";

describe("EnvironmentalComparisonSlider Component", () => {
  it("should render heading, before condition, and after condition tags", () => {
    render(<EnvironmentalComparisonSlider />);

    expect(
      screen.getByText(/Transformasi Nyata: Dari Timbunan Liar Menjadi Jalur Sirkular/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/SEBELUM : TIMBUNAN SAMPAH LIAR/i)).toBeInTheDocument();
    expect(screen.getByText(/SESUDAH : INTERVENSI CIRCULIFE/i)).toBeInTheDocument();
  });

  it("should change slider position when clicking quick preset buttons", () => {
    render(<EnvironmentalComparisonSlider />);

    const beforePreset = screen.getByRole("button", { name: /Kondisi Awal \(0%\)/i });
    fireEvent.click(beforePreset);
    expect(screen.getByText(/0% hasil sirkular/i)).toBeInTheDocument();

    const afterPreset = screen.getByRole("button", { name: /Hasil Sirkular \(100%\)/i });
    fireEvent.click(afterPreset);
    expect(screen.getByText(/100% hasil sirkular/i)).toBeInTheDocument();

    const balancedPreset = screen.getByRole("button", { name: /50 : 50/i });
    fireEvent.click(balancedPreset);
    expect(screen.getByText(/50% hasil sirkular/i)).toBeInTheDocument();
  });

  it("should update slider position via range input slider", () => {
    render(<EnvironmentalComparisonSlider />);

    const slider = screen.getByLabelText(/Posisi slider pembanding restorasi/i);
    fireEvent.change(slider, { target: { value: "75" } });

    expect(screen.getByText(/75% hasil sirkular/i)).toBeInTheDocument();
  });
});
