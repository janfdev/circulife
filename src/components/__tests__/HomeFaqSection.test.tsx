import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import HomeFaqSection from "../HomeFaqSection";

describe("HomeFaqSection Component", () => {
  it("should render FAQ heading and question list", () => {
    render(<HomeFaqSection />);

    expect(
      screen.getByText(/Transparansi Operasional & Informasi Sirkular CircuLife/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Bagaimana cara mulai menyetorkan sampah ke CircuLife\?/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Apakah botol plastik harus dicuci sebelum disetorkan\?/i)
    ).toBeInTheDocument();
  });

  it("should open and close FAQ answers upon clicking question trigger", () => {
    render(<HomeFaqSection />);

    // First FAQ is open by default
    expect(
      screen.getByText(/Anda cukup memilah sampah di rumah ke dalam 3 wadah/i)
    ).toBeInTheDocument();

    // Click second FAQ
    const faq2Trigger = screen.getByText(/Apakah botol plastik harus dicuci sebelum disetorkan\?/i);
    fireEvent.click(faq2Trigger);

    expect(
      screen.getByText(/Ya, botol plastik PET sebaiknya dikosongkan dari sisa cairan/i)
    ).toBeInTheDocument();
  });
});
