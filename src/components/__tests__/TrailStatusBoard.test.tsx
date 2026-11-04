import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import TrailStatusBoard from "../TrailStatusBoard";
import { TRAIL_SEEDS } from "@/lib/constants";

describe("TrailStatusBoard Component", () => {
  it("should render all 4 official trails", () => {
    render(<TrailStatusBoard trails={TRAIL_SEEDS} />);

    expect(screen.getByText("Jalur Palutungan")).toBeInTheDocument();
    expect(screen.getByText("Jalur Apuy")).toBeInTheDocument();
    expect(screen.getByText("Jalur Linggarjati")).toBeInTheDocument();
    expect(screen.getByText("Jalur Sadarehe")).toBeInTheDocument();
  });

  it("should show correct fire risk badges", () => {
    render(<TrailStatusBoard trails={TRAIL_SEEDS} />);

    const sedangBadges = screen.getAllByText(/resiko:\s*sedang/i);
    expect(sedangBadges.length).toBeGreaterThanOrEqual(1);

    const tinggiBadges = screen.getAllByText(/resiko:\s*tinggi/i);
    expect(tinggiBadges.length).toBeGreaterThanOrEqual(1);
  });

  it("should display elevation range and length in kilometers", () => {
    render(<TrailStatusBoard trails={TRAIL_SEEDS} />);

    expect(screen.getByText(/9\.8\s*km/i)).toBeInTheDocument();
    expect(screen.getByText(/1\.100\s*-\s*3\.078\s*mdpl/i)).toBeInTheDocument();
  });
});
