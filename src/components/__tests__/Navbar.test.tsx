import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  it("should render the brand title and 3.078 mdpl elevation indicator", () => {
    render(<Navbar currentPath="/" />);
    expect(screen.getByText("CIREMAI GUARD")).toBeInTheDocument();
    expect(screen.getByText(/3\.078\s*mdpl/i)).toBeInTheDocument();
  });

  it("should render all 5 primary navigation links with valid routes", () => {
    render(<Navbar currentPath="/" />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));

    expect(hrefs).toContain("/");
    expect(hrefs).toContain("/lapor");
    expect(hrefs).toContain("/edukasi");
    expect(hrefs).toContain("/konservasi");
    expect(hrefs).toContain("/pantau");
  });

  it("should toggle the mobile navigation menu when toggle button is clicked", () => {
    render(<Navbar currentPath="/" />);
    const toggleButton = screen.getByRole("button", { name: /buka menu navigasi|menu navigasi/i });

    // Menu initially closed
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    // Click to close
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });

  it("should close mobile menu on Escape key press", () => {
    render(<Navbar currentPath="/" />);
    const toggleButton = screen.getByRole("button", { name: /buka menu navigasi|menu navigasi/i });

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });
});
