import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import WasteMachineAnatomy from "../WasteMachineAnatomy";

describe("WasteMachineAnatomy Component", () => {
  it("should render machine figure title and callouts", () => {
    render(<WasteMachineAnatomy />);
    expect(
      screen.getByText(/The Circular Extruder & Hex-Paving Hydraulic Press Rig/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/1. Flakes Inflow/i)).toBeInTheDocument();
    expect(screen.getByText(/2. 220°C Thermal Matrix/i)).toBeInTheDocument();
    expect(screen.getByText(/3. Paving Block K-250/i)).toBeInTheDocument();
  });

  it("should update pressure and cycle state upon interacting with cycle buttons", () => {
    render(<WasteMachineAnatomy />);
    const feedBtn = screen.getByRole("button", { name: /1. Feed/i });
    fireEvent.click(feedBtn);
    expect(screen.getByText(/40 Bar/i)).toBeInTheDocument();

    const meltBtn = screen.getByRole("button", { name: /2. Melt/i });
    fireEvent.click(meltBtn);
    expect(screen.getByText(/110 Bar/i)).toBeInTheDocument();
  });
});
