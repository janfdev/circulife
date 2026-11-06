import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { AnnouncementBanner } from "../blocks/announcement/AnnouncementBanner";

describe("AnnouncementBanner Component (uipkge.dev style)", () => {
  const mockItems = [
    {
      id: "ann-1",
      category: "release" as const,
      badgeText: "Sentra Nasional",
      title: "24 Drop-point aktif: 184.6 ton sampah terkelola.",
      actionLabel: "Pantau Sentra",
      actionUrl: "/pantau",
      cliSnippet: "bun run test",
    },
    {
      id: "ann-2",
      category: "feature" as const,
      badgeText: "Waste-to-Value",
      title: "Konversi botol PET hasilkan eco-paving block SNI.",
      actionLabel: "Kalkulator Nilai",
      actionUrl: "/pantau",
    },
  ];

  it("should render the initial announcement headline, category badge, and telemetry beacon", () => {
    render(<AnnouncementBanner items={mockItems} autoplay={false} />);

    expect(screen.getByText("CircuLife Telemetri")).toBeInTheDocument();
    expect(screen.getByText("Sentra Nasional")).toBeInTheDocument();
    expect(screen.getByText(/24 Drop-point aktif/i)).toBeInTheDocument();
    expect(screen.getByText("Pantau Sentra")).toBeInTheDocument();
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  it("should navigate to next and previous announcements when ticker buttons are clicked", () => {
    render(<AnnouncementBanner items={mockItems} autoplay={false} />);

    // Click next
    const nextBtn = screen.getByLabelText("Next announcement");
    fireEvent.click(nextBtn);

    expect(screen.getByText("Waste-to-Value")).toBeInTheDocument();
    expect(screen.getByText(/Konversi botol PET hasilkan/i)).toBeInTheDocument();
    expect(screen.getByText("2/2")).toBeInTheDocument();

    // Click prev
    const prevBtn = screen.getByLabelText("Previous announcement");
    fireEvent.click(prevBtn);

    expect(screen.getByText("Sentra Nasional")).toBeInTheDocument();
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  it("should dismiss the banner when the close button is clicked", () => {
    render(<AnnouncementBanner items={mockItems} autoplay={false} />);

    const dismissBtn = screen.getByLabelText("Tutup banner pemberitahuan");
    fireEvent.click(dismissBtn);

    expect(screen.queryByText("CircuLife Telemetri")).not.toBeInTheDocument();
  });
});
