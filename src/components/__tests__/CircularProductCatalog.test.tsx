import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import CircularProductCatalog from "../CircularProductCatalog";

describe("CircularProductCatalog Component", () => {
  it("should render all default circular products with prices and names", () => {
    render(<CircularProductCatalog />);

    expect(screen.getByText("Eco-Paving Block Lereng Ciremai")).toBeInTheDocument();
    expect(screen.getByText(/Pupuk Kompos Organik Bio-Saninten/i)).toBeInTheDocument();
    expect(screen.getByText(/Tungku Ultralight Biomassa Upcycled/i)).toBeInTheDocument();
  });

  it("should filter products when category button is clicked", () => {
    render(<CircularProductCatalog />);

    // Filter to Paving Block PET
    const petFilter = screen.getByRole("button", { name: /paving block pet/i });
    fireEvent.click(petFilter);

    expect(screen.getByText("Eco-Paving Block Lereng Ciremai")).toBeInTheDocument();
    expect(screen.queryByText(/Pupuk Kompos Organik Bio-Saninten/i)).not.toBeInTheDocument();

    // Filter to Kompos Saninten
    const compostFilter = screen.getByRole("button", { name: /kompos saninten/i });
    fireEvent.click(compostFilter);

    expect(screen.getByText(/Pupuk Kompos Organik Bio-Saninten/i)).toBeInTheDocument();
    expect(screen.queryByText("Eco-Paving Block Lereng Ciremai")).not.toBeInTheDocument();
  });
});
