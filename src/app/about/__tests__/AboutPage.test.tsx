import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import AboutPage from "../page";

describe("AboutPage Component", () => {
  it("should render main headings and mission statements", () => {
    render(<AboutPage />);

    expect(screen.getByText(/Membangun Ekosistem Zero Waste Menuju Masa Depan Sirkular/i)).toBeInTheDocument();
    expect(screen.getByText(/Visi CircuLife 2030/i)).toBeInTheDocument();
    expect(screen.getByText(/Misi Strategis Kami/i)).toBeInTheDocument();
  });

  it("should render UN Sustainable Development Goals (SDG) alignment matrix", () => {
    render(<AboutPage />);

    expect(screen.getByText(/Matriks Keselarasan SDG PBB/i)).toBeInTheDocument();
    expect(screen.getByText(/SDG 12: Konsumsi & Produksi Bertanggung Jawab/i)).toBeInTheDocument();
    expect(screen.getByText(/SDG 13: Penanganan Perubahan Iklim/i)).toBeInTheDocument();
    expect(screen.getByText(/SDG 15: Ekosistem Daratan & Konservasi/i)).toBeInTheDocument();
  });

  it("should render closed-loop circular system architecture diagram", () => {
    render(<AboutPage />);

    expect(screen.getByText(/Arsitektur Alur Sistem Sirkular Tertutup/i)).toBeInTheDocument();
    expect(screen.getByText(/Sumber Hulu & Pemilahan Warga/i)).toBeInTheDocument();
    expect(screen.getByText(/Validasi Mutu & Uji Teknis SNI/i)).toBeInTheDocument();
  });
});
