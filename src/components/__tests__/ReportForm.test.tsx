import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ReportForm from "../ReportForm";

describe("ReportForm Component", () => {
  it("should render form inputs for reporter name, contact, trail, and description", () => {
    render(<ReportForm onReportSubmitted={vi.fn()} />);

    expect(screen.getByLabelText(/nama pelapor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nomor kontak/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/jalur pendakian/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/patokan lokasi/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rincian sampah/i)).toBeInTheDocument();
  });

  it("should show validation errors when submitting empty form", async () => {
    render(<ReportForm onReportSubmitted={vi.fn()} />);

    const submitBtn = screen.getByRole("button", { name: /kirim data setoran/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/nama pelapor wajib diisi/i)).toBeInTheDocument();
    expect(await screen.findByText(/kontak pelapor wajib diisi/i)).toBeInTheDocument();
  });

  it("should invoke onReportSubmitted with valid payload and generate a ticket ID", async () => {
    const handleSubmitted = vi.fn();
    render(<ReportForm onReportSubmitted={handleSubmitted} initialTrail="APUY" />);

    fireEvent.change(screen.getByLabelText(/nama pelapor/i), { target: { value: "Ahmad Dahlan" } });
    fireEvent.change(screen.getByLabelText(/nomor kontak/i), { target: { value: "081234567890" } });
    fireEvent.change(screen.getByLabelText(/patokan lokasi/i), { target: { value: "Pos 3 Arban" } });
    fireEvent.change(screen.getByLabelText(/rincian sampah/i), {
      target: { value: "15 botol plastik PET bersih dan 2 kaleng gas kompor kosong" },
    });

    const submitBtn = screen.getByRole("button", { name: /kirim data setoran/i });
    fireEvent.click(submitBtn);

    expect(handleSubmitted).toHaveBeenCalledTimes(1);
    const submittedReport = handleSubmitted.mock.calls[0][0];
    expect(submittedReport.id).toMatch(/^CRG-\d{6}-\d{3}$/);
    expect(submittedReport.reporterName).toBe("Ahmad Dahlan");
    expect(submittedReport.trail).toBe("APUY");
  });
});
