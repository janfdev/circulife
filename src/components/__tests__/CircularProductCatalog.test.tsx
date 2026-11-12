import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import CircularProductCatalog from "../CircularProductCatalog";

describe("CircularProductCatalog Component", () => {
  it("should render all default circular products with prices and names", () => {
    render(<CircularProductCatalog />);

    expect(screen.getByText("Eco-Paving Block Plastik PET K-250")).toBeInTheDocument();
    expect(screen.getByText(/Pupuk Kompos Bio-Organik Kasgot/i)).toBeInTheDocument();
    expect(screen.getByText(/Tungku Ultralight Biomassa Upcycled/i)).toBeInTheDocument();
  });

  it("should filter products when category button is clicked", () => {
    render(<CircularProductCatalog />);

    // Filter to Paving Block PET
    const petFilter = screen.getByRole("button", { name: /paving block pet/i });
    fireEvent.click(petFilter);

    expect(screen.getByText("Eco-Paving Block Plastik PET K-250")).toBeInTheDocument();
    expect(screen.queryByText(/Pupuk Kompos Bio-Organik Kasgot/i)).not.toBeInTheDocument();

    // Filter to Kompos Bio-Kasgot
    const compostFilter = screen.getByRole("button", { name: /kompos bio-kasgot/i });
    fireEvent.click(compostFilter);

    expect(screen.getByText(/Pupuk Kompos Bio-Organik Kasgot/i)).toBeInTheDocument();
    expect(screen.queryByText("Eco-Paving Block Plastik PET K-250")).not.toBeInTheDocument();
  });

  it("should open and close the technical lab spec modal when clicking Uji Lab", () => {
    render(<CircularProductCatalog />);

    // Click Uji Lab button for the first product
    const labButtons = screen.getAllByRole("button", { name: /uji lab/i });
    expect(labButtons.length).toBeGreaterThan(0);
    fireEvent.click(labButtons[0]);

    // Check modal contents
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/Verifikasi Mutu & Laboratorium/i)).toBeInTheDocument();
    expect(screen.getByText(/SNI 03-0691-1996/i)).toBeInTheDocument();
    expect(screen.getByText(/25.8 MPa \(K-250 Equivalent\)/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ajukan kemitraan/i })).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole("button", { name: /tutup lembar uji lab/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
