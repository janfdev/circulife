import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import WeatherRiskCalculator from "../WeatherRiskCalculator";

describe("WeatherRiskCalculator Component", () => {
  it("should render weather parameter controls for temperature, humidity, wind, and rainless days", () => {
    render(<WeatherRiskCalculator />);

    expect(screen.getByLabelText(/suhu udara/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/kelembaban relatif/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/kecepatan angin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/hari tanpa hujan/i)).toBeInTheDocument();
  });

  it("should calculate and display fire risk score and level", () => {
    render(<WeatherRiskCalculator />);

    expect(screen.getByText(/tingkat kerawanan:/i)).toBeInTheDocument();
    expect(screen.getByText(/skor kerawanan/i)).toBeInTheDocument();
  });

  it("should update risk level when clicking Kemarau Ekstrem preset", () => {
    render(<WeatherRiskCalculator />);

    const extremeBtn = screen.getByRole("button", { name: /kemarau ekstrem/i });
    fireEvent.click(extremeBtn);

    expect(screen.getByText(/EKSTREM|TINGGI/)).toBeInTheDocument();
  });
});
