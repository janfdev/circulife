import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SpeciesDirectory from "../SpeciesDirectory";
import { SPECIES_SEEDS } from "@/lib/constants";

describe("SpeciesDirectory Component", () => {
  it("should render species cards with common and scientific names", () => {
    render(<SpeciesDirectory speciesList={SPECIES_SEEDS} />);

    expect(screen.getByText("Elang Jawa")).toBeInTheDocument();
    expect(screen.getByText(/Nisaetus bartelsi/i)).toBeInTheDocument();
    expect(screen.getByText("Macan Tutul Jawa")).toBeInTheDocument();
  });

  it("should filter species when selecting FLORA category", () => {
    render(<SpeciesDirectory speciesList={SPECIES_SEEDS} />);

    const floraBtn = screen.getByRole("button", { name: /^flora/i });
    fireEvent.click(floraBtn);

    expect(screen.getByText("Edelweiss Jawa")).toBeInTheDocument();
    expect(screen.queryByText("Elang Jawa")).not.toBeInTheDocument();
  });

  it("should filter species based on text search input", () => {
    render(<SpeciesDirectory speciesList={SPECIES_SEEDS} />);

    const searchInput = screen.getByPlaceholderText(/cari nama satwa atau tumbuhan/i);
    fireEvent.change(searchInput, { target: { value: "Surili" } });

    expect(screen.getByText(/Surili/i)).toBeInTheDocument();
    expect(screen.queryByText("Elang Jawa")).not.toBeInTheDocument();
  });
});
