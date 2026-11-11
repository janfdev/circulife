import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import BioDigesterAnatomy from "../BioDigesterAnatomy";

describe("BioDigesterAnatomy Component", () => {
  it("should render machine figure title and callout indicators", () => {
    render(<BioDigesterAnatomy />);
    expect(
      screen.getByText(/The Communal Anaerobic Digester & Bio-Slurry Refinery/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/1. Inflow Limbah Organik/i)).toBeInTheDocument();
    expect(screen.getByText(/2. Reaktor Anaerobik Fermentasi/i)).toBeInTheDocument();
    expect(screen.getByText(/3. Bio-Gas CH4 Extraction/i)).toBeInTheDocument();
    expect(screen.getByText(/4. Keran Bio-Slurry Kasgot/i)).toBeInTheDocument();
  });

  it("should update gas volume and pressure when switching feed modes", () => {
    render(<BioDigesterAnatomy />);
    const boostBtn = screen.getByRole("button", { name: /Fermentasi Aktif/i });
    fireEvent.click(boostBtn);
    expect(screen.getByText(/1.85 m³\/hari/i)).toBeInTheDocument();

    const lowBtn = screen.getByRole("button", { name: /Pengisian Baru/i });
    fireEvent.click(lowBtn);
    expect(screen.getByText(/0.65 m³\/hari/i)).toBeInTheDocument();
  });
});
