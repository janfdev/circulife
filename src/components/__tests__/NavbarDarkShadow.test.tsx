import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";
import { NavbarDarkShadow } from "../ui/navbar-dark-shadow";

describe("NavbarDarkShadow Component (Aceternity Tactile Dark Shadow)", () => {
  it("should render brand, desktopNav, and action elements", () => {
    render(
      <NavbarDarkShadow
        brand={<span>BRAND LOGO</span>}
        desktopNav={<a href="/test">NAV LINK</a>}
        actions={<button type="button">CTA BUTTON</button>}
      />
    );

    expect(screen.getByText("BRAND LOGO")).toBeInTheDocument();
    expect(screen.getByText("NAV LINK")).toBeInTheDocument();
    expect(screen.getByText("CTA BUTTON")).toBeInTheDocument();
  });

  it("should collapse announcement banner and apply tactile shadow when scrolled", () => {
    const { container } = render(
      <NavbarDarkShadow
        threshold={30}
        banner={<div data-testid="announcement">Live Dispatch</div>}
        brand={<span>BRAND LOGO</span>}
      />
    );

    const bannerContainer = screen.getByTestId("announcement").parentElement;
    expect(bannerContainer).toHaveClass("max-h-20");

    // Simulate scrolling past threshold
    act(() => {
      Object.defineProperty(window, "scrollY", { value: 60, writable: true });
      fireEvent.scroll(window);
    });

    // Check banner collapsed
    expect(bannerContainer).toHaveClass("max-h-0");

    // Check header gained compact padding
    const header = container.querySelector("header");
    expect(header).toHaveClass("pt-2");
  });

  it("should render mobile menu drawer when mobileMenuOpen is true", () => {
    const { rerender } = render(
      <NavbarDarkShadow
        mobileMenuOpen={false}
        mobileMenu={<div data-testid="mobile-items">Mobile Links</div>}
      />
    );

    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    rerender(
      <NavbarDarkShadow
        mobileMenuOpen={true}
        mobileMenu={<div data-testid="mobile-items">Mobile Links</div>}
      />
    );

    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-items")).toBeInTheDocument();
  });
});
